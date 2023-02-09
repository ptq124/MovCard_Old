import React, { useState } from 'react'
import MusicOff from './MusicOff'
import MusicOn from './MusicOn'
export default function Music() {
  const [isMusic, toggleMusic] = useState(false)
  const MusicCss = 'mr-7 relative bottom-1'
  const size = { width: 48, height: 48 }
  return (
    <button
      onClick={() => {
        toggleMusic(!isMusic)
      }}
    >
      {isMusic && <MusicOn value={size} css={MusicCss}></MusicOn>}
      {!isMusic && <MusicOff value={size} css={MusicCss}></MusicOff>}
    </button>
  )
}
