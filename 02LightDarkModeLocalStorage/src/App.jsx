import useLocalStorage from './useLocalStorage'


function App() {
  
  const LightDarkMode = () => {
    const [theme, setTheme] = useLocalStorage('theme', 'dark')

    const handleGenerate = () =>{
      setTheme(theme === 'light' ? 'dark' : 'light')
    }
    //console.log(theme)
    return <div style={{height:'100vh',width:'100vw',background:`${ theme === 'light'? 'white':'Grey'}`,color:`${ theme === 'light'? 'black':'white'}`,padding:'20px',transition:'background 0.5s, color 0.5s'}}>
      <div style={{display:'grid',justifyContent:'center',width:'100%',paddingTop:'10%'}}>
        <h1 style={{textAlign:'center'}}>Hello World</h1>
        <button onClick={handleGenerate}>Change Theme</button>
      </div>
    </div>
  }
  
  return (
    <div>
      <LightDarkMode />
    </div>
  )
}

export default App
