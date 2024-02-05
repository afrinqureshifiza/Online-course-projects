import "./App.css";
import Navbar from './components/Navbar'
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Dashboard from './pages/Dashboard'
import { useState } from "react";
import PrivateRoute from "./components/PrivateRoute";


function App() {

  const [isLoggedIn, setIsLoggedIn]= useState(false)

  return (
    <div className="flex flex-col w-screen h-screen bg-richblack-900 ">
      <div>
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}
        className></Navbar>
      </div>

      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>}></Route>
        <Route path="/signup" element={<SignUp setIsLoggedIn={setIsLoggedIn}/>}></Route>
        <Route path="/dashboard" element={
          <PrivateRoute isLoggedIn={isLoggedIn}>
            <Dashboard/>
          </PrivateRoute>   
        }></Route>
      </Routes>
    </div>
  )
}

export default App;
