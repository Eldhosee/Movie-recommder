import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
const Swiper = () => {
  return (
    <>
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><img
          className='w-full h-full object-cover'
          src={`https://source.unsplash.com/random/200x200?sig=1`}
          alt="temp"
        /></SwiperSlide>
      <SwiperSlide><img
          className='w-full h-full object-cover'
          src={`https://source.unsplash.com/random/200x200?sig=2`}
          alt="temp"
        /></SwiperSlide>
      <SwiperSlide><img
          className='w-full h-full object-cover'
          src={`https://source.unsplash.com/random/200x200?sig=3`}
          alt="temp"
        /></SwiperSlide>
      <SwiperSlide><img
          className='w-full h-full object-cover'
          src={`https://source.unsplash.com/random/200x200?sig=4`}
          alt="temp"
        /></SwiperSlide>
     
    </Swiper></>
  )
}

export default Swiper