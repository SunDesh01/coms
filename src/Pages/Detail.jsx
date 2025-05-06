import React from 'react'
import { useParams } from 'react-router-dom'
import { productData } from './ProductData'


function Detail() {
    let {id}=useParams()
    let data=productData.find((a)=>a.id==id)
  return (
    <div>
      <h2>{data.title}</h2>
      <img src={data.thumbnail}/>
      <p>{data.description}</p>
      <p>{data.price}</p>
    </div>
  )
}

export default Detail
