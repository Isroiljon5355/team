import React, { useContext } from 'react'
import { textContext } from '../TextContext'
import First from './components/first/First'
import Title from './components/title/Title'

function Container() {
    const data = useContext(textContext)
    return (
        <div className=' py-[40px] bg-[#1e1e2c]'>
            <Title />
            <First />
        </div>
    )
}

export default Container