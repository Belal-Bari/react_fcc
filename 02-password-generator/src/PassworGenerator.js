import React from 'react'
import { useState, useEffect, useCallback, useRef } from 'react'

const PassworGenerator = () =>{

    const [length,setLength] = useState('6')
    const [numbers,setNumbers] = useState(false)
    const [chars,setChars] = useState(false)
    const [pass,setPass] = useState('')
    const inRef = useRef(null)

    const generatePassword = useCallback(() =>{
        let password = '';
        let alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
        let numerical = '1234567890'
        let characters = '!@#$%^&*()'
        
        if (chars) alpha += characters
        if (numbers) alpha += numerical

        for (let i = 0; i < length; i++) {
          const randomIndex = Math.floor(Math.random() * alpha.length);
          password += alpha[randomIndex];
        }
        setPass(password)
        
      }, [length, numbers, chars])
    
    useEffect(()=>{
        generatePassword()
      }, [length, numbers, chars])

    const copyToClipboard = () =>{
        window.navigator.clipboard.writeText(pass)
        inRef.current?.select()
    }

    const styles = {
        mainContainer: {
            height: '35vh',
            width: '40vw',
            minWidth: '450px',
            marginLeft: 'auto',
            marginRight: 'auto',
            background: '#6C9D97',
            marginTop: '30vh',
            boxShadow: '5px 5px 10px grey'
        },
        inptBtnContainer: {
            inptBtn:{
                display: 'flex',
                justifyContent: 'center',
                width: '21vw',
                minWidth: '258px',
                boxShadow:'2px 2px 10px grey',
                margin: '0px auto'
            },
            inpt: {
                border: 'transparent',
                height: '4vh',
                width: '16vw',
                minWidth: '194px',
                color: '#DC6504',
            },
            btn: {
                border: 'none',
                background: '#269C59',
                width: '5vw',
                minWidth: '60px',
                fontWeight: 'bold',
                fontSize: '16px',
                fontStyle: 'italic',
                fontFamily: 'sans',
                color: 'white'
            }
        },
        lastContainer: {
            display: 'flex',
            justifyContent: 'center',
            marginTop: '20px',
            color: 'white',
            
        }
    }

    return(
        <div style={styles.mainContainer}>
            <h1 style={{textAlign:'center',paddingTop:'40px',color:'white',fontStyle:'italic'}}>Password Generator</h1>
            <div style={styles.inptBtnContainer.inptBtn}>
                <input style={styles.inptBtnContainer.inpt} 
                    type = 'text'
                    value = {pass}
                    placeholder = 'Password'
                    readOnly
                    ref={inRef}
                />
                <button style={styles.inptBtnContainer.btn}
                    onClick={copyToClipboard}
                >Copy</button>
            </div>
            <div style={styles.lastContainer}>
                <input 
                    id='charLength'
                    type = 'range'
                    min = '6' max = '12'
                    value = {length}
                    onChange={(e)=> setLength(e.target.value)}
                />
                <label htmlFor='charLength'>Length: {length}  |</label>
                <input 
                    type= 'checkbox'
                    id= 'numerical'
                    defaultChecked= {numbers}
                    onChange={() => {setNumbers((prev)=> !prev )}}
                />
                <label htmlFor='numerical'>Add Numerical |</label>
                <input 
                    type= 'checkbox'
                    id= 'characters'
                    defaultChecked={chars}
                    onChange={() => {setChars((prev)=> !prev )}}
                />
                <label htmlFor='characters'>Add Characters</label>
            </div>
        </div>
    )
}

export default PassworGenerator