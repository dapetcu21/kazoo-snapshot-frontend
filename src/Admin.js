import React, { useState, useEffect, useCallback } from 'react'
import classNames from 'classnames'

import './Admin.css'
import { API_URL, checkResponse, socket } from './api'

export default function Admin() {
  const [ images, setImages ] = useState([])
  const [ error, setError ] = useState(null)

  useEffect(() => {
    let mounted = true

    fetch(`${API_URL}/images`)
      .then(checkResponse)
      .then(res => res.json())
      .then(images => {
        if (mounted) { setImages(images); }
      }, setError)

    return () => { mounted = false }
  }, [])

  useEffect(() => {
    const fn = (image) => {
      setImages(im => ([image, ...im]))
    }

    socket.on('image_upload', fn)
    return () => socket.off('image_upload', fn)
  })

  const onNewImage = useCallback(() => {
    fetch(`${API_URL}/new_image`, { method: 'POST' })
      .then(checkResponse)
      .then(res => res.json())
      .then(({ id }) => {
        setImages(images_ => images_.map(image => (image.id === id
          ? { ...image, used: true }
          : image
        )))
      })
  }, [setImages])

  const onHideImage = useCallback(() => {
    fetch(`${API_URL}/hide_image`, { method: 'POST' })
      .then(checkResponse)
  }, [])

  const onShowQR = useCallback(() => {
    fetch(`${API_URL}/show_qr`, { method: 'POST' })
      .then(checkResponse)
  }, [])

  useEffect(() => {
    const fn = (evt) => {
      const { key } = evt
      if (key === 'r') {
        onNewImage()
      } else if (key === 'h') {
        onHideImage()
      } else if (key === 'q') {
        onShowQR()
      }
    }

    document.addEventListener('keydown', fn)
    return () => document.removeEventListener('keydown', fn)
  }, [onNewImage, onHideImage, onShowQR])

  if (error) {
    return <div>{error.toString()}</div>
  }

  const onDeleteImage = (id) => () => {
    fetch(`${API_URL}/image/${id}`, { method: 'DELETE' })
      .then(checkResponse)
      .then(res => res.json())
      .then(() => {
        setImages(images_ => images_.filter(image => image.id !== id))
      })
  }

  const onShowImage = (id) => () => {
    fetch(`${API_URL}/show_image/${id}`, { method: 'POST' })
      .then(checkResponse)
  }

  return (
    <div>
      <div>
        <button onClick={onNewImage}>Show random image (R)</button>
        <button onClick={onHideImage}>Hide image (H)</button>
        <button onClick={onShowQR}>Show QR (Q)</button>
      </div>
      <div className="adminImages">
        {images.map(image => {
          return (
            <div key={image.id} className={classNames('adminImage', image.used && 'adminImageUsed')}>
              <img
                className="adminImageImg"
                alt=""
                src={`${API_URL}/image/${image.id}`}
                onClick={onShowImage(image.id)}
              />
              <button className="adminImageDelete" onClick={onDeleteImage(image.id)}>Delete</button>
            </div>
          )
        })}
      </div>
    </div>
  )
}