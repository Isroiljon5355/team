import React, { useContext } from 'react'
import { textContext } from '../../../TextContext'

function First() {
    const data = useContext(textContext)
    return (
        <div style={{ gridTemplateColumns: "repeat(auto-fit, minmax(350px, auto))" }} className='grid gap-10 justify-between px-[8%]'>
            {
                data.map((item) => {
                    return <div className=' w-full bg-[rgba(255,255,255,.05)] rounded-xl overflow-hidden'>
                        <img className=' w-full rounded-xl z-10 hover:scale-100 duration-700' src={item.img} />
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