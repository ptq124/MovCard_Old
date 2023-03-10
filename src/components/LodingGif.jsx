import React, { useEffect } from 'react'
import MainLogo from './common/MainLogo'
export default function LodingGif() {
  useEffect(() => {
    const root = document.getElementById('root')
    root.style.background = ''
    console.log('loading..')
  }, [])
  return (
    <div className='bg-[#111220] bg-cover w-screen h-screen flex flex-col items-center justify-center'>
      <MainLogo
        value={{
          width: 342,
          height: 163,
        }}
        css={'h-1/4'}
      ></MainLogo>
      <p>당신의 취향을 분석하고 있어요</p>
    </div>
  )
}
