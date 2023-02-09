import React from 'react'
import { ReactComponent as Musicoff } from '../../assets/music_off.svg'
export default function MusicOff({ value, css }) {
  const { width, height } = value
  return <Musicoff width={width} height={height} className={css}></Musicoff>
}
