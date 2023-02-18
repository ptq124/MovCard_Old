import React, { useEffect, useState } from 'react'
import background from '../assets/selectBackground.svg'
import MainLogo from '../components/common/MainLogo'
import Card from '../components/common/Card'
import BackSpace from '../components/common/BackSpace'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
export default function Select() {
  useEffect(() => {
    const root = document.getElementById('root')
    root.style.background = `url(${background})`
    root.style.backgroundSize = 'cover'
    const wrap = document.getElementsByClassName('wrap')[0]
    wrap.animate(
      [
        {
          opacity: 0,
        },
        {
          opacity: 1,
        },
      ],
      1000
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

  const changeQa = (stage, title) => {
    result.push({ title, stage })
    setResult([...result])
    qa.map((d) => (d.display = false))
    qa.map((d) => (d.stage === stage + 1 ? (d.display = true) : d))
    setQa([...qa])
  }
  const backQa = () => {
    if (!result.length) {
      navigate('/')
    } else {
      const stage = result.pop().stage
      qa.map((d) => (d.display = false))
      qa.map((d) => (d.stage === stage ? (d.display = true) : d))
      setQa([...qa])
    }
  }
  return (
    <div className='w-4/5 flex flex-col static'>
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
    </div>
  )
}
