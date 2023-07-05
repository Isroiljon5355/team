import React from 'react'
import "./amazon.css"

function Cards({item, handleClick}) {
    const {id, title,price,image} = item;
  return (
    <div className="cards">
        <div className="image_box">
            <img src={image} alt="" />
        </div>
        <div className="detalis">
            <p>{title}</p>
            <p>{price}</p>
            <button onClick={()=> handleClick(item)} className=' bg-yellow-300'>Add to card</button>
        </div>
        <h1 className='h1'>
  This little piggy wenknt to market and this little piggy stayed home.
</h1>
    </div>
  )
}

export default Cards