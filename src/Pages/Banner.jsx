import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import "./Banner.css";
import 'swiper/css'
import { catData } from './catData';
import { productData } from './ProductData';
function Banner() {
  return (
    <>
    <section>
      <div className='banner'>
      <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><img src="image/image3.jpeg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="image/image2.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="image/image1.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="image/image3.jpeg" alt="" /></SwiperSlide>
    
    </Swiper>
    
      </div>
      <div>
        <h2>Our Latest Product</h2>
    </div>
    <section className='catogory'>
        {catData.map((a)=>(
 <div key={a.id} className='catbox'>
  <img src={a.img}/>
  <h4>{a.catname}</h4>
 </div>
        ))}
        
      </section>
      <section className='products'>
      <h3>New Arrivals</h3>
        <div className="flex">
    {productData.slice(0,24).map((a)=>(
  <div className="pbox" key={a.id}>
    <img src={a.thumbnail} alt="" />
    <h5>{a.title}</h5>
    <p>Read More</p>
    <p>Shop</p>
    
  </div>
    ))}
          
        </div>
      </section>

      </section>
  
      
    </>
  )
}

export default Banner
