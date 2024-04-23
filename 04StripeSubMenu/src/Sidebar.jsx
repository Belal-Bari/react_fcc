import sublinks from './data'
import { useGlobalContext } from './Context.jsx'
import { FaTimes } from 'react-icons/fa'

function Sidebar() {
  const {isSidebarOpen,closeSidebar} = useGlobalContext()

  return (
    <div className={`${isSidebarOpen ? 'border-2 border-black absolute top-0 pt-5 w-full h-full bg-white z-10' : 'hidden'}`}>
      <div>
        <button 
        onClick={closeSidebar}
        className='text-3xl absolute right-10'
        ><FaTimes/></button>
        <div className='pt-10 text-center text-xl'>
          {
            sublinks.map((item,index) => {
              const {links,page} = item
              return (
                <div key={index} className='py-10'>
                  <h4 className='pb-5 text-3xl text-blue-700'>{page}</h4>
                  <div>
                    {
                      links.map((link,index) =>{
                        const {url,icon,label } = link
                        return (
                          <a key={index} href={url} className='px-5'>
                            {icon}
                            {label}
                          </a>
                        )
                      })
                    }
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Sidebar
