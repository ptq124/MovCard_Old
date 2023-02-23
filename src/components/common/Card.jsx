import React from 'react'
import { ReactComponent as ExCard } from '../../assets/excard.svg'
import '../../assets/text-style.css'
export default function Card({ info, changeQa }) {
  const { title, display, stage, qa, id } = info
  const style = 'card w-72 h-[25.625rem] flex flex-col justify-evenly '
  let css = display ? style : style + 'hidden'
  const handler = () => {
    document.getElementsByClassName('card')[id].style.background =
      'linear-gradient(360deg, rgba(254, 254, 254, 0.4) 0%, rgba(204, 224, 255, 0.4) 44.94%, rgba(157, 167, 255, 0.4) 70.1%, rgba(106, 157, 255, 0.4) 97.33%), linear-gradient(337.18deg, rgba(255, 255, 255, 0.7) -16.5%, rgba(255, 255, 255, 0.7) -13.9%, rgba(135, 129, 206, 0.325579) 100.03%, rgba(123, 116, 201, 0.287) 105.56%)'
    let i = ''
    if (qa === 'Q1') i = 0
    if (qa === 'Q2') i = 2
    if (qa === 'Q3') i = 4
    if (qa === 'Q4') i = 6
    const card = document.getElementsByClassName('card')[i]
    const card2 = document.getElementsByClassName('card')[i + 1]
    card.style.transition = `ease 1s`
    card.style.transform = `translateY(600px)`
    card2.style.transition = `ease 1s`
    card2.style.transform = `translateY(600px)`
    setTimeout(() => {
      card.style.transform = `translateY(0px)`
      card2.style.transform = `translateY(0px)`
      document.getElementsByClassName('card')[id].style.background = ''
      changeQa(stage, title, id)
    }, 1000)
    if (i !== 6) {
      document.getElementsByClassName('card')[i + 2].animate(
        [
          {
            transform: `translateY(600px)`,
          },
          {
            transform: `translateY(0px)`,
          },
        ],
        {
          duration: 1500,
        }
      )
      document.getElementsByClassName('card')[i + 3].animate(
        [
          {
            transform: `translateY(600px)`,
          },
          {
            transform: `translateY(0px)`,
          },
        ],
        {
          duration: 1500,
        }
      )
    }
  }
  return (
    <>
      <div className={css} onClick={handler}>
        <ExCard className='mx-auto mb-10'></ExCard>
        <p className='Pretendard-M-23 text-center p-2.5 mb-10 '>{title}</p>
      </div>
    </>
  )
}
