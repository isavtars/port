import React from 'react'
import './Myskill.css'




// syperjs
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";



import {Autoplay} from "swiper";


//icons

import { AiFillGithub,AiFillHtml5 } from "react-icons/ai";
import { DiCss3 ,DiReact} from "react-icons/di";
import { 
  SiRedux,
  SiTailwindcss,
  SiTypescript,
  SiMysql,
  SiMongodb,
  SiFlutter,
} from "react-icons/si";


import { IoLogoJavascript} from "react-icons/io";
import { GrNode} from "react-icons/gr";
import { TbBrandReactNative} from "react-icons/tb";






const Myskill = () => {
  
  
  return (
    

    <div className='contact lg:grid grid-cols-2 lg:h-screen xl:my-16 '>
         {/* .  skillrextcon */}
       <div className="skilltext mx-3 lg:mx-8 lg:mt-12">
        <div className="stcont py-2 ">

         <div className="textskil lg:my-1">
          <span className='text-1xl text-yellow-100'>
          &lt;h1&gt;
          </span>
          
        <h1 className='text-[#FCA61F] text-3xl lg:text-5xl font-bold cursor-pointer'>skill & <span>Experience</span></h1>
        <span className='text-1xl text-yellow-100'>  &lt;/h1&gt;</span>
        </div>


        <div className="frontend lg:my-9">
       
          
        <span className='text-1xl text-yellow-100'>
          &lt;body&gt;
          </span>
          <p className='text-white py-1'> Expert in front-end development including technologies like</p>
          <div className="basic">
          <span className='text-[#ffd700] lg:text-2xl  cursor-pointer lg:px-1'>HTML,</span>
      
      <span className='text-[#ffd700] lg:text-2xl lg:px-1 cursor-pointer'>CSS,</span>
      <span className='text-[#ffd700] lg:text-2xl  lg:px-1 cursor-pointer'>JS,</span>
          </div>
          
          <span className='text-[#ffd700] lg:text-2xl  cursor-pointer'>ReactJS,</span>
          <span className='text-[#ffd700] lg:text-2xl  cursor-pointer' >Redux,</span>
          <span className='text-[#ffd700] lg:text-2xl  cursor-pointer '> Tailwind,</span>
          <span className='text-[#ffd700] lg:text-2xl  cursor-pointer'> TypeScript,</span>
          <span className='text-[#ffd700] lg:text-2xl  cursor-pointer '> Git,</span>

          <div className="swiperf lg:my-5">
    
    
      <Swiper watchSlidesProgress={true} slidesPerView={3}   autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }} 
        modules={[Autoplay]}
        className="mySwiper">
       
        <SwiperSlide><AiFillHtml5  size={60}  color="red"/></SwiperSlide>
        <SwiperSlide><DiCss3  size={60}  color="#08fdd8"/></SwiperSlide>
        <SwiperSlide><IoLogoJavascript  size={60}  color="yellow"/></SwiperSlide>
        <SwiperSlide><DiReact  size={60}  color="#08fdd8"/></SwiperSlide>
        <SwiperSlide><SiRedux  size={60}  color="#764abc"/></SwiperSlide>
        <SwiperSlide><SiTailwindcss  size={60}  color="#08fdd8"/></SwiperSlide>
        <SwiperSlide><SiTypescript  size={60}  color="#007acc"/></SwiperSlide>
        <SwiperSlide><AiFillGithub size={60}  color="white"/></SwiperSlide>

      </Swiper>
          </div>
          </div>


          <div className="backend">
          <p className='text-white py-1'> Expert in backend-end development including technologies like</p>
          <span className='text-[#ffd700] lg:text-2xl  cursor-pointer'>Nodejs</span>
          <span className='text-[#ffd700] lg:text-2xl  cursor-pointer'> jwt</span>
          <span className='text-[#ffd700] lg:text-2xl  cursor-pointer'> mongoose</span>
          <span className='text-[#ffd700] lg:text-2xl  cursor-pointer'> MySql</span>

          <div className="swiperb lg:my-2">
                
          <Swiper watchSlidesProgress={true}    slidesPerView={2}
          autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }} 
        modules={[Autoplay]}
        className="mySwiper">
      <SwiperSlide><GrNode  size={60}  color="green"/></SwiperSlide>
      <SwiperSlide><SiMongodb  size={60}  color="green"/></SwiperSlide>
      <SwiperSlide><SiMysql  size={60}  color="red"/></SwiperSlide>
      <SwiperSlide><SiMysql  size={60}  color="red"/></SwiperSlide>
      <SwiperSlide><SiMysql  size={60}  color="red"/></SwiperSlide>
   
    </Swiper>
          </div>
        </div>


        <div className="mobile">
          <p className='text-white py-1'> Expert in Mobile application development including technologies like</p>
          <span  className='text-[#ffd700] lg:text-2xl  cursor-pointer'>ReactsNative</span>
          <span className='text-[#ffd700] lg:text-2xl  cursor-pointer'>  Flutter (exploring)</span>
          
          <div className="swiperm lg:my-2">
             
          <Swiper watchSlidesProgress={true} slidesPerView={1}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }} 
          modules={[Autoplay]}
           className="mySwiper">
          <SwiperSlide><TbBrandReactNative  size={60}  color="#08fdd8"/></SwiperSlide>
        <SwiperSlide><SiFlutter  size={60}  color="#08fda8"/></SwiperSlide>

        

      </Swiper>
          </div>
        </div>
        
        <span className='text-1xl text-yellow-100'>
          &lt;/body&gt;
          </span>
        </div>

   
       </div>


       <div className="skillanimation mx-2">
        <h1>animations</h1>
       </div>
    </div>

  )
}

export default Myskill

