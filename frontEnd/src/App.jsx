import React, { useEffect } from "react"


import Snav from "./Component/Snav"
import  Dashboard from './Pages/Dashboard'
import { Login } from "./Pages/Login"
import Register from "./Pages/Register"
import { Route, Routes } from "react-router-dom"
import CreateInvoice from "./Component/CreateInvoice"
import Pinvoice from "./Component/Pinvoice"
import Mpage from "./Component/Mpage"
import LandingPage from "./Pages/LandingPage"
import { Navbar } from "flowbite-react"
import { useContext } from "react"
import { UserContext } from "./Context/UserContext"


function App() {

  const {token, navigate}=useContext(UserContext)

 
  return (
    <>
    <div >
      <Routes>
      <Route path="/" element={<LandingPage/>}/>
        <Route path="/registar" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="*" element={<Dashboard/>}/>
   
      </Routes>

      </div>
    </>
  )
}

export default App
