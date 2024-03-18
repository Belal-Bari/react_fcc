import { useState } from 'react'


function App() {
  
  const Star = () => {
    const star = ['🟊','🟊','🟊','🟊','🟊','🟊']
    
    const [hover,setHover] = useState(0)
    const [ratings,setRatings] = useState(0)

    const haandleHover = (index) => {
      setHover(index+1)
    }

    const handleOutHover = () => {
      setHover(ratings)
    }

    const handleClick = (index) => {
      setRatings(index+1)
    }
    

    return(
      <div style={{display:'flex',justifyContent:'center' ,border:'none',borderRadius:'15px',margin:"0px auto",width:'45%',fontSize:'62px',background:'linear-gradient(to right, #999791, #52514e)',boxShadow:'2px 2px 18px black'}}>
        {star.map((e, index) => (
          <div 
          key={index} 
          style={(index+1)<=(hover||ratings) ? {color:'#fabd05', padding:'15px'} : { color: 'white', padding:'15px' }}
          onClick={()=>handleClick(index)}
          onMouseEnter={() => haandleHover(index)}
          onMouseLeave={() => handleOutHover()}
          >{e}</div>
        ))}
      </div>
    )
  }

  return (
    <div style={{background:'linear-gradient(45deg, #fa8805, #1105fa)',height:'100vh'}}>
      <h1 style={{textAlign:'center',paddingTop:'120px', paddingBottom:'50px',color:'#f09b13',textShadow:'2px 2px 28px black'}}>Rating</h1>
      <Star />
    </div>
  )
}

export default App
