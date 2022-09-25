import React from 'react'
import "./DBlog.css"
import Dnav from  "../Dnav/Dnav"
import { Link } from 'react-router-dom'
const DBlog = () => {
  return (
    <div className='mx-2'>
      <div className="dnav sticky top-0">
        <Dnav/>
      </div>

      <div className="dcontent">
       <div className="bheader h-20 bg my-1 shadow-md flex  items-center justify-between px-2">

        <div class="lll text-red-500">
         ffff
        </div>
        <div class="bsearch">
          <input type="text" className='ss rounded-md px-2 bg-slate-800' placeholder='search...' />
        </div>

        <div class="addbllogd">
        <Link to="/dashboard/dblog/adddblog">
        <button className='bg-[#FCA61F] h-12 rounded-sm px-1 text-white shadow-sm'>add blogs</button>
        </Link>
        </div>
       </div>

       <div class="mainpcontentblog my-1 mx-2">
        <h1> heare we fetch the blogs</h1>
       </div>
      </div>
    </div>
  )
}

export default DBlog