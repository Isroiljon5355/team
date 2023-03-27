import React from 'react'
import data from '../data/cardData'
import "./card.css"
import Text from './text/Text'

function Cards() {
    return (
        <div className='tool px-4 xl:px-[8%] py-10 bg-[#1e1e2c]'>
            <Text />
            <div className='content grid gap-10 items-center mt-20'>
                {data.map((item) => {
                    return <div key={item.id} className='inline relative overflow-hidden rounded-lg cursor-pointer'>
                        <img className=' w-full rounded-lg block h-auto transition-transform' src={item.mainImg} alt="main img" />
                        <div className='row w-full h-0 absolute rounded-lg top-0 left-0 overflow-hidden flex flex-col items-center justify-center transition-all px-2.5 text-center'>
                            <img src={item.little} alt="" />
                            <p className='text-white text-xl mb-4 py-2.5'>{item.text}</p>
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