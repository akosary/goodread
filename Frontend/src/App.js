import { Provider } from "react-redux";
import "./App.css";
import CategoryRoutes from "./routes/CategoryRoutes";
import categoryStore from "./redux/categoryStore";

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
    <>
      <div className="container mt-5">
        <Provider store={categoryStore}>
          <CategoryRoutes />
        </Provider>
      </div>
    </>
  );
}

export default App;
