import React, { useCallback, useState } from 'react'
import Div100vh from 'react-div-100vh'
import { useDropzone } from 'react-dropzone'

import { API_URL, checkResponse } from './api'
import stripUrl from './strip.png'
import GDPRNotice from './GDPRNotice'
import './Collect.css'

const IDLE = 1
const UPLOADING = 2
const DONE = 3
const ERROR = 4
const ERROR_TOO_MANY = 5

function getText(state) {
  switch (state) {
    case IDLE: return 'Aruncă cu o poză în noi!'
    case UPLOADING: return 'Se încarcă poza...'
    case DONE: return 'Mulțumiim ❤️!\nDacă te lasă inima, mai bagă una!'
    case ERROR: return 'Ne pare rău 😢. Ceva nu a mers.\n Dar mai încearcă!'
    case ERROR_TOO_MANY: return 'Apreciem entuziasmul, dar maxim 5 deodată, te rugam!'
    default: return ''
  }
}

function Collect() {
  const [ state, setState ] = useState(IDLE)

  const onDrop = useCallback(acceptedFiles => {
    if (acceptedFiles.length > 5) {
      setState(ERROR_TOO_MANY)
      return
    }

    const data = new FormData();
    for (const file of acceptedFiles) {
      data.append('files', file)
    }

    setState(UPLOADING)
    fetch(`${API_URL}/upload`, {
      method: 'POST',
      body: data,
    }).then(checkResponse).then((data) => {
      setState(DONE)
    }, (err) => {
      console.error(err)
      setState(ERROR)
    })
  }, [setState])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: true,
  })

  const [ gdprAccepted, setGdprAccepted ] = useState(false)

  const onAcceptGDPR = useCallback(() => setGdprAccepted(true), [])

  return (
    <Div100vh className="collect">
      {gdprAccepted && (
        <>
          <div {...getRootProps()} className="dropzone">
            <input {...getInputProps()} />
            <div className="dropzoneContainer">
              {
                isDragActive ?
                  <p className="dropzoneText">Trântește-o aici</p> :
                  <p className="dropzoneText">{getText(state)}</p>
              }
            </div>
          </div>
          <img alt="" src={stripUrl} className="strip" />
        </>
      )}
      {!gdprAccepted && <GDPRNotice onAccept={onAcceptGDPR} />}
    </Div100vh>
  )
}

export default Collect;
