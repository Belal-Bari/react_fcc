import { useGlobalContext } from './Context'
import phone from './assets/phone.svg'

function Hero() {
  const {closeSubmenu} = useGlobalContext()
  
  return (
    <div onMouseOver={closeSubmenu} className='flex justify-evenly mx-10' style={{height:'508px'}} >
      <div className='pt-10'>
        <h1 className='text-4xl font-bold pb-10'>Payment Infra</h1>
        <p>description...</p>
        <button className='mt-10 border-red-800 rounded border-2 bg-orange-400 text-slate-500 w-32 h-9'>Start now!</button>
      </div>
      <div>
        <img src={phone} alt='mobile pic' height='80%' width='80%' />
      </div>
    </div>
  )
}

export default Hero
