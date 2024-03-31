/* eslint-disable react/prop-types */
import { useState } from 'react'
import data from './data'

function App() {
  const List = ({people}) => {
    return(
      <>
        {people.map(person => {
          const {id,name,age,image} = person
          return(
            <div key={id} style={{display:'flex',paddingLeft:'10%',padding:'2% 10%'}}>
              <img src={image} alt={name} style={{width:'80px',height:'80px',borderRadius:'50%',objectFit:'cover',boxShadow:'2px 2px 15px grey'}} />
              <div style={{paddingTop:'12px',paddingLeft:'20px'}}>
                <h4 style={{fontSize:'22px',color:'pink'}}>{name}</h4>
                <p style={{color:'gray'}}>{age} years</p>
              </div>
            </div>
          )
        })}
      </>
    )
  }
  const [people,setPeople] = useState(data)

  return (
   <main style={{minHeight:'100vh',height:'100%',width:'100%',fontFamily:'sans-serif',background:'pink',padding:'10vh 0px'}}>
    <section style={{width:'40vw',border:'none',margin:'0px auto',borderRadius:'10px',background:'white'}}>
      <h3 style={{textAlign:'center',fontSize:'32px',padding:'20px 0px',color:'pink'}}>{people.length} Birthdays Today</h3>
      <List people={people}/>
      <div style={{display:'flex',justifyContent:'center'}}>
        <button
        style={{border:'none',color:'gray',background:'pink',height:'30px',width:'70%',borderRadius:'15px',fontSize:'20px',fontWeight:'bold',margin:'25px 0px',boxShadow:'2px 2px 10px lightgrey'}}
        onClick={()=>setPeople([])}
        >Clear all</button>
      </div>
      
    </section>
   </main>
  )
}

export default App
