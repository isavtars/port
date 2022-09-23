
import React, { useState } from 'react'
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Contact.css'





const Contact = () => {

  const handlesubmit=(e)=>{
      e.preventDefault();
  
      // if(input.length > 0 ){
      //   // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
       emailjs.sendForm('service_w55nh0v' , 'template_4yxpps1', e.target, 'HYNamsHGHnpBFaoHD')
     
         .then((result) => {
          
        
             toast.success("send emil sucess");
             e.target.reset();
         }, (error) => {
           
           
             toast.error("try again");
         }
        
         );
        // }else{
        //   toast.error("fill all field");
        // }
       }

      
  return (
    <div className='contact lg:grid grid-cols-2 lg:h-screen 2xl:my-12'>

      <div className="gamil">
   
        <div className="gmailcont mx-3 2xl:mx-5 lg:my-9">
        <ToastContainer/>
            <h1 className=' text-4xl  cursor-pointer lg:text-6xl font-bold text-[#fb982f] py-2  lg:py-5 2xl:mx-2'>contact me</h1>
            
            <p className='mb-3   text-yellow-100 contl 2xl:mx-2 '> i am intersted working with the good people
             Kendra showed up to my store at a very tumultuous time - right after we opened Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, architecto.
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, sequi.
               </p>
             <form action=""  onSubmit={handlesubmit}  className=" my-2 lg:my-8"  autoComplete='off'>



             <div className='mb-3  2xl:mx-5 '>
              <input  className='input' type="text" placeholder='subjects'  name="subject"  />
           
            </div>


             <div className='mb-3  2xl:mx-5 '>
               <input className='input ' type="text" placeholder='name' name="name"  />
            </div>

           <div className=' mb-3   2xl:mx-5'>
              <input className='input ' type="text" placeholder='email' name="email"  />           </div>

           

           <div className='mb-3   2xl:mx-5'>
            
            <textarea  className="txtarea text-white" placeholder='messsage' name="message" id="" cols="78" rows="10"  ></textarea>

            
           </div>

            <button className='hierbuttons mb-3'>
              <input  className=" " type="submit"  value="Hier me"/>
            </button>

          </form>
          </div>
      </div>

      <div className='map text-white py-10'>
      <div className="mapcont  mx-2  lg:mx-10">
     
        <div className="googlema py-10">
        <iframe key={1} className='iframe lg:mx-28 w-[400px] xl:h-[36rem]  sm:w-[800px] lg:w-[600px] 2xl:w-[570px]   h-[450px] lg:h-[38rem]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.0898257571266!2d84.43203061515585!3d27.683618482801627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3994fb2d933d355d%3A0x5e79bbe09d977ee3!2sSaptagandaki%20Multiple%20Campus!5e0!3m2!1sen!2snp!4v1660361117116!5m2!1sen!2snp" style={{border:0}} ></iframe>
        </div>
        </div>
 
      </div>
    </div>
  )
}

export default Contact