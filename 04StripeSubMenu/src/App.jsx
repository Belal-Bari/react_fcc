import './App.css'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Hero from './Hero'
import Submenu from './Submenu'
import hero from './assets/hero.svg'

function App() {
  
  return (
   <div className={`bg-blue-100`} >
    <div style={{backgroundImage:`url(${hero})`,zIndex:'2'}} className='bg-cover'>
      <Navbar />
      <Sidebar />
      <Hero />
      <Submenu />
    </div>
   </div>  
  )
}

export default App
