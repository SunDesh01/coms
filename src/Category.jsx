
import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'

import cartContext from './cartContext'
import { productData } from './Pages/ProductData'


function Category() {
    let {state,dispatch}=useContext(cartContext)
    let {cid}=useParams()
    let bb=productData.filter((a)=>a.category==cid)
   // console.log(state.cartItems)
  return (
    <div>
      <h2>Category{cid}</h2>
      <section className='products'>
    
    <div className="flex">
        {bb.map((a)=>(
              <div key={a.id} className="pbox">
              <img src={a.thumbnail} alt=""/>
              <h5>{a.title}</h5>
              <p>{a.rating}</p>
              <Link className='btn' to={`/details/${a.id}`} > Read More  </Link>
              <button className='btn' onClick={()=>dispatch({type:'addtocart',payload:a})}> Add To Cart  </button>
            
            
               
       </div>

        ))}
     
    </div>
    <div>jkhgkjhjk</div>

   </section>
    </div>
  )
}

export default Category
