/* eslint-disable react/prop-types */
import { useEffect } from 'react'
import { useState } from 'react'

const url = 'https://course-api.com/react-tours-project'

function App() {
  const [loading,setLoading] = useState(true)
  const [tours,setTours] = useState([])

  const fetchTours = async (url) => {
    try {
      setLoading(true)
      const response = await fetch(url)
      const tours = await response.json()
      console.log(tours)  
      setLoading(false)
      setTours(tours)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
    
  }

  useEffect(()=>{
    fetchTours(url)
  },[])

  const Tours =({tours}) => {
    

    return <section>
      <div style={{width:'100%',height:'100%',margin:'0px auto', padding:'50px 0px',fontFamily:'monospace',background:'#c8f4fa'}}>
        <h2 style={{textAlign:'center', color:'green',fontSize:'40px'}}>Our Tours</h2>
        <div style={{textAlign:'center',fontWeight:'bolder',fontSize:'40px',width:'10%',border:'1px solid green',margin:'30px auto'}}></div>
        <div style={{width:'100%',display:'flex',justifyContent:'center',flexWrap:'wrap',columnGap:'5%',rowGap:'50px'}}>
          {
            tours.map((tour)=> {
              
              return ( 
              <Tour key={tour.id} tour={tour} />  
              )
            })
          }
        </div>
      </div>
    </section>

  }
  const Tour = ({tour}) => {
    const {id,image,info,name,price} = tour
    const [readMore,setReadMore] = useState(false)
    

    return <div key={id} style={{minWidth:'300px',border:'none',borderRadius:'10px',width:'25%',height:'100%',background:'white',transition: 'box-shadow 0.3s', ":hover": { boxShadow: '2px 2px 10px black' }}}>
              <div style={{width:'100%',height:'300px',position:'relative'}}>
                <div style={{position:'absolute',top:'0px',left:'70.5%',width:'30%',padding:'10px 0px',textAlign:'center',zIndex:'2',border:'none',borderRadius:'0px 10px 0px 0px',background:'#3ce6b5',fontSize:'18px',color:'white',fontWeight:'lighter'}}>
                  <h4>${price}</h4>
                 </div>
                <img src={image} alt={name} style={{position:'relative',top:'0%',objectFit:'cover',width:'100%',height:'100%',borderRadius:'10px 10px 0px 0px'}} />
              </div>
              <footer>
                <div style={{display:'flex',justifyContent:'center',padding:'30px 0px',fontSize:'18px',width:'75%',margin:'0px auto',textAlign:'center'}}>
                  <h4>{name}</h4>
                  
                </div>
                <p style={{textAlign:'justify',padding:'0px 20px',color:'gray'}}>{readMore ? info : `${info.substring(0,200)}...`}
                  <button 
                  onClick={()=>{setReadMore(!readMore)}}
                  style={{border:'none',background:'white',color:'lightgreen',fontWeight:'bold',textShadow:'1px 1px 3px black'}}
                  >{readMore ? 'Show Less' : 'Read More'}</button>
                </p>
                <div style={{height:'50px',width:'100%',display:'grid',justifyContent:'center',paddingBottom:'50px',paddingTop:'30px'}}>
                  <button 
                  style={{border:'1px solid green',borderRadius:'5px',width:'230px',height:'90%',background:'white',color:'lightgreen',fontWeight:'bold',boxShadow:'1px 1px 10px lightgray',fontSize:'16px'}}
                  >Not Interested</button>
                </div>
                
              </footer>
            </div>
  }

  if(loading){
    return <h1 style={{textAlign:'center',padding:'10% 0px'}}>Loading...</h1>
  }
  return (
    <div>
      <Tours tours={tours} />
    </div>
  )
}

export default App
