import React, { useState, useEffect } from 'react'
import Div100vh from 'react-div-100vh'

import { API_URL, socket } from './api'

import './Display.css'

function renderImage(image) {
  if (!image) { return null; }

  if (image === 'qr') { return 'QR'; }

  return (
    <div
      className="displayImage"
      style={{
        backgroundImage: `url(${API_URL}/image/${image.id})`
      }}
    />
  )
}

export default function Display() {
  const [ image, setImage ] = useState(null)

  useEffect(() => {
    const fn = (image) => {
      setImage({ id: image.id })
    }

    socket.on('show_image', fn)
    return () => socket.off('show_image', fn)
  }, [])

  useEffect(() => {
    const fn = (image) => {
      setImage(null);
    }

    socket.on('hide_image', fn)
    return () => socket.off('hide_image', fn)
  }, [])

  useEffect(() => {
    const fn = (image) => {
      setImage("qr");
    }

    socket.on('show_qr', fn)
    return () => socket.off('show_qr', fn)
  }, [])

  return (
    <>
      <style>{'body { background: #000; }'}</style>
      <Div100vh className="displayContainer">
        {renderImage(image)}
      </Div100vh>
    </>
  )
}
