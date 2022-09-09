import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

const App = () => {
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
        </Route>


        
          {/* //login */}
          <Route path="/login" element={<Login />} />


           {/* this is dashboard */}
        <Route path="/dashboard" element={<Dashboard/>}>
         <Route index element={<DHome />} />
         <Route path ="account" element={<Account />} />
         <Route path ="analysics" element={<Analysics />} />

         <Route path ="Project" element={<Project />} />

         <Route path ="user" element={<User />} />

         <Route path ="dblog" element={<DBlog />} />

         
         <Route path ="auth" element={<Auth />} >
         <Route path="login" element={<Login />} />
         </Route>
  
     
         </Route>

       

  </Routes>

      </Router>
    </>
  )
}

export default App