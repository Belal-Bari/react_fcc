import React from "react"

const InputBox = ({
    amount,
    label,
    setAmount,
    options,
    selectedCountry='usd',
    amountDisabled= false,
    innerDiv,
    onCurrencyChange
}) =>{

    const styles = {
        innerDiv:{
            width: '95%',
            height:'40%',
            border:'1px solid grey',
            borderRadius:'5px',
            position: 'relative',
            left:'2.5%',
            top:'0%',
            diplay:'flex',
            justifyContent:'center',
            boxShadow:'50px 50px 0px #888888'
        },
        left:{
            width:'50%',
            height:'100%',
        },
        leftLable:{
            position: 'relative',
            top:'5vh',
            left:'7vw'
        },
        inputLeft:{
            border:'1px solid lightgray',
            position: 'relative',
            top:'7vh',
            left:'7vw',
            
            background:'transparent'
        },
        right:{
            width:'50%',
            height:'100%',
            position:'relative',
            top:'-102%',
            left:'50%'
        },
        select:{
            border:'1px solid lightgray',
            position:'relative',
            top:'7vh',
            left:'7vw'
        }
    }
    return(
        <div style={innerDiv}>
            <div style={styles.left}>
                <label 
                    htmlFor={label}
                    style={styles.leftLable}
                >{label}</label>
                <br />
                <input 
                    id={label}
                    type='number'
                    value={amount}
                    onChange= {(e)=>{setAmount(Number(e.target.value))}}
                    disabled={amountDisabled}
                    style={styles.inputLeft}
                />
            </div>
            <div style={styles.right}>
                <label 
                    style={styles.leftLable}
                    htmlFor="currencyType"
                >Currency Type</label>
                <br />
                <select
                    id='currencyType'
                    style={styles.select}
                    value={selectedCountry}
                    onChange={(e)=>{onCurrencyChange(e.target.value)}}
                >
                    {options.map(op=>(
                        <option key={op} value={op}>{op}</option>                      
                    ))}
                </select>
            </div>
            
        </div>
    )

}

export default InputBox