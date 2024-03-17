import React from 'react'
import {BrowserRouter as Router , Routes , Route} from "react-router-dom"
import {Toaster} from "react-hot-toast";
import Home from "../src/Pages/Home.jsx"
import "./App.css"
import Login from './Pages/Login.jsx';
import Register from './Pages/Register.jsx';

const App = () => {
  return <Router>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='Home' element={<Home/>}/>
      <Route path= 'Register' element={<Register/>}></Route>
    </Routes>;
    <Toaster/>
  </Router>;
};

export default App;
