import { useState } from 'react'
import QRCode from 'react-qr-code'

function App() {
  const QRCodeGenerator = () => {
    const [qrCode, setQrCode] = useState('')
    const [input, setInput] = useState('')

    const handleGenerate = () =>{
      setQrCode(input)
      setInput('')
    }
    return (
      <div style={{display:"grid",justifyContent:"center",width:"100vw",padding:'60px 0px',rowGap:'20px',background:'lightBlue',height:'100vh' }}>
        <h1 style={{textAlign:'center',textShadow:'2px 2px 10px black',color:'white'}}>QR Code Generator</h1>
        <div style={{display:'flex',justifyContent:'space-evenly'}}>
          <input 
          style={{border:'none',borderRadius:'5px'}}
          type='text' 
          name='qr-code' 
          placeholder='Enter your value' 
          value={input} 
          onChange={e => setInput(e.target.value)} />
          
          <button 
          style={{border:'none',borderRadius:'5px'}}
          disabled={input && input.trim() !== "" ? false : true} 
          onClick={handleGenerate} 
          >Generate</button>

        </div>
        <div>
          <QRCode
          id='qr-code-value'
          value={qrCode}
          size={400}
          bgColor='white'
          />
        </div>
      </div>
    )
  }

  return (
    <div>
      <QRCodeGenerator />
    </div>
  )
}

export default App
