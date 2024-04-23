import { useGlobalContext } from './Context'
import { FaBars } from 'react-icons/fa'
import logo from './assets/logo.svg'

function Navbar() {
  const {openSidebar,openSubmenu,closeSubmenu} = useGlobalContext()
  const displaySubmenu = (e) =>{
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect()
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;
    openSubmenu(page, { center, bottom })
    //console.log(page, ':',center,bottom,isSubmenuOpen)
  }
  const handleSubmenu = () => {
    closeSubmenu()
  }
  return (
    <nav className='flex justify-between w-full px-10 bg-transparent'>
      <div className='flex justify-between my-8 w-full bg-transparent'>
        <img src={logo} alt='logo' />
        <ul className='flex justify-between gap-x-6 pt-2 sm:hidden bg-transparent text-xl text-slate-500'>
          <li><button onMouseEnter={displaySubmenu} >products</button></li>
          <li><button onMouseEnter={displaySubmenu} >developers</button></li>
          <li><button onMouseEnter={displaySubmenu} >company</button></li>
        </ul>
        <button className='border-2 border-black rounded-md bg-black text-white text-xl w-28 mr-10 sm:hidden '>Sign in</button>
        <button onClick={openSidebar} className='text-3xl hidden sm:flex'>
          <FaBars />
        </button>
      </div>
    </nav>
  )
}

export default Navbar
