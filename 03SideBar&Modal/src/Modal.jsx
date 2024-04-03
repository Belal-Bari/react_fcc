import React, { useContext } from 'react'
import { FaTimes } from 'react-icons/fa'
import { AppContext } from './AppProvider'

function Modal() {
  const {toggleModal,showModal} = useContext(AppContext)

  return (
    <div className={`${showModal ? '' : 'hidden'} border-lime-500 border-2 w-full h-full bg-gray-600 bg-opacity-45`} style={{position:'absolute',top:'0',zIndex:'2'}}>
        <div className=' flex justify-between mx-auto w-2/6 h-2/6 border-2 border-slate-500 bg-white text-4xl bg-opacity-100' style={{position:'relative',top:'25%'}}>
            <h3 style={{position:'relative',top:'35%',left:'20%',color:'black'}}>Modal content</h3>
            <button
            onClick={toggleModal}
            style={{position:'relative',top:'-35%',right:'2%'}}
            >
                <FaTimes />
            </button>
        </div>
      
    </div>
  )
}

export default Modal
