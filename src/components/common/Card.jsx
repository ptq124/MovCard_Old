import React from 'react'
import { ReactComponent as ExCard } from '../../assets/excard.svg'
import '../../assets/text-style.css'
export default function Card({ info, changeQa }) {
  const { title, display, stage, id } = info
  const style =
    'card w-72 h-[25.625rem] flex flex-col justify-evenly hover:-translate-y-8 transition delay-75 duration-300 ease-in-out '
  let css = display ? style : style + 'hidden'
  const handler = () => {
    const card = document.getElementsByClassName('card')
    for (let i = 0; i < card.length; i++) {
      card[i].style.transition = `ease 1s`
      card[i].style.transform = `translateY(500px)`
      setTimeout(() => {
        card[i].style.transform = `translateY(0px)`
        changeQa(stage, title)
      }, 900)
    }
  }
  return (
    <>
      <div className={css} onClick={handler}>
        <ExCard className='mx-auto mb-10'></ExCard>
        <p className='Pretendard-M-23 text-center p-2.5 mb-10'>{title}</p>
      </div>
    </>
  )
}
