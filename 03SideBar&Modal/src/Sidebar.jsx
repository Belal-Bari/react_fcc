import { useContext } from 'react';
import { links, social } from './data'
import { AppContext } from './AppProvider';
import { FaTimes } from 'react-icons/fa';

function Sidebar() {
  const {showSidebar,toggleSidebar} = useContext(AppContext)

  
  return (
    <div className={`${showSidebar? '':'hidden'} block border-2 border-red-500 w-2/6 bg-white`} style={{position:'fixed',top:'0',height:'100vh',zIndex:'1'}}>
        <h1 style={{textAlign:'center',fontSize:'36px',fontWeight:'bolder',paddingTop:'10px'}}>Menu</h1>
        <div className='flex justify-between px-10 pt-5 h-5/6 text-4xl'>
          <ul>
              {
                  links.map(link => {
                      const {id,url,text,icon} = link;
                      return (
                          <li key={id} style={{paddingBottom:'25px'}} >{icon}  <a href={url}>{text}</a></li> 
                      )
                  })  
                }
          </ul>
          <FaTimes onClick={toggleSidebar} style={{position:'absolute',top:'20px',right:'20px'}}/>
        </div>
        <div className='w-fit mx-auto text-2xl' style={{fontWeight:'bolder'}}>
        <ul style={{listStyleType:'none'}}>
              {
                  social.map(link => {
                      const {id,url,icon} = link;
                      return (
                          <li key={id} style={{display:'inline',padding:'0px 10px'}} ><a href={url}>{icon}</a></li> 
                      )
                  })  
                }
          </ul>
        </div>
    </div>
  )
}

export default Sidebar