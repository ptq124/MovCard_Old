import React from 'react'
import { ReactComponent as ExCard } from '../../assets/excard.svg'
import '../../assets/text-style.css'
export default function Card() {
  return (
    <>
      <div className='card w-72 h-[25.625rem] flex flex-col justify-evenly hover:-translate-y-8 transition delay-75 duration-300 ease-in-out '>
        <ExCard className='mx-auto mb-10'></ExCard>
        <p className='Pretendard-M-23 text-center text-black p-2.5 mb-10'>
          발자국이 많이 찍힌 눈길
        </p>
      </div>
    </>
  )
}
