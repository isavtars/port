import React from 'react'
import { Link } from 'react-router-dom';

const Blog = () => {
  const id=1;
  return (
    <div className='h-screen'>


         <Link to={`blogexpo1/${id}`}>
         <div class="card h-52 bg-slate-500 rounded-sm shadow-md mx-1 my-1">
           <h1>this is blogs</h1>
           </div>

         </Link>

    </div>
  )
}

export default Blog