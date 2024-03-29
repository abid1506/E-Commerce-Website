import React from 'react'
import slider from "../images/Slide1.jpeg";
import slider2 from "../images/Slide2.jpeg";
import "../../node_modules/swiper/swiper.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import {  Autoplay, Pagination } from 'swiper/modules';



const SwiperSlider = () => {
 
    return (

    <>
      <Swiper
         pagination={{ dynamicBullets: true, clickable: true, }} autoplay={{ delay: 6000, disableOnInteraction: false, }}

        modules={[Autoplay, Pagination]} className="mySwiper">

      <SwiperSlide>

        {/* <div className='swiperWrap zindex-fixed: 9999 '>
          <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-6 col-md-6 col-12'>
            <h4>STYLISH</h4>
            <h1>Men's Look</h1>
            <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in 
            laying out print, graphic or web designs.</p>
            <Link to='/shop/men' className='btn btn-primary'>Shop Now</Link>
            </div>
          </div>
          </div>
        </div>      */}

        <img className='img-fluid' src={slider2} alt='client'></img>       
      </SwiperSlide>
      <SwiperSlide>

        {/* <div className='swiperWrap'>
          <div className='container'>
          <div className='row align-items-center'>
          <div className='col-lg-6 col-md-6 col-12'>
            <h4>FABULOUS</h4>
            <h1>Women's Look</h1>
            <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in 
            laying out print, graphic or web designs.</p>
            <Link to='/shop/women' className='btn btn-primary'>Shop Now</Link>
            </div>
          </div>
          </div>
        </div>  */}

        <img className='img-fluid' src={slider} alt='client'></img>       
      </SwiperSlide>
 
      </Swiper>
    </>

  )
}

export default SwiperSlider;