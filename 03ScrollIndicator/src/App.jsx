/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {
  const ScrollIndicator = ({url}) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [scrollPercentage, setScrollPercentage] = useState(0)

    async function fetchData(getUrl){
      try {
        setLoading(true)
        const response = await fetch(getUrl)
        const data = await response.json()
        //console.log(data)
        if(data && data.products && data.products.length > 0){
          setData(data.products)
          setLoading(false)
        }
        
      } catch (error) {
        console.log(error)
        setErrorMessage(error.message)
      }
    }

    useEffect(() =>{
      if(url) fetchData(url)
    },[url])

    function handleScrollPercentage(){
      /*console.log(
        document.body.scrollTop,
        document.documentElement.scrollTop,
        document.documentElement.scrollHeight,
        document.documentElement.clientHeight
        )*/
      const scrolled = document.body.scrollTop || document.documentElement.scrollTop

      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight

      setScrollPercentage((scrolled/height) * 100)
    }

    useEffect(()=>{
      window.addEventListener('scroll', handleScrollPercentage)
      return () => {
        window.removeEventListener('scroll', ()=>{})
      }
    },[])
    //console.log(scrollPercentage)
    return <div style={{width:'98vw',display:'grid',justifyContent:'center',textAlign:'center'}}>
      <div style={{boxShadow:'2px 2px 10px grey',height:'10px',position:'fixed',width:`${scrollPercentage}%`,background:'violet',zIndex:'2'}}></div>
      <h1 style={{boxShadow:'2px 2px 10px grey',textShadow:'2px 2px 10px grey',background:'white',width:'100%',textAlign:'center',position:'fixed',padding:'20px',zIndex:'1'}}>Custom Scroll Indicator</h1>
      <div style={{paddingTop:'80px'}}>
        {
          data && data.length > 0 ? data.map((item, index) => <p style={{padding:'10px 0px'}} key={index}>{item.title}</p>) : null
        }
      </div>
    </div>
  }

  return (
    
      <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} />
    
  )
}
//https://picsum.photos/v2/list
export default App
