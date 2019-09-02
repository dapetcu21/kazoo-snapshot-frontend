import React, { useState, useEffect } from 'react'
import Div100vh from 'react-div-100vh'
import QRCode from 'qrcode.react'

import { API_URL, socket } from './api'

import './Display.css'

function renderImage(image, { width, height }) {
  if (!image) { return null; }

  if (image === 'qr') {
    const urlComponents = window.location.href.split('/')
    if (urlComponents[urlComponents.length - 1] === '') { urlComponents.pop(); }
    urlComponents.pop()
    const url = urlComponents.join('/')

    const size = Math.min(height * 0.8, width)

    return (
      <div className="qrContainer">
        <QRCode value={url} includeMargin size={size} />
        <div className="qrURL">{url}</div>
      </div>
    )
  }

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

  const [ windowMetrics, setWindowMetrics ] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight,
  })

  useEffect(() => {
    const fn = () => {
      setWindowMetrics({
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight,
      })
    }

    window.addEventListener('resize', fn)
    return () => { window.removeEventListener('resize', fn) }
  }, [])

  return (
    <>
      <style>{'body { background: #000; }'}</style>
      <Div100vh className="displayContainer">
        {renderImage(image, windowMetrics)}
      </Div100vh>
    </>
  )
}
