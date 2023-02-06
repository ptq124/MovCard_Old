import MainLogo from './components/common/MainLogo'
import Cricle from './components/Cricle'
import Cricle2 from './components/Cricle2'
import './assets/text-style.css'
import Button from './components/common/Button'
function App() {
  return (
    <>
      <section className='container mx-auto h-screen w-screen flex'>
        <Cricle></Cricle>
        <div className='w-4/5 flex flex-col items-center justify-center'>
          <MainLogo
            value={{
              width: 266,
              height: 126,
            }}
          ></MainLogo>
          <p className='Pretendard-M-30 p-10'>오늘 당신이 보아야 할 영화는?</p>
          <p className='Pretendard-R-27 p-5 mb-20'>
            세 장의 카드를 골라,
            <br /> 오늘 시청할 영화를 추천 받으세요.
          </p>
          <Button></Button>
        </div>
        <Cricle2></Cricle2>
      </section>
    </>
  )
}

export default App
