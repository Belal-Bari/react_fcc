import React from "react"
import { useState } from "react"
import useCurrencyInfo from './hooks/useCurrencyInfo'
import InputBox from "./Components/InputBox"


const CurrencyConverter = () =>{
    const [amount,setAmount] = useState(0)
    const [from,setFrom] = useState('usd')
    const [to,setTo] = useState('bdt')
    const [convertedAmount,setConvertedAmount] = useState(0)

    const currencyInfo = useCurrencyInfo(from)
    const options = Object.keys(currencyInfo)
    //console.log(options) 

    const convertCurrency = () =>{
        setConvertedAmount(amount * currencyInfo[to])
    }

    const swap = () => {
        setFrom(to)
        setTo(from)
        setConvertedAmount(amount)
        setAmount(convertedAmount)
      }
    
    const styles = {
        mainDiv: {
            backgroundImage:`url(https://images.pexels.com/photos/259132/pexels-photo-259132.jpeg?auto=compress&cs=tinysrgb&w=600`,
            width:'100vw',
            height:'100vh'
        },
        appDiv: {
            width:'70%',
            height:'50%',
            background:'rgba(255, 255, 255, 0.5)',
            position:'relative',
            top:'25vh',
            left:'16vw',
            border:'none',
            borderRadius:'10px'
        },
        form:{
            width:'100%',
            height:'100%'
        },
        button:{
            width:'80px',
            height:'12%',
            zIndex:'2',
            background: 'yellow',
            border:'1px solid lightgrey',
            borderRadius: '5px',
            position:'relative',
            top:'4%',
            left:'41.5%',
            boxShadow:'2px 2px 10px lightgrey'
        },
        lastDiv:{
            width: '95%',
            height:'40%',
            border:'1px solid black',
            borderRadius:'5px',
            position: 'relative',
            left:'2.5%',
            bottom:'1%',
            zIndex:'1'
        },
        innerDivOne:{
            width: '95%',
            height:'40%',
            border:'1px solid white',
            borderRadius:'5px',
            position: 'relative',
            left:'2.5%',
            top:'8%',
            diplay:'flex',
            justifyContent:'center',
            boxShadow:'12px 10px 10px lightgrey',
            background:'lightyellow'
        },
        innerDivTwo:{
            width: '95%',
            height:'40%',
            border:'1px solid white',
            borderRadius:'5px',
            position: 'relative',
            left:'2.5%',
            top:'0%',
            diplay:'flex',
            justifyContent:'center',
            boxShadow:'2px 2px 10px lightgrey',
            background:'lightyellow'
        },
        buttonTwo:{
            width:'150px',
            height:'12%',
            zIndex:'2',
            background: 'yellow',
            border:'1px solid lightgrey',
            borderRadius: '5px',
            position:'relative',
            top:'-6%',
            left:'37.5%',
            boxShadow:'2px 2px 10px lightgrey'
        }
    }

    return(
        <div style={styles.mainDiv}>
            <div style={styles.appDiv}>
                <form style={styles.form} onSubmit={(e)=> {
                        e.preventDefault()
                        convertCurrency()
                        
                    }}>
                    <InputBox 
                    amount={amount} 
                    label='From'
                    setAmount={(newAmount)=>setAmount(newAmount)}
                    options={options}
                    selectedCountry={from}
                    innerDiv={styles.innerDivOne}
                    onCurrencyChange={(currency)=>setFrom(currency)}
                    />

                    <button 
                    style={styles.button}
                    onClick={()=>swap()}
                    >Swap</button>

                    <InputBox 
                    amount={convertedAmount}
                    label='To'
                    
                    options={options}
                    amountDisabled
                    selectedCountry={to}
                    innerDiv={styles.innerDivTwo}
                    onCurrencyChange={(currency)=>setTo(currency)}
                    />
                    <button
                    style={styles.buttonTwo}
                    type='submit'
                    >{from.toUpperCase()} to {to.toUpperCase()}</button>
                </form>
                
            </div>
        </div>
    )

}

export default CurrencyConverter