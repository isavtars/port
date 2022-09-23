
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


import "./Home.css"
// import required modules
import {Autoplay,  Navigation, Pagination} from "swiper";


import Image1 from "../../assets/images/flutter.png"
import Image2 from "../../assets/images/js.png"
import Image3 from "../../assets/images/developer.png"
import Image4 from "../../assets/images/reacts.png"


//import components

import About from "../About/About"
import Myskill from "../Myskill/Myskill";
import Work from "../Work/Work"
import Contact from "../Contact/Contact"
import Footer from "../Footer/Footer"

const Home = () => {
  return (
    <>   

    <div className="homelayoutrrr lg:mx-2 xl:mx-5 w-full mx-10">
     <div className='homecont  lg:h-[95vh]   lg:mx-2 lg:w-[75vw] my-1 '>

    <div className="homecont lg:ml-20  xl:my-2">

 <Swiper

        dir="rtl"
        navigation={true}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
     
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src={Image1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={Image2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={Image3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={Image4} alt="" /></SwiperSlide>
       
      
      </Swiper> 
     
      </div>

    
    </div>



    {/* --------------------------------about---------------------------------- */}
     <div class="mainabou my-2 py-10 lg:my-0 lg:py-0">
            <About/>
        </div>
  
     {/* --------------------------------Myskill---------------------------------- */}

     <Myskill/>

      {/* --------------------------------Work-------------------------------- */}
       <div class="dsdsdds my-5 lg:my-0 lg:py-10">
       <Work/>
       </div>

     

           {/* ------------------------contacts-------------------------------- */}
          <div class="fedjdsfnsdfn lg:my-2 lg:py-5">
          <Contact/>
          </div>
      

            {/* ------------------------footer-------------------------------- */}

            <Footer/>
            </div>
    </>
  )
}

export default Home