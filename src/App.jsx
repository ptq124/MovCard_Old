import React, { useState, useEffect } from 'react'
import Cricle from './components/Cricle'
import Cricle2 from './components/Cricle2'
import { Outlet } from 'react-router-dom'
import Loading from './components/Loading'
import background from '../src/assets/Frame67.svg'
function App() {
  const [ready, setReady] = useState(true)
  useEffect(() => {
    const root = document.getElementById('root')
    root.style.background = `url(${background})`
    root.style.backgroundSize = 'cover'
    setTimeout(() => {
      setReady(false)
    }, 1500)
  })
  return ready ? (
    <Loading />
  ) : (
    <div className='wrap'>
      <section className='container mx-auto h-screen w-screen flex'>
        <Cricle></Cricle>
        <Outlet></Outlet>
        <Cricle2></Cricle2>
      </section>
    </div>
  )
}

export default App
