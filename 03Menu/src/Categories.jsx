/* eslint-disable react/prop-types */

function Categories({ categories, filterItems }) {

  return (
    <div className="mx-auto w-fit my-9">
      {
        categories.map((category) => 
        <button 
            type="button" 
            key={category} 
            onClick={()=>filterItems(category)}
            className="w-fit px-3 py-1 text-sm rounded-lg mx-5 text-white bg-orange-500 hover:bg-orange-900 hover:text-white hover:transition-all hover:shadow-xl"
        >
            {category.charAt(0).toUpperCase() + category.slice(1)}
        </button>)
      }
    </div>
  )
}

export default Categories
