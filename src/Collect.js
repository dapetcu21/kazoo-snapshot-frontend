import React, { useCallback, useState } from 'react'
import Div100vh from 'react-div-100vh'
import { useDropzone } from 'react-dropzone'

import { API_URL } from './api'
import stripUrl from './strip.png'
import './Collect.css'

const IDLE = 1
const UPLOADING = 2
const DONE = 3
const ERROR = 4

function getText(state) {
  switch (state) {
    case IDLE: return 'Aruncă cu o poză spre noi!'
    case UPLOADING: return 'Se încarcă poza...'
    case DONE: return 'Mulțumiim ❤️!\nDacă te lasă inima, mai bagă una!'
    case ERROR: return 'Ne pare rău 😢. Ceva nu a mers.\n Dar mai încearcă!'
    default: return ''
  }
}

function Collect() {
  const [ state, setState ] = useState(IDLE)

  const onDrop = useCallback(acceptedFiles => {
    const data = new FormData();
    for (const file of acceptedFiles) {
      data.append('files', file)
    }

    setState(UPLOADING)
    fetch(`${API_URL}/upload`, {
      method: 'POST',
      body: data,
    }).then((data) => {
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

  return (
    <Div100vh className="collect">
      <div {...getRootProps()} className="dropzone">
        <input {...getInputProps()} />
        <div className="dropzoneContainer">
          {
            isDragActive ?
              <p>Trântește-o aici</p> :
              <p>{getText(state)}</p>
          }
        </div>
      </div>
      <img alt="" src={stripUrl} className="strip" />
    </Div100vh>
  )
}

export default Collect;
