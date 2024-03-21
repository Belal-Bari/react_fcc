import { useEffect, useId, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(-1)
  const [product, setProduct] = useState([])
  const [loading, setLoading] = useState(false)
  const [disabled, setDisabled] = useState(false)
  const id = useId

  async function fetchData() {
    try {
      setLoading(true)
      const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${
        count === 0 ? 0 : count * 20
      }`)
      const data = await response.json()
      if(data && data.products && data.products.length) {
        setProduct((prevData)=>[...prevData, ...data.products])
        setLoading(false)
      }
      console.log(product.length)
      console.log('count :',count)
    } catch (error) {
        console.log(error.message)
        setLoading(false)
    }
  }

  useEffect(()=>{
    if(count>=0) {
      fetchData()
      console.log('useEffect')
    } else {
      setCount(count + 1)
    }
    
  },[count])
  useEffect(()=>{
    product.length >= 100 ? setDisabled(true) : null
  },[product])

  return (
    <div style={{display:'flex',flexDirection:'column'}}>
      <h1 style={{textAlign: 'center'}}>Product Data</h1>
      <div style={{display: 'flex',flexWrap:'wrap',justifyContent:'space-between', rowGap:'10px'}}>
        {
          loading ? <h3>Loading Data</h3> : product && product.length ? product.map( item => (
            <div key={id} style={{display:'grid',justifyContent:'center',width:'260px',height:'280px',border:'1px solid black'}}>
              <img src={item.thumbnail} alt={item.title} width='80%' height='80%' />
              <p style={{textAlign:'center'}}>{item.title}</p>
            </div>
          )) : null
        }
      </div>
      <div style={{dislay:'flex',alignItems: 'center', width:'100%',border:'1px solid black'}}>
        <button
        onClick={()=> setCount(count + 1)}
        disabled={disabled}
        style={{margin:'auto'}}
        >{disabled ? 'You have reached 100 products' : 'Load More Products'}</button>
      </div>
      
    </div>
  )
}

export default App