import React, { useContext } from 'react'
import "../../../cards/cards.css"
import { textContext } from '../../../TextContext'

function First() {
    const data = useContext(textContext)
    return (
        <div className='foot mt-[30px] grid md:gap-10 justify-between px-[8%]'>
            {
                data.map((item) => {
                    return <div key={item.id} className=' mt-[30px] w-full bg-[rgba(255,255,255,.05)] rounded-xl overflow-hidden'>
                        <img className=' w-full rounded-xl z-10 hover:scale-105 duration-700 cursor-pointer' src={item.img} />
                        <div className='py-[20px] px-4'>
                            <span className=' text-white text-base font-semibold'>{item.name}</span>
                            <span className='text-[#f16262] text-base font-semibold ml-14'>{item.time}</span>
                            <div>
                                <h3 className='text-white text-2xl mt-3 duration-500 hover:text-fuchsia-800 cursor-pointer'>{item.title}</h3>
                                <p className='text-[#eaeaea] mt-3'>{item.text}</p>
                            </div>
                        </div>
                    </div>
                })
            }
        </div>
    )
}

export default First