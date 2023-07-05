import React from 'react'
import React, { useCart } from "react-use-cart"
function Add() {
  const {isEmpty, items }=useCart
  if(isEmpty) return <p>salom</p>
  return (
    <div>
        
    </div>
  )
}

export default Add