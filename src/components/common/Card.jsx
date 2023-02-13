import React from 'react'
import { ReactComponent as ExCard } from '../../assets/excard.svg'
import '../../assets/text-style.css'
export default function Card({ info, changeQa }) {
  const { title, display, stage, id } = info
  const style =
    'card w-72 h-[25.625rem] flex flex-col justify-evenly hover:-translate-y-8 transition delay-75 duration-300 ease-in-out '
  let css = display ? style : style + 'hidden'
  const handler = () => {
    const card = document.getElementsByClassName('card')[id]
    card.style.transition = `ease 1s`
    card.style.transform = `scale(0.7)`
    setTimeout(() => {
      card.style.transform = `scale(1)`
      changeQa(stage, title)
    }, 900)
  }
  return (
    <>
      <div className={css} onClick={handler}>
        <ExCard className='mx-auto mb-10'></ExCard>
        <p className='Pretendard-M-23 text-center text-black p-2.5 mb-10'>
          {title}
        </p>
      </div>
    </>
  )
}
