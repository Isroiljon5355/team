import React, { useState } from 'react'
import datas from './rewiev/data'
import Cards from './Cards'
import "./amazon.css"
function Aamazom({handleClick}) {
    
  return (
    <section>
        {datas.map((item)=>(
            <Cards key={item.id} item={item} handleClick={handleClick} />
        ))}
    </section>
  )
}

export default Aamazom