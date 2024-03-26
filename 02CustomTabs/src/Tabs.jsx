/* eslint-disable react/prop-types */
import { useState } from 'react'

function Tabs({tabsContent, onChange}) {

    const [currentTab, setCurrentTab] = useState(0)

    const handleOnClick = (getIndex) =>{
      setCurrentTab(getIndex)
      onChange(getIndex)
    }
  return (
    <div style={{width:'100vw',display:'grid'}}>
        <div style={{display:'flex',justifyContent:'center'}}>
            {
                tabsContent.map((item, index) => <div onClick={()=>handleOnClick(index)} key={item.label} style={{padding:'25px 20px',fontSize:'18px',fontWeight:'bold',border:'solid',background:'purple',color:'white'}} >{item.label}</div>)
            }
        </div>
        <div style={{display:'flex',justifyContent:'center',padding:'30px 0px'}}>
            {/*{tabsContent[currentTab] && tabsContent[currentTab].content}*/}
            {tabsContent[currentTab] && tabsContent[currentTab].content ? tabsContent[currentTab].content : null}
        </div>
    </div>
  )
}

export default Tabs
