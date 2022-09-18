import React, { useContext, useState } from 'react'
import "./Dnav.css"


//context
import { Authcontext } from '../../context/authCont/authContext'
import {logout} from '../../context/authCont/authAction'

const Dnav = () => {
    const [toggle, settoggle] = useState(false)
    const {user,dispatch} = useContext(Authcontext)
    console.log(user.username)

    const toggleprofile=()=>{
        settoggle(
            !toggle
        
        )
    }
  return (
    <div>
   <nav className='dnavbar h-20 bg-blue-500 shadow-md text-white flex  items-center justify-between  px-2 mx-1 '>
    <div class="dnlogo">
        avtara
    </div>

    <div class="profile cursor-pointer " onClick={toggleprofile}>
  {user?  <h1>{user.username}</h1> : ""}
    </div>
  
   </nav>
   
  <div class={toggle ?"profilebox bg-red-500  w-40 h-28 shadow-sm rounded-sm absolute flex justify-center items-center": "prohidden"}>
     <button className='logbtn bg-white px-3 py-1 rounded-sm shadow-md' 
     onClick={()=>dispatch(logout())}>logout</button>
  </div>
    </div>
  )
}

export default Dnav
//onClick={dispatch(logout())}