import React from 'react'
import '../../assets/text-style.css'
import { ReactComponent as BackSpaceIcon } from '../../assets/keyboard_backspace.svg'
export default function BackSpace() {
  return (
    <button
      className='
        absolute left-32 top-[4.8rem] 
        Btn-Poppins-M-27 
        h-14 w-[11.5rem] 
        flex justify-center items-center gap-2.5 
        rounded-[47px] border border-solid border-[#ffffff] 
        hover:bg-backspace'
    >
      <BackSpaceIcon />
      Back
    </button>
  )
}
