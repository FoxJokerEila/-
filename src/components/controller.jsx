import React, { useEffect } from 'react'

const Controller = props => {
  const control = () => {
    let scale = 1.0
    let img = document.getElementById('imgblacktea')
    img.addEventListener('wheel', e => {
      let num = e.wheelDelta
      if (num > 0 && scale < 1.9) {
        scale = parseFloat(scale.toFixed(2)) + num * 0.001
        img.style.transform = 'scale(' + scale + ')'
      } else if (num < 0 && scale > 0.4) {
        scale = parseFloat(scale.toFixed(2)) + num * 0.001
        img.style.transform = 'scale(' + scale + ')'
      }
    })
  }
  useEffect(() => {
    control()
  })

  return (
    <>
      <img
        id='imgblacktea'
        src={props.src}
        alt={props.alt}
        style={props.style}
      ></img>
    </>
  )
}

export default Controller
