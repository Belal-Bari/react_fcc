import { useEffect, useState } from 'react'

function App() {
  const ImageSlider = ({ url='https://picsum.photos/v2/list', page=3, limit=4 }) => {
    const [images, setImages] = useState([])
    const [currentSlide, setCurrentSlide] = useState(0)
    const [errorMsg, setErrorMsg] = useState(null)
    const [loading, setLoading] = useState(false)

    async function fetchImage({getUrl = 'https://picsum.photos/v2/list', page=3, limit=4}) {
      try {
        setLoading(true)

        const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`)
        const data = await response.json()

        if(data) {
          setImages(data)
          setLoading(false)
        }
      } catch (error) {
          setErrorMsg(error.message)
          setLoading(false)
      }
    }

    useEffect(()=>{
      if(url !== '') {
        fetchImage(url,page,limit)
      }
    },[url])

    if(loading) {
      return <div>Loading Data ! Please Wait</div>
    }

    if(errorMsg !== null){
      return <div>Error occured! : {errorMsg}</div>
    }
    const handleClickLeft = () =>{
      setCurrentSlide(currentSlide===0 ? images.length-1 : currentSlide-1)
      //console.log(currentSlide)
    }
    const handleClickRight = () =>{
      if(currentSlide === (images.length-1)) setCurrentSlide(0)
      else setCurrentSlide(currentSlide+1)
      //console.log(currentSlide, images.length)
    }

    return(
      <div  className='flex justify-center py-11'>
        <button
        className='text-slate-500 text-4xl mr-4'
        onClick={handleClickLeft}
        >🡄</button>
        <div className='w-2/4'>
          {images && images.length? images.map((e, index)=>(
            currentSlide === index ? <img key={e.index} src={e.download_url} alt={e.download_url}/> : null
          )) : "not working"}
        </div>
        <button
        className='text-slate-500 text-4xl ml-4'
        onClick={handleClickRight}
        >🡆</button>
      </div>
      
    )
  }
  

  return (
    <>
      <h1 className="text-3xl text-blue-600 text-center py-4 font-bold underline shadow-md">
        Image Slider
      </h1>
      <ImageSlider />
    </>
  )
}

export default App
