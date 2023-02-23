import React, { useLayoutEffect, useState } from 'react'
import background from '../assets/selectBackground.svg'
import MainLogo from '../components/common/MainLogo'
import Card from '../components/common/Card'
import BackSpace from '../components/common/BackSpace'
import { useNavigate } from 'react-router-dom'
//import bg from '../assets/Frame67.svg'
import axios from 'axios'
export default function Select() {
  useLayoutEffect(() => {
    const wrap = document.getElementsByClassName('wrap')[0]
    wrap.animate(
      [
        {
          opacity: 0,
        },
        {
          background: `url(${background})`,
          backgroundSize: 'cover',
          opacity: 1,
        },
      ],
      {
        duration: 1000,
        fill: 'forwards',
      }
    )
    getQa()
  }, [])
  const navigate = useNavigate()
  const [result, setResult] = useState([])
  const [qa, setQa] = useState([])
  const getQa = async () => {
    const res = await axios.get('/data/QA.json')
    setQa([...res.data])
  }

  const changeQa = (stage, title, id) => {
    result.push({ title, stage, id })
    setResult([...result])
    qa.map((d) => (d.display = false))
    qa.map((d) => (d.stage === stage + 1 ? (d.display = true) : d))
    setQa([...qa])
    if (result.length > 3) {
      const key = result.map((d) => d.id).join('')
      navigate(`/result/${key}`)
    }
  }
  const backQa = () => {
    if (!result.length) {
      const wrap = document.getElementsByClassName('wrap')[0]
      wrap.animate(
        [
          {
            opacity: 1,
          },
          {
            opacity: 0,
          },
        ],
        1000
      )
      setTimeout(() => {
        navigate('/')
      }, 1000)
    } else {
      const stage = result.pop().stage
      qa.map((d) => (d.display = false))
      qa.map((d) => (d.stage === stage ? (d.display = true) : d))
      setQa([...qa])
    }
  }
  return (
    <section className='w-4/5 flex flex-col static'>
      <BackSpace backQa={backQa} />
      <MainLogo
        value={{
          width: 123.41,
          height: 54,
        }}
        css={'h-1/6 mx-auto mt-5'}
      ></MainLogo>
      <p className='Pretendard-M-25 h-1/6 flex justify-center items-center'>
        둘중 더 원하는 카드를 클릭 하세요.
      </p>
      <div className='mx-auto h-3/6 w-5/6 flex  justify-center items-center gap-20'>
        {qa.map((info, index) => (
          <Card key={index} info={info} changeQa={changeQa} />
        ))}
      </div>
    </section>
  )
}
