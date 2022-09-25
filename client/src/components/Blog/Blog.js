import React,{useEffect,useState} from 'react'
import {  useNavigate  } from 'react-router-dom';
import "./Blog.css"
import ReactPaginate from "react-paginate";
import Api from "../../Api/backurl.js"

const Blog = () => {

  const navigate=useNavigate();

  const [blogdata, setblogdata] = useState([])
  const [blogtemt, setblogtemt] = useState([])
  const [islodding, setislodding] = useState(true)


  //paginations
  const [pageCount, setpageCount] = useState(0);
  let limit = 10;


  //for input text
  const [input, setinput] = useState("")

//paginations
useEffect(() => { 
  const fetchblog=async()=>{
     try{
      //making paginations
     const response=await Api.get(`/blogs/paginations?page=1&limit=${limit}`);
    setblogdata(response.data.data)
    setblogtemt(response.data.data)
    console.log(response.data.data)
    //
    const page = response.data.page;
    setpageCount(Math.ceil(page / limit));
    setislodding(false)
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
 setblogdata(response.data.data)
 setblogtemt(response.data.data)
 console.log(response.data.data)
 //
 

 setislodding(false)
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
       
       return <div key={index} className='blogscard my-1 flex justify-center flex-col items-center rounded-md shadow-lg cursor-pointer' onClick={()=> navigate("/blog/blogexpo",{state:{ datas }})}>
       
        <div class="blogsimag"> 
          <img src={datas.image} alt="" />
        </div>  
        <h4>{datas.btitle}</h4>
         
       </div>
      }):islodding?(<div className="spinner-border text-primary my-3" style={{width:"5rem",height:"5rem"}} role="status">
  <span className="visually-hidden">Loading...</span>
</div>):"blog not found"}
    </div>
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