import React, { } from 'react'
import './About.css'
import Image3 from "../../assets/images/bibek.jpg"
import { init } from 'ityped'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const About = () => {

 
  // const textRef=useRef();
  // useEffect(() => {
  //   init(textRef.current,{
  //     showCursor:true,
  //     backDelay:1500,
  //     backSpeed:66,
  //     strings:['web','mern','app','software']
  //   })
  // },)

  
const pdfd=()=>{
  setTimeout(()=>{
    toast.success("cv download sucess");
  },3000)
}
  
  return (
    <div className='aboutcont text-white contact lg:grid grid-cols-2 lg:h-screen xl:my-5 '>
        
   
   
     <div className="text  px-2">
      <div className="textcont mx-3 lg:my-9">
    <ToastContainer/>
    
      <div className="textcont mx-2 py-1">
        <h1 className='text-2xl'>HI I AM</h1>
        <h1 className='text-xl '>BIBEK CHHETRI</h1>
        <div class="wrapper">
    <div class="static-txt">I'm a</div>
    <ul class="dynamic-txts">
      <li><span>mernstack</span></li>
      <li><span>software</span></li>
      <li><span>Freelancer</span></li>
    </ul>
  </div>
        <p className='text-2xl text-[#F5C32C]' >BCA STUDENT</p>
        <p className='xxp py-2 lg:py-5 lg:text-1xl'>
          hello every one  i want to develop my carier 
          in software engering
          i am export in MERNSTACT
         i am working REACTS NATIVE
          alsow exporoling mobile deveklopment with flutter
        </p>
      <p className=' py-2 lg:py-5 lg:text-1xl '>   I’m very ambitious fullStack developer looking for a role in
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.</p>

            <p className=' py-5 lg:py-5 lg:text-1xl'>   I’m very ambitious fullstact/mern developer looking for a role in
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.</p>
            <button className='dbutton' onClick={pdfd} > <a href='mycv.pdf'  download=' avtart cv'>DownLOAD cv</a></button>
            </div>
            </div>

            
     </div>

     <div className="skill   "> 
        <div className="skill_cointener lg:mx-1 mx-2">
         <img src={Image3}  alt="" />
        </div>
     </div>
    

    </div>
  

  )
}

export default About