/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import data from './data'

function Accordion() {
    const [selected, setSelected] = useState(false)
    const [enableMutiSelection, setEnableMultiSelection] = useState(false)
    const [multiple, setMultiple] = useState([])

    const handleSingleSelection = (currentId) => {
        setSelected(currentId === selected ? null : currentId)
    }

    const handleMultiSelection = (currentId) => {
        let cpyMultiple = [...multiple]
        const findIndexOfCurrentId = cpyMultiple.indexOf(currentId)

        if(findIndexOfCurrentId === -1) cpyMultiple.push(currentId)
        else cpyMultiple.splice(findIndexOfCurrentId, 1)

        setMultiple(cpyMultiple)
    }

  return (
    <div className='flex flex-col justify-center h-screen bg-gradient-to-r from-orange-900 via-blue-900 to-pink-900'>
        <div className='w-full flex justify-center'>
            <button onClick={()=>setEnableMultiSelection(!enableMutiSelection)} className={`${enableMutiSelection? 'bg-green-600':'bg-red-700'} px-3 py-2 rounded text-slate-100 font-bold text-xl `}>Enable multi selection</button>
        </div>
        
        <br />
        <div className='flex flex-col w-2/4 mx-auto'>
            {
                data && data.length>0 ? data.map(item => 
                <div key={data.id} className='pb-2 inline-block mx-auto w-full text-center'>
                    <div key={data.id} onClick={
                        enableMutiSelection ? 
                        ()=>handleMultiSelection(item.id) : 
                        ()=>handleSingleSelection(item.id)
                        } 
                        className='text-slate-100 font-bold flex justify-between bg-cyan-600 px-4 text-center'>

                        <h3 className='py-3 text-center w-full'>{item.question}</h3>
                        <span className='pr-auto leading-10'>+</span>
                        
                    </div>
                    {enableMutiSelection ? multiple.indexOf(item.id) !== -1 && (
                        <div key={data.id} className='text-slate-100 block bg-cyan-500 py-3 text-center'>{item.answer}</div>
                    ) : selected === item.id && (
                    <div key={data.id} className='text-slate-100 block bg-cyan-500 py-3 text-center'>{item.answer}</div>
                    )}
                </div>) : (<div>No data found!</div>)
            }
        </div>
    </div>
  )
}

export default Accordion
