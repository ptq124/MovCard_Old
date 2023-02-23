import React from 'react'
import { ReactComponent as ArrowupIcon } from '../../assets/arrow_up.svg'
export default function ArrowUp({ go }) {
  return (
    <button
      className='h-20 w-20 flex justify-center items-center rounded-[64px] border border-solid border-[#ffffff]'
      onClick={() => {
        go()
      }}
    >
      <ArrowupIcon></ArrowupIcon>
    </button>
  )
}
