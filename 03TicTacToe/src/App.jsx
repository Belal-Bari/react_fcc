import { useEffect } from 'react'
import { useState } from 'react'

function App() {
  const [tiles, setTiles] = useState(Array(9).fill(null))
  //const [tiles, setTiles] = useState([0,1,2,3,4,5,6,7,8])
  const [mark, setMark] = useState(true)
  const [gameOver, setGameOver] = useState(false)
  const [player,setPlayer] = useState('')

  const handleClick = (currentIndex) => {
    //setCurrentIndex(index)
    console.log('one',tiles[currentIndex])
    if(tiles[currentIndex] === null) {
      if(mark) {
        setMark(!mark)
        const arr = [...tiles]
        arr[currentIndex] = '𛱅'
        setTiles(arr)
        setPlayer(arr[currentIndex])
      } else {
        setMark(!mark)
        const arr = [...tiles]
        arr[currentIndex] = '⛌'
        setTiles(arr)
        setPlayer(arr[currentIndex])
      }
    }
  }
  const check = () => {
    if(tiles[0]===tiles[1] && tiles[1]===tiles[2] && tiles[2]!==null) return setGameOver(!gameOver)
    if(tiles[0]===tiles[3] && tiles[3]===tiles[6] && tiles[6]!==null) return setGameOver(!gameOver)
    if(tiles[0]===tiles[4] && tiles[4]===tiles[8] && tiles[8]!==null) return setGameOver(!gameOver)
    if(tiles[2]===tiles[4] && tiles[4]===tiles[6] && tiles[6]!==null) return setGameOver(!gameOver)
    if(tiles[1]===tiles[4] && tiles[4]===tiles[7] && tiles[7]!==null) return setGameOver(!gameOver)
    if(tiles[2]===tiles[5] && tiles[5]===tiles[8] && tiles[8]!==null) return setGameOver(!gameOver)
    if(tiles[3]===tiles[4] && tiles[4]===tiles[5] && tiles[5]!==null) return setGameOver(!gameOver)
    if(tiles[6]===tiles[7] && tiles[7]===tiles[8] && tiles[8]!==null) return setGameOver(!gameOver)
  }

  useEffect(()=>{
    if(tiles) console.log(tiles)
    check()
  },[tiles])
  
  return (
    <div style={{width:'100vw',height:'100vh',paddingTop:'60px'}}>
      <h1 style={{textAlign:'center',paddingBottom:'20px'}}>Tic Tac Toe</h1>
      <div style={{width:'40vw',height:'60vh',border:'solid',display:'flex',flexWrap:'wrap',margin:'0px auto'}}>
        {
          tiles.map((tile,index) => 
            <div style={{width:'33.3%',height:'33.3%',border:'1px solid blue',textAlign:'center',lineHeight:'1.7',fontSize:'60px',fontWeight:'bolder'}} 
            key={index}
            onClick={()=>!gameOver && handleClick(index)}
            >{tiles[index] !== null && tiles[index]}</div>
          )
        }
      </div>
      {
        gameOver && <h3 style={{textAlign:'center',paddingTop:'18px'}}>The Winner is : player {player}</h3>
      }
    </div>
    
  )
}

export default App
