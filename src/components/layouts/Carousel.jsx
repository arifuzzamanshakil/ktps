import React from 'react'
import Slider from "react-slick";
import { bottle, medicine3, people } from '../../assets/img';
import data from '../../data';

const Carousel = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    autoplay: true,
    fade: true,
  };

  return (
    <div>
     
          <Slider {...settings}>

            <div>
              <div className='flex bg-[#B158BF1A] border border-[#E5AEEE] rounded-[14px] gap-10 items-center py-[50px] px-[135px] text-white h-[270px]'>
                <img src={medicine3} alt="" />
                <p className=' text-lg font-Inter font-normal drop-shadow-8xl '>{data.carouselSec.carousel1.en.title}</p>
              </div>
            </div>
            <div>
              <div className='flex bg-[#B158BF1A] border border-[#E5AEEE] rounded-[14px] gap-10 items-center py-[50px] px-[135px] text-white h-[270px]'>
                <img src={bottle} alt="" />
                <p className=' text-lg font-Inter font-normal drop-shadow-8xl '>{data.carouselSec.carousel2.en.title}.</p>
              </div>
            </div>
            <div>
              <div className='flex bg-[#B158BF1A] border border-[#E5AEEE] rounded-[14px] gap-10 items-center py-[50px] px-[135px] text-white h-[270px]'>
                <img src={people} alt="" />
                <p className=' text-lg font-Inter font-normal drop-shadow-8xl '>{data.carouselSec.carousel3.en.title}</p>
              </div>
            </div>

          </Slider>
    
  
    </div>
  );
};

export default Carousel;