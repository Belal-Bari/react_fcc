/* eslint-disable no-unused-vars */
import { useEffect,useRef, useState } from 'react'
import { useGlobalContext } from './Context'


function Submenu() {
  const {isSubmenuOpen,location,page:{page,links} } = useGlobalContext()
  const container = useRef(null)
  const [columns,setColumns] = useState('col-2')
  const [left,setLeft] = useState('')
  const [top,setTop] = useState('')
  //let left = ''
  //let top = ''
  useEffect(()=>{
    setColumns('columns-2')
    const submenu = container.current
    const {center,bottom} = location
    //submenu.style.left = `${center}px`
    setLeft(`${Math.round(center)}`)
    //submenu.style.top = `${bottom}px`
    setTop(`${Math.round(bottom)}`)
    if (links.length === 3){
      setColumns('columns-3')
    }
    if (links.length > 3){
      setColumns('columns-4')
    } 
    console.log('left : ',left, 'top : ',top)
  },[location])
  return (
    <div 
      
      style={isSubmenuOpen ? {zIndex:'3',position:'absolute',left:`${left-180}px`,top:`${top}px`,background:'white',border:'none',marginTop:'10px',transition:'all 0.3s linear',backgroundColor:'lightgrey',boxShadow:'2px 2px 10px grey',borderRadius:'10px',padding:'30px 0px'} : {display:'none'}}
      ref = {container}
    >
      <h4 className='text-center pb-5'>{page}</h4>
      <div>
        {
          links.map((link,index)=>{
            const {label,icon,url} = link
            return (
              <a key={index} className='px-5 gap-x-6'>
                {icon} {'  '}
                {label}
              </a>
            )
          })
        }
      </div>
    </div>
  )
}

export default Submenu
