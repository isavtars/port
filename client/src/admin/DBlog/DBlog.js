import React, { useEffect, useState } from 'react'
import "./DBlog.css"
import Dnav from  "../Dnav/Dnav"
import { Link } from 'react-router-dom'
import Api from "../../Api/backurl.js"

import { MdDeleteSweep, MdUpdate} from 'react-icons/md';
import  ReactPaginate  from 'react-paginate';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Navigate, useNavigate } from 'react-router-dom';


const DBlog = () => {


  const navigate =useNavigate();
  const [dataq, setdataq] = useState([])
  const [temdata, settemdata] = useState([])
 const [loding, setloding] = useState(false)
  //blogs/sfilter?q=mobile


  const [input, setinput] = useState('')


  //paginations
  const [pageCount, setpageCount] = useState(0);
  let limit = 10;


//paginations
useEffect(() => { 
  const fetchblog=async()=>{
     try{
      //making paginations
     const response=await Api.get(`/blogs/paginations?page=1&limit=${limit}`);
    setdataq(response.data.data)
    settemdata(response.data.data)
    console.log(response.data)
    //
    const page = response.data.page;
    setpageCount(Math.ceil(page / limit));
    setloding(false)
    console.log(pageCount)
     }catch(err){
      console.log(err)
     }
  }
    fetchblog();
}, [limit])


//antoert
const sethblog=async(currentPage)=>{
  try{
   //making paginations
  const response=await Api.get(`/blogs/paginations?page=${currentPage}&limit=${limit}`);
 setdataq(response.data.data)
 settemdata(response.data.data)
 console.log(response.data)
 //
 

 setloding(false)
  }catch(err){
   console.log(err)
  }
}
//  sethblog();

 const handlePageClick = async (data) => {
  console.log(data.selected);
  let currentPage = data.selected + 1;
  // let currentPage = pageCount + 1;
  let commentsFormServer = await sethblog(currentPage);
};


const handleclickpagep = async (data) => {
  console.log(data.selected);


  let currentPage =setpageCount(pageCount - 1)
  console.log(currentPage);
  const commentsFormServer = await sethblog(currentPage);
  console.log(commentsFormServer);
};



const handleclickpagen = async (data) => {

  const currentpage =setpageCount(pageCount + 1)
  console.log(currentpage);
  const commentsFormServer = await sethblog(currentpage);
  console.log(commentsFormServer);
};






  useEffect(() => {
   const searchandget=async()=>{
   try{

    const response= await Api.get(`blogs/sfilter?q=${input}`);
 
    setdataq(response.data)
    // settemdata(response.data)
    console.log (response.data)
  
  }catch(err){
    console.log("error from server")
  }
  }

  if(input) searchandget();
  else{
  //  console.log("nothings search")
   setdataq(temdata)
   console.log(dataq)
  }
    
  }, [input])




  //delete blog business logics
  const deleteblogs=async(id, idx)=>{
    console.log("click ")
    try{

      if(window.confirm("are you sure")){
 
       const response= await Api.delete(`/blogs/delblogs/${id}`,
       {
        headers:{         
          "Content-Type": "multipart/form-data",
          token:JSON.parse(localStorage.getItem("user")).token,
        },
      })

      //filter the ui state while backeend hit

      console.log(response.data)
     
      if(response.data.sucess){
        const newproject= dataq.filter((filtor,index)=>{
          return index!== idx;
        })
        const newproject2= temdata.filter((filtor,index)=>{
          return index!== idx;
        })
       setdataq(newproject)
       settemdata(newproject2)
     
       toast.success(" delete sucess")
      }else{
        toast.error(" delete failed")
      }
    }else{
      toast.error("you not confirmed")
    }
    }catch(err){
      console.log(err)
    }
  }


  

console.log(dataq)

  return (
    <div className='mx-2'>
      <div className="dnav sticky top-0">
        <Dnav/>
      </div>

      <div className="dcontent">
       <div className="bheader h-20 bg my-1 shadow-md flex  items-center justify-between px-2  lg:mx-5">

        <div className="lll text-red-500">
         ffff
        </div>
        <div className="bsearch">
          <input type="text" className='ss rounded-md px-2 bg-slate-800' placeholder='search...' onChange={(e)=>setinput(e.target.value)}/>
        </div>

        <div className="addbllogd">
        <ToastContainer />
        <Link to="/dashboard/dblog/adddblog">
        <button className='bg-[#FCA61F] h-12 rounded-sm px-1 text-white shadow-sm'>add blogs</button>
        </Link>
        </div>
       </div>

       <div className="mainpcontentblog my-1 mx-2">
        
      {
        dataq.map((datas,index)=>{
          return <div key={index} onClick={()=>navigate("/dashboard/dblog/dblogexpo",{state:{datas}})}>

          
           <div className="card mb-2 mx-2 shadow-lg cursor-pointer px-5 py-2">
  <img src={datas.image} className="card-img-top cardimgtop" alt="..."  />
  <div className="card-body">
    <h5 className="card-title text-yellow-500 text-xl"> {datas.btitle}</h5>
    <p className="card-text">{datas.bdescription}</p>
    <div className="ip  flex justify-between items-center "> 
    <button className='text-[#05578e] '>Read more.....</button>
    <div className="crud">
    <Link to={`/dashboard/dblog/updateblog/${datas._id}`}>
    <button className='ll px-2 cursor-pointer  '><MdUpdate  color="green" size={30}/></button>
    </Link>

    <button className='ll px-2 cursor-pointer' onClick={()=>deleteblogs(datas.id,index)}> <MdDeleteSweep color="red" size={30} className="dsds cursor-pointer " /></button>
    </div>
   
    </div>
   
    <p className="card-text"><small className="text-muted">{datas.createdAt
}</small></p>
  </div>
</div>


          </div>
        })
      }
       </div>
       <div className="pagiantions h-12 bg-white px-5 py-3 flex justify-center items-center">

<button onClick={handleclickpagep} className="bg-[#f8f8f8] p-2 rounded-md text-blue-500">previopus</button> 


<ReactPaginate
    previousLabel={"<"}
    nextLabel={">"}
    breakLabel={"..."}
    pageCount={pageCount}
    marginPagesDisplayed={2}
    pageRangeDisplayed={3}
    onPageChange={handlePageClick}
    containerClassName={"pagination justify-content-center"}
    pageClassName={"page-item"}
    pageLinkClassName={"page-link"}
    previousClassName={"page-item"}
    previousLinkClassName={"page-link"}
    nextClassName={"page-item"}
    nextLinkClassName={"page-link"}
    breakClassName={"page-item"}
    breakLinkClassName={"page-link"}
    activeClassName={"active"}
  />


  <button onClick={handleclickpagen} className="bg-[whitesmoke] p-2 rounded-md text-blue-500">next</button>
</div>


      </div>
    </div>
  )
}

export default DBlog