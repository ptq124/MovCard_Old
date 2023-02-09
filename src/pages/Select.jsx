import React, { useEffect } from 'react'
import background from '../assets/selectBackground.png'
import MainLogo from '../components/common/MainLogo'
import Card from '../components/common/Card'
export default function Select() {
  useEffect(() => {
    const root = document.getElementById('root')
    root.style.background = `url(${background})`
    root.style.backgroundSize = 'cover'
  }, [])
  return (
    <div className='w-4/5  flex flex-col'>
      <MainLogo
        value={{
          width: 123.41,
          height: 54,
        }}
        css={'h-1/6 mx-auto mt-5'}
      ></MainLogo>
      <p className='Pretendard-M-25 h-1/6 flex justify-center items-center'>
        둘중 더 원하는 카드를 클릭 하세요.
      </p>
      <div className='mx-auto h-3/6 w-5/6 flex  justify-evenly items-center'>
        <Card />
        <Card />
      </div>
    </div>
  )
}
