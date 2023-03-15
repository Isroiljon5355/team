import React from 'react'
import data from '../data/cardData'
import "./card.css"
import Text from './text/Text'

function Cards() {
    return (
        <div className='tool'>
            <Text />
            <div className='content'>
                {data.map((item) => {
                    return <div key={item.id} className='inline'>
                        <img src={item.mainImg} alt="main img" />
                        <div className='row'>
                            <img src={item.little} alt="" />
                            <p>{item.text}</p>
                            <div className='bottext'>
                                <a className='bottomhover' href="#">{item.href}</a>
                                <a className='bottomhover' href="#">{item.href2}</a>
                                <a className='bottomhover' href="#">{item.href3}</a>
                            </div>
                        </div>
                    </div>
                })}
            </div>
            {/* linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0)); */}
        </div>
    )
}

export default Cards