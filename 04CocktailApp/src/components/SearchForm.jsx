/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from 'react'
import { useGlobalContext } from '../Context'

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext()
  const searchValue = useRef('')
  const [ser,setSer] = useState('a')

  useEffect(()=>{
    searchValue.current.focus()
  },[])

  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <section className='section search'>
      <form className='search-form' onSubmit={()=>{handleSubmit}}>
        <div className='form-control'>
          <label htmlFor='name'> search your favourite cocktail</label>
          {<input type='text' id='name' ref={searchValue} onChange={searchCocktail} />}
        </div>
      </form>
    </section>
  )
}

export default SearchForm