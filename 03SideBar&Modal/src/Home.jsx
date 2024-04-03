import React, { useContext, useEffect, useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { AppContext } from './AppProvider'

function Home() {

    const {toggleModal,toggleSidebar} = useContext(AppContext)
    return (
      <div className='flex w-full h-screen bg-sky-100'>
        <div className='w-1/4 h-full'>
          <button 
          className={`ml-8 mt-10 transition duration-300 animate-pulse text-4xl`}
          onClick={toggleSidebar}
          >
              <FaBars />
          </button>
        </div>
        <button 
        className='bg-blue-200 h-10 w-40 rounded-lg text-white my-60 ml-40'
        onClick={toggleModal}
        >SHOW MODAL</button>
      </div>
  )
}

export default Home
