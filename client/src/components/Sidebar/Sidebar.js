import React from 'react'
import "./index.css"
import { NavLink ,Link} from "react-router-dom";
import { AiFillGithub,AiFillFacebook,AiFillYoutube} from "react-icons/ai";

const Sidebar = () => {
  return (
   <>

{/* <div className="side"> */}

  
<div className="sidecointener fixed" >

   <div className="side">
<div className="logo py-5">
    
<Link to="/">
<h1 className='text-3xl'>B</h1>
<h3 className='text-3xl'>Avtar</h3>
<h6 className='h6 text-1xl'>developer</h6>
</Link>
 
  
</div>
<hr  className='hrrr'/>
<nav className='sidenav'>

<NavLink to="/about">about</NavLink>
<hr  className='hrrr'/>
<NavLink to="/myskill">myskill</NavLink>
<hr  className='hrrr'/>

<NavLink to="/work">work</NavLink>
<hr  className='hrrr'/>
<NavLink to="/contact">contact</NavLink>
<hr  className='hrrr'/>
<NavLink to="/blog">blog</NavLink>
    
</nav>
<hr  className='hrrr'/>

<ul className='ulli'>
    <li className='liul'><AiFillGithub     size={27} color={"white"}/></li>
    <li className='liul'><AiFillYoutube  size={28} color={"white"} /></li>
    <li className='liul'><AiFillFacebook  size={27} color={"white"} /></li>
 
</ul>
</div>
</div>
   </>
  )
}

export default Sidebar;