import React from 'react'

function Zer() {
  return (
    <div className='flex min-h-screen items-center justify-center bg-neutral-900'>
        <div className=' grid grid-cols-1 md:grid-cols2 lg:grid-cols-3 gap-5'>
            <div className=' group relative items-center justify-center overflow-hidden cursor-pointer'>
                <div className=' h-96 w-72'>
                    <img className='h-full w-full object-cover' src="https://hostim-html.themetags.com/assets/img/home3/ft-15.jpg" alt="" />
                </div>
                <div className=' absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black'></div>
                <div className=' absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all'>
                    <h1 className='text-3xl font-bold text-white'>zero</h1>
                    <p className=' text-lg italic text-white mb-3'>Lorem ipsum dolor sit amet.</p>
                    <button className=' rounded-full bg-neutral-900 py-2 px-3 text-sm capitalize text-white'></button>
                </div>
            </div>
        </div>

        
    </div>
  )
}

export default Zer