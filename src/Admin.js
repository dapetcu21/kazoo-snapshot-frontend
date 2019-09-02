import React, { useState, useEffect } from 'react'
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

  if (error) {
    return <div>{error.toString()}</div>
  }

  const onNewImage = () => {
    fetch(`${API_URL}/new_image`, { method: 'POST' })
      .then(checkResponse)
      .then(res => res.json())
      .then(({ id }) => {
        setImages(images_ => images_.map(image => (image.id === id
          ? { ...image, used: true }
          : image
        )))
      })
  }

  const onHideImage = () => {
    fetch(`${API_URL}/hide_image`, { method: 'POST' })
      .then(checkResponse)
  }

  const onShowQR = () => {
    fetch(`${API_URL}/show_qr`, { method: 'POST' })
      .then(checkResponse)
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
        <button onClick={onNewImage}>Show random image</button>
        <button onClick={onHideImage}>Hide image</button>
        <button onClick={onShowQR}>Show QR</button>
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