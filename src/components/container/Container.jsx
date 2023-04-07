import React from 'react'
import First from './components/first/First'
import Title from './components/title/Title'

function Container() {
    return (
        <div className=' py-[40px] bg-[#1e1e2c]'>
            <Title />
            <First />
        </div>
    )
}

export default Container