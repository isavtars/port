import React from 'react'
import { Outlet } from 'react-router-dom'

const Auth = () => {
  return (
    <div>Auth
    
    <div className="outlet">
        <Outlet/>
    </div>
    </div>
  )
}

export default Auth