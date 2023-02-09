import Cricle from './components/Cricle'
import Cricle2 from './components/Cricle2'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <section className='container mx-auto h-screen w-screen flex'>
        <Cricle></Cricle>
        <Outlet></Outlet>
        <Cricle2></Cricle2>
      </section>
    </>
  )
}

export default App
