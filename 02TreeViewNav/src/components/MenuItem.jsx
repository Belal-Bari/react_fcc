/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import MenuList from './MenuList'

function MenuItem({ item }) {

    const [display, setDisplay] = useState(false)

  return (
    <li style={{listStyle:'none',padding:'20px 0px'}}>
        <div onClick={()=>setDisplay(!display)} style={{display:'flex',justifyContent:'space-between',width:'90px'}}>
            <p>{item.label}</p>
            <p>
            {
                item && item.children && item.children.length ? '+' : null
            }
            </p>
        </div>
        
        <div>
        {
            item && item.children && item.children.length > 0 && display === true ? 
                <MenuList list={item.children} />
            : null
        }
        </div>
        
    </li>
  )
}

export default MenuItem
