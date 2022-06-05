import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Product = () => {
  const [first, setfirst] = useState({})
  let {id}=useParams()
 
  console.log(id)
  useEffect(() => {
    if(id){
    fetch(`http://localhost:3004/posts/${id}`).then((res)=>res.json()).then((res)=>setfirst(res))
    }
  }, [id])
  
  return (
    <div>Name:{first.name} price:{first.price}</div>
  )
}

export default Product