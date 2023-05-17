
// import logo from './logo.svg';
import Home from "./components/Home/home.jsx";
import $ from "jquery"
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Fragment } from 'react';
import Navbar from './components/UserNavbar';
import AdminLogin from './components/AdminLogin/AdminLogin';
import Adminpage from './components/AdminLogin/Adminpage';
import UserLogin from './components/UserLogin/UserLogin';
import Userpage from './components/UserLogin/Userpage';
function App() {
  return (
    <Fragment>
 
  <Routes>
    <Route path='/' element={ <Navbar/>}/>
    <Route path='/admin' element={ <AdminLogin/>}/>
    <Route path='/admins' element={ <Adminpage/>}/>
    <Route path='/user' element={ <UserLogin/>}/>
    <Route path='/users' element={ <Userpage/>}/>
    {/* <Route path='*' element={<Error/>}/> */}
  </Routes>
</Fragment>
    
)}
export default App;
