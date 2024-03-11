import useTheme from "../Context/ThemeChanger";

const Button = () =>{

    const {change} = useTheme()
    
    const handleChange = () =>{
        change()
    }
    return (
        <>
            <div style={{width:'150px',margin:'0px auto', position:'relative',top:'10vh',left:'10vw',fontSize:'20px'}}>
                <label
                htmlFor='label'
                style={{ textShadow:'1px 1px 1px #888888'}}
                >Toggler</label>
                <input
                id='label'
                type='checkbox'
                value=''
                onChange={handleChange}
                />
            </div>
            
        </>
        
    )
}

export default Button