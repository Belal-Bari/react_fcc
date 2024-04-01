/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'
import items from './data'
import Menu from './Menu'
import Categories from './Categories'

const allCategories = ['all', ...new Set(items.map((item) => item.category))]

function App() {
  const [menuItems,setMenuItems] = useState(items)
  const [categories,setCategories] = useState(allCategories)

  const filterItems = (category) =>{
    if(category === 'all'){
      setMenuItems(items)
    } else{
      const newItems = items.filter(item => item.category === category)
      setMenuItems(newItems)
    }
    
  }

  return (
    <div className='bg-sky-50 font-mono pb-16'>
      <div>
        <h1 className='text-center pt-16 pb-4 text-4xl text-green-700 font-bold'>Our Menu</h1>
        <div className='mx-auto w-1/12 border-solid border-2 border-orange-400'></div>
      </div>
      <Categories categories={categories} filterItems={filterItems} />
      <Menu items={menuItems} />
    </div>
  )
}

export default App
