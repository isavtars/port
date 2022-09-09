import React from 'react'
import { Outlet } from 'react-router-dom'

import "./Dashboard.css"
import Dside from './../Dside/Dside';

const Dashboard = () => {
  return (
    <div  className='dcont'>
    <div className='dside' ><Dside/></div>
       <div className="outlet ">
       <Outlet/>
       </div>
           
    </div>
  )
}

export default Dashboard