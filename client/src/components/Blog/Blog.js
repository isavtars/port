import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom';
import "./Blog.css"

import Api from "../../Api/backurl.js"

const Blog = () => {

  const [blogdata, setblogdata] = useState([])
  const [blogtemt, setblogtemt] = useState([])
  const [islodding, setislodding] = useState(true)


  //for the paginatons states
  const [pc, setpc] = useState(1)
  const [cp, setcp] = useState(1)

  console.log(pc,cp)
 

 



  //next
  const next=()=>{
  
  }

  const pre=()=>{
   
  }



  console.log(blogtemt)



  //for input text
  const [input, setinput] = useState("")

  console.log(input)

useEffect(() => { 
  const fetchblog=async()=>{

     try{
      //making paginations
     const response=await Api.get(`/blogs/paginations?page=${cp}`);
    setblogdata(response.data.data)
    setblogtemt(response.data.data)
    setpc(response.data.limit)
    setpc(response.data.page)
    console.log(response.data.data)
    setislodding(false)
     }catch(err){
      console.log(err)
     }
  }
    // if(input) fetchdata(); 
    // else{
    //   setblogdata(blogtemt)
    // }

    fetchblog();
}, [])


useEffect(() => {
 const getsearchblog= async()=>{
 try{
  const response= await Api.get(`blogs/sfilter?q=${input}`);
  console.log(response.data)
   setblogdata(response.data)
   setislodding(false)


 }catch(err){
 console.log(err)
 }

  }

  if(input)getsearchblog();
  else{
    setblogdata(blogtemt)
  }
  // getsearchblog();

}, [input])




  return (
    <div className='h-screen'>

    <div className="headersb bg-gray-400 mx-2 h-20   lg:w-full lg:mx-10  rounded-sm shadawo-sm w-[345px]  flex justify-center items-center  " >

       <div className="l"></div>
       <div className="searchfrob w-56 bg-green-700 h-14 lg:w-[600px]  rounded-lg shadow-sm ">
        <input type="text" className='bg-red-500 sbbinp px-2 shadow-md  rounded-lg' placeholder='search......' onChange={(e)=>setinput(e.target.value)}/>
       </div>
    </div>

    <div className="blofgsfetccon">
    <div class="ballcon  flex flex-wrap gap-1 mx-5 lg:w-full justify-center">
      {blogdata.length>0?blogdata.map((datas,index)=>{
       
       return <div key={index} className='blogscard my-1 flex justify-center flex-col items-center rounded-md shadow-lg cursor-pointer'>
        <div class="blogsimag"> 
          <img src={datas.image} alt="" />
        </div>
        <h4>{datas.btitle}</h4>
         
       </div>
      }):islodding?"loding":"blognotfound"}
    </div>
    </div>

    <div class="pagiantions h-12 bg-white px-5 flex justify-center items-center">

      <button className='px-2' onClick={next}>next</button>

     {/* <h1>{pagin}</h1> */}

      <button className='px-2' onClick={pre}>previous</button>
    </div>

{/* 
         <Link to={`blogexpo1/${id}`}>
         <div class="card h-52 bg-slate-500 rounded-sm shadow-md mx-1 my-1">
           <h1>this is blogs</h1>
           </div>

         </Link> */}

    </div>
  )
}

export default Blog