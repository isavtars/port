import React, { useEffect, useState } from 'react'
import Dnav from './../Dnav/Dnav';
import { useNavigate, useParams,} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import Api from "../../Api/backurl.js"


const Updateblog = () => {
///  /blogs/blogupdate/


const {id} = useParams();
const idx= id.toString();
console.log(id)


const navgate = useNavigate()


const [input, setinput] = useState({})
const [image, setimage] = useState([])



// //getthe data by id

useEffect(() => {
  const getusers= async()=>{
    try{
      const response= await Api.get(`/blogs/blogpostid/${id}`,{
        headers:{         
          "Content-Type": "multipart/form-data",
          token:JSON.parse(localStorage.getItem("user")).token,
        },
      });
      console.log(response.data)
      setinput(response.data)
      setimage(response.data)
    }catch(err){
      console.log(err)
    }
  }
  getusers();
}, [id])


//hanlechange
const hanlechange=(e)=>{
  console.log("onchange")
  setinput({...input, [e.target.name]:e.target.value})
}
// ppupdate
const blogpost=async(e)=>{
e.preventDefault();
  console.log("submit")
  try{

    const response = await Api.patch(`/blogs/blogupdate/${idx}`,{...input, image:image},
    {
       headers:{         
          "Content-Type": "multipart/form-data",
          token:JSON.parse(localStorage.getItem("user")).token,
        },   
    })

    console.log(response.data)

    if(response.data.sucess){
      toast.success("sucessfully create post")
        e.target.reset()
        setimage({})
        setinput({})

        setTimeout(()=>{          
          navgate("/dashboard/dblog")
        },2000)
    }

  }catch(err){
    console.log(err)
  }
}




  return (
    <div>
      <div className="dnavcon sticky top-0 ">
    <Dnav />
    </div>


    {/* //asdsd jsx */}

    
    <div className="adddblogcontent">
  <ToastContainer />
      <div className="addpostform flex justify-center my-1  items-center ">
        <form action="" className='projectspost rounded-sm shadow-lg ' onSubmit={blogpost} >
          <div className="btitle">
            <input type="text" value={input.btitle} name='btitle' placeholder=' btitle' className="px-2"  onChange={hanlechange}/>
          </div>

          <div className="blink">
            <input type="text" value={input.blink} name='blink' placeholder='blink' className="px-2"  onChange={hanlechange}/>
          </div>

          

          {/* discritppkj */}
          <div className="bdescription">
            <textarea name="bdescription" value={input.bdescription} id="" cols={83}  rows={5} placeholder='write....' className=" px-2" onChange={hanlechange}></textarea>
          </div>


            {/* contents posts */}
            <div className="bdescription">
            <textarea name="bcontent" value={input.bcontent} id="" cols={83}  rows={5} placeholder='write a post from heare ....' className=" px-2" onChange={hanlechange}></textarea>
          </div>

          {/* <div class="bcategories">

          <select name="bcategories" >
          <option value="mern stack">mern stack</option>
          <option value="flutter">flutter</option>
          <option value="node js">node js</option>
          <option value="reacts js">reacts js</option>
          </select>
            

          </div> */}

          <div className="form-floating">
  <select className="form-select bg-gray-500 text-white" value={input.bcategories} id="floatingSelect" aria-label="Floating label select example" name='bcategories' onChange={hanlechange}>
          <option  > select your items</option>
         <option defaultValue="mern stack" name="bcategories">mern stack</option>
          <option defaultValue="flutter" name="bcategories">flutter</option>
          <option defaultValue="node js" name="bcategories">node js</option>
          <option defaultValue="reacts js" name="bcategories">reacts js</option>
  </select>
  <label htmlFor="floatingSelect" className='text-green-500 py-2 text-xl'>categories </label>
</div>

               

              {/* stack  */}
          <div className="form-floating my-2 bg-gray-800">
  <select className="form-select bg-gray-800 text-white  "  value={input.bstack} id="floatingSelect" aria-label="Floating label select example" name='bstack' onChange={hanlechange}>
          <option > select your items</option>
         <option defaultValue="full_Stack" name="bstack">full_Stack</option>
          <option defaultValue="mearn_stack" name="bstack">mearn_stack</option>
          <option defaultValue="back_end" name="bstack">back_end</option>
          <option defaultValue="database" name="bstack">database</option>
          <option defaultValue="mobile_applications" name="bstack">mobile_applications</option>
  </select>
  <label htmlFor="floatingSelect" className='text-red-500 text-xl py-2'>stack</label>
</div>

          <div className="bimage">
            <input type="file"  name='image'  className="bg-red-500" onChange={(e)=>setimage(e.target.files[0])}/>
          </div>
          

          <div className="ppsubmit">
            <input type="submit" value="add blogs"  className="ppsubmit rounded-sm shadow-sm" />
          </div>


        </form>
        </div>
      </div>


    </div>
  )
}

export default Updateblog