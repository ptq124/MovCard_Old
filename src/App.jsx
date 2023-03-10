import React, { useEffect, useState } from 'react'
import Cricle from './components/Cricle'
import Cricle2 from './components/Cricle2'
import { Outlet, useLocation, useParams } from 'react-router-dom'
import Loading from './components/Loading'
import background from '../src/assets/Frame67.svg'
import Music from './components/common/Music'
import LodingGif from './components/LodingGif'
function App() {
  const [ready, setReady] = useState(true)
  const [resultLoading, setLoading] = useState(false)
  const { pathname } = useLocation()
  const { key } = useParams()

  useEffect(() => {
    console.log('root')
    const root = document.getElementById('root')
    root.style.background = `url(${background})`
    root.style.backgroundSize = 'cover'
    setTimeout(() => {
      setReady(false)
    }, 1500)
  }, [ready])

  useEffect(() => {
    if (pathname.replace('/' + key, '') === '/result') {
      setReady(false)
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
      }, 2000)
    }
  }, [pathname, key])

  return ready ? (
    <Loading />
  ) : (
    <div className='wrap'>
      {resultLoading ? (
        <LodingGif />
      ) : (
        <main className='container mx-auto h-screen w-screen flex relative'>
          {pathname.replace('/' + key, '') !== '/result' && <Cricle />}
          <Outlet></Outlet>
          {pathname.replace('/' + key, '') !== '/result' && <Cricle2 />}
        </main>
      )}
      <Music></Music>
    </div>
  )
}

export default App
