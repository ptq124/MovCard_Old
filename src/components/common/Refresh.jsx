import React from 'react'
import '../../assets/text-style.css'
import { ReactComponent as RefreshIcon } from '../../assets/refresh.svg'
export default function Refresh({ css }) {
  const style =
    'Btn-Poppins-M-27 h-14 w-[11.5rem] flex justify-center items-center gap-2.5 rounded-[47px] border border-solid border-[#ffffff]'
  return (
    <button
      className={style + css}
      onClick={() => {
        window.location.replace('/')
      }}
    >
      <RefreshIcon />
      Restart
    </button>
  )
}
