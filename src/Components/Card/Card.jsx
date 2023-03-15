import React from 'react'
import "./Card.css"
import {data} from "../../data"


function Card() {
    return (
      <div> 
          <div className="Sentenses">
              <h1>Gaming Product Corner</h1>
              <p>Compete with 100 players on a remote island for winner takes showdown known <br /> issue t feels at home on the head-up skin strategic.</p>
          </div>
      <section>
          { data.map( ( item ) =>
          {
              return <div key={ item.id }>
                  <div className="card">
                       <div className="item">
              <div className="price">
                          <p>{ item.price}</p>
          </div>
              <img src={item.Image} alt="" />
                  <div className="priceIcon">
                      {item.icon}
              </div>
              <div className="Text">
                   <h3>
                  {item.text.h3}
                  </h3>
                  <div className="TextPrice">
                              <p>{ item.text.p}</p>
                              <del>{ item.text.del}</del>
                  </div>
              <button className="btn">Add to card</button>
              </div>
          </div> 
                  </div>
              </div>
          })} 
            </section>
             </div>
  )
}

export default Card