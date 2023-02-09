import React from 'react'
import { ReactComponent as Musicon } from '../../assets/music_on.svg'
export default function MusicOn({ value, css }) {
  const { width, height } = value
  return <Musicon width={width} height={height} className={css}></Musicon>
}
