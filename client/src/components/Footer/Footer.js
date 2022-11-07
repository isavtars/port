import React from 'react'

import {FaDiscord,FaInstagram,FaYoutube} from "react-icons/fa"
import { NavLink, useNavigate } from 'react-router-dom'
import "./Footer.js"
const Footer = () => {

  const navigator=useNavigate();
  //areyoavtar
  const areyoavtar=()=>{

    console.log("heooo")
  
    
     if(window.confirm('welcome to avtar world')){
      navigator("/dashboard")
     }else{
       navigator("/")
     }

    
  }
  return (
    <div className='2xl:my-14  lg:px-5 bg-[#0f0f0fc9]'>


<div className='my-5 lg:my-5 xl:my-10 dow-xl bg-red  shadow-lg rounded-md  2xl:my-14'>
      <section className="contactshort py-5 mx-1  shadow-lg rounded-md hidden lg:block ">
        <div className="grid grid-cols-3">
          <div>
            <h3 className='text-[#13a5d6] text-2xl font-semibold '>Ready to get started?</h3>
            <h3 className='text-slate-100 text-2xl   '>Talk to us today</h3>
          </div>

          <div className="contact-short-btn">
            <NavLink to="/">
              <div>
                <button className='button'></button>
              <button className='button'></button>
              <button className='button'></button>
              <button className='button'></button>
              </div>
                <div>
                <button className='button'></button>
              <button className='button'></button>
              <button className='button'></button>
              <button className='button'></button>
              </div>
                <div>
                <button className='button'></button>
              <button className='button'></button>
              <button className='button'></button>
              <button className='button'></button>
              </div>
            </NavLink>
          </div>           
             <div className='adsadsa  text-[white]' >                         
               <button onMouseMove={areyoavtar} className=" 
                rounded-full bg-[red] w-44 p-2">
              
               are you avtars
               </button>
          </div>
        </div>
      </section>

      {/* footer section  */}

      <footer className='hidden lg:block my-2  py-14  shadow-lg rounded-md'>
        <div className="container grid grid-cols-4">
          <div className="footer-about ml-1">
            <h3 className='text-[#13a5d6] text-3xl  font-semibold mb-2'>@avtar</h3>
            <p className='text-[#47bfea] text-xl font-semibold'>BIBEK BOHORA</p>
            <p className='text-[#92b7c4] text-xl font-semibold'>BCA STUDENT</p>
          </div>

          {/* 2nd column */}
          <div className="footer-subscribe ml-1 py-2">
            <h3 className='text-[#13a5d6] text-2xl  font-semibold mb-5 '>Subscribe to updates</h3>
            <form action="#" className='mb-2'>
              <input
                type="email"
                required
                
                autoComplete="off"
                placeholder="Entre Email to Suscribe"
                className='px-5 outline-none py-2 rounded-sm  text-[black]'
              />
             
            </form>
            <button className='button mb-2'> submit</button>
          </div>

          {/* 3rs column  */}
          <div className="footer-social ml-2">
            <h3 className='text-[#13a5d6] text-2xl  font-semibold mb-2'>Follows Us</h3>
            <div className="footer-social--icons  flex items-centercursor-pointer">
              <div className='ml-2 cursor-pointer'>
                <FaDiscord className="icons"  size={40} color="blue" />
              </div>
              <div className='ml-2 cursor-pointer'>
                <FaInstagram className="icons" size={40} color="white" />
              </div>
              <div className='ml-2 cursor-pointer'>                           
                  <FaYoutube className="icons" size={40}  color="red" />
               
              </div>
            </div>
          </div>

          {/* 4th column  */}
          <div className="footer-contact ml-2">
            <h3 className='text-[#13a5d6] text-2xl  font-semibold mb-2'>Call Us</h3>
            <h3 className='text-slate-100 text-xl font-semibold mb-2'>+977 9843111113</h3>
          </div>
        </div>


 {/* bottom section  */}
  <div className="footer-bottom--section  shadow-lg rounded-md   ">
          <hr  className='mb-2 text-zinc-800 text-2xl'/>
          <div className="container text-neutral-800 lg:text-1xl flex justify-between items-center  px-2 py-5">
            <p className='text-white'>
              @{new Date().getFullYear()} ITGARAGE. All Rights Reserved
            </p>
            <div>
              <p className='text-white'>PRIVACY POLICY
              TERMS & CONDITIONS</p>
            </div>
          </div>
        </div>
        
      </footer>

     

      <div className=" lg:hidden footer-bottom--section  shadow-lg rounded-md   bg-gradient-to-r from-purple-500 to-pink-500  mx-2  text-slate-50">
         
          <div className="container text-neutral-800 lg:text-1xl flex justify-between items-center  px-2 py-5">
            <p className='text-slate-50'>
              @{new Date().getFullYear()} ITGARAGE ALL right RESERVE
            </p>
            <div>
              <p className='text-slate-50'> PRIVACY POLICY
            </p>
            </div>
          </div>
        </div>

    </div>
    </div>
  )
}

export default Footer