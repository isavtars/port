import "./App.css"
import { BrowserRouter as Router, Routes, Route,Navigate } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About"
import Layout from "./components/Layout/Layout.js";
import Contact from "./components/Contact/Contact";
import Work from "./components/Work/Work";
import Myskill from "./components/Myskill/Myskill";
import Blog from "./components/Blog/Blog";

//import for admin
import Login from "./admin/login/Login.js";
import Dashboard from "./admin/Dashboard/Dashboard";
import DHome from './admin/DHome/DHome';
import Account from './admin/Account/Account';
import Analysics from './admin/Analysics/Analysics';
import Project from './admin/Project/Project';
import User from './admin/User/User';
import DBlog from './admin/DBlog/DBlog';
import Auth from './admin/Auth/Auth';
import Register from "./admin/Register/Register";

import { Authcontext } from "./context/authCont/authContext";
import { useContext } from "react";
import Addproj from "./admin/Addproj/Addproj";
import Updatepp from './admin/Updatepp/Updatepp';
import Blogexpo from './components/Blogexpo/Blogexpo';
import FOF from './components/FOF/FOF';
import DBlogadd from './admin/DBlogadd/DBlogadd';
import Updateblog from './admin/Updateblog/Updateblog';
import Dblogexpo from './admin/Dblogexpo/Dblogexpo';

const App = () => {
  const {user} = useContext(Authcontext)
 
  return (
    <>

      <Router>
  <Routes>


  {/* front end Routes */}
  <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="myskill" element={<Myskill  />} />
          <Route path="work" element={<Work  />} />
          <Route path="contact" element={<Contact />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/blogexpo" element={<Blogexpo />} />
        </Route>

  <Route path="*" element={<FOF/>}></Route>
        
          {/* //login */}
         
          <Route path="/login" element={user ? <Navigate to="/dashboard" replace /> :  <Login />}  ></Route>
          <Route path="/dashboard" element={user == null ? <Navigate to="/login" replace /> :  <Dashboard />}  ></Route>
          <Route path="/register" element={<Register/>}></Route>
     
          {/* <Route path="/register" element={<Register />} /> */}
           {/* this is dashboard */}
     

  
     
         

             
            
{

    
   !user&&(
          <Route path="/login" element={<Login />}  ></Route>
         )}
         {
        
         user&&(<Route path="/dashboard" element={<Dashboard/>}>
         <Route index element={<DHome/>} />
         <Route path ="account" element={<Account />} />
         <Route path ="analysics" element={<Analysics />} />

         <Route path ="Project" element={<Project />} />
         <Route path ="project/addproject" element={<Addproj />} />
         <Route path ="project/updateproject/:id" element={<Updatepp />} />

         <Route path ="user" element={<User />} />

         <Route path ="dblog" element={<DBlog />} />
         <Route path ="dblog/adddblog" element={<DBlogadd />} />
         <Route path ="dblog/updateblog/:id" element={<Updateblog />} />
         <Route path="dblog/dblogexpo" element={<Dblogexpo />} />
       


         
         <Route path ="auth" element={<Auth />} >
         <Route path="login" element={<Login />} />
         </Route>
  
     
         </Route>
          ) }


   
          
       

  </Routes>

      </Router>
    </>
  )
}

export default App