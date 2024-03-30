import { useEffect, useState } from 'react'


function App() {
  const [userName, setUserName] = useState('Belal-Bari')
  const [userData, setUserData] = useState({})
  const [loading, setLoading] = useState(false)

  async function fetchProfile(){
    setLoading(true)
    const res = await fetch(`https://api.github.com/users/${userName}`)

    const data = await res.json()
    console.log(data);
    if(data){
      setUserData(data)
      console.log(userData)
      setUserName('')
      setLoading(false)
    } 
  }
  const handleSubmit = () => {
    fetchProfile()
  }
  useEffect(()=>{
    fetchProfile()
  },[])

  return (
    <div style={{width:'100vw',display:'grid',justifyContent:'center',padding:'40px 0px'}}>
      <div style={{paddingBottom:'30px',display:'flex',justifyContent:'center',columnGap:'20px',width:'100%'}}>
        <input 
        name="search"
        type="text"
        placeholder='Search profile'
        value={userName}
        onChange={e=>setUserName(e.target.value)}
        />
        <button onClick={handleSubmit}>Search</button>
      </div>
      {loading ? <h3>Loading Data...</h3> : 
        <div style={{display:'grid',rowGap:'30px',justifyContent:'center', textAlign:'center',border:'1px solid black',borderRadius:'10px',width:'50vw',padding:'20px 0px'}} >
          <img  src={userData ? userData.avatar_url: ''} width='200px' />
          <a href={userData ? userData.html_url : ''} target='_blank'>{userData ? userData.name : ''}</a>
          <p>User joined on {userData ? `${new Date(userData.created_at).getDate()} ${new Date(userData.created_at).getMonth()} ${new Date(userData.created_at).getFullYear()}` : ''}</p>
          <p>Public repos {userData ? userData.public_repos : ''}</p>
          <p>Followers {userData ? userData.followers : ''}</p>
          <p>Following {userData ? userData.following : ''}</p>
        </div>
      }
    </div>  
  )
}

export default App
