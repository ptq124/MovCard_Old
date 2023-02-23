import React from 'react'
import { ReactComponent as ArrowdownIcon } from '../../assets/arrow_down.svg'
export default function ArrowDown({ back }) {
  return (
    <button
      className='h-20 w-20 flex justify-center items-center rounded-[64px] border border-solid border-[#ffffff]'
      onClick={() => {
        back()
      }}
    >
      <ArrowdownIcon></ArrowdownIcon>
    </button>
  )
}
