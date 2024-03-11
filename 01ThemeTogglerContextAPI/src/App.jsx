import { useState } from 'react'
import Card from './Components/Card'
import { ThemeProvider } from './Context/ThemeChanger'
import Button from './Components/Button'


function App() {
  const [background,setBackground] = useState('')
  const [font,setFont] = useState('')

  const change = () =>{
    const ba = (background==='') ? 'grey' : ''
    setBackground(ba)
    const fa = (font==='') ? 'white' : ''
    setFont(fa)
  }
  

  return (
    <ThemeProvider value={ {background, font, change} }>
      <Button />
      <Card />
    </ThemeProvider>
  )
}

export default App
