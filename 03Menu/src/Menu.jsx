/* eslint-disable react/prop-types */

function Menu({items}) {
  return (
    <div className="flex flex-wrap justify-center gap-x-8 gap-y-8 columns-3 ">
      {
       items.map((menuItem) => {
        const {id,title,img,desc,price} = menuItem;
        return (
            <div key={id} className="w-3/12 bg-white rounded-sm pb-4">
                <img src={img} alt={title} className="w-full h-60" style={{borderRadius:'5px 5px 0px 0px'}} />
                <div className="px-5">
                    <header className="py-4 flex justify-between">
                        <h4>{title.charAt(0).toUpperCase() + title.slice(1)}</h4>
                        <h4>{price}</h4>
                    </header>
                    <p className="text-justify">{desc}</p>
                </div> 
            </div>
        )
       }) 
      }
    </div>
  )
}

export default Menu
