import React from 'react'

export default function Cricle2() {
  return (
    <div className='flex flex-col justify-evenly h-full'>
      <div className='flex relative left-3 bottom-10'>
        <div className='bg-white w-10 h-10 rounded-full relative bottom-4 animate-[twinkle3_5s_infinite]'></div>
        <div className='bg-white w-10 h-10 rounded-full relative  right-3 animate-[twinkle_3s_infinite]'></div>
      </div>
      <div className='flex relative top-10'>
        <div className='bg-white w-20 h-20 rounded-full relative bottom-6  animate-[twinkle_5s_infinite]'></div>
        <div className='bg-white w-20 h-20 rounded-full relative right-4 top-2  animate-[twinkle3_5s_infinite]'></div>
      </div>
    </div>
  )
}
