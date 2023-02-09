import React from 'react'
import { ReactComponent as ExCard } from '../../assets/excard.svg'
export default function Card() {
  return (
    <div className='card w-72 h-96 flex flex-col justify-evenly'>
      <ExCard className='mx-auto'></ExCard>
      <p className='text-center text-black'>발자국이 많이 찍힌 눈길</p>
    </div>
  )
}
