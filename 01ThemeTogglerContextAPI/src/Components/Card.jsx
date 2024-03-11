import useTheme from "../Context/ThemeChanger";

const Card = () => {

    const {background,font} = useTheme()

    const styles = {
        main:{
            width:'25%',
            minWidth:'250px',
            height:'70vh',
            maxHeight:'450px',
            border:'none',
            borderRadius:'10px',
            margin:'12vh auto',
            textAlign:'center',
            background:`${background}`,
            color:`${font}`,
            boxShadow:'1px 1px 10px #888888'
        }
    }

    

    return(
        <div style={styles.main}>
            <h1 style={{paddingTop:'30px'}}>This is a card</h1>
            <img src='https://wallpapers.com/images/hd/cartoon-pictures-99b9skxa9r0o80xm.jpg' alt='pooh' width='250px' height='250px' />
            <h2>Winnie the Pooh</h2>
        </div>
    )
}

export default Card