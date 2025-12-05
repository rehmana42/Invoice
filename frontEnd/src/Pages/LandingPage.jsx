import Features from "../Component/Features"
import HeroSection from "../Component/HeroSection"
import LandingNavbar from "../Component/LandingNavBar"

import React, { useContext, useEffect } from 'react'
import Testimonial from "../Component/Testimonial"
import LandingFooter from "../Component/LandingFooter"
import { Route, Routes } from "react-router-dom"
import { UserContext } from "../Context/UserContext"


const LandingPage = () => {
  const {token , navigate}=useContext(UserContext)
  useEffect(()=>{
    if(token){
      navigate('/dashboard')
    }
  },[token])
  return (
   <>
   <div className="  bg-white dark:bg-black overflow-hidden">
   <LandingNavbar/>
    <HeroSection/> 
    <Features/>
    <Testimonial/> 
      <LandingFooter/>
   </div>
   </>
  )
}

export default LandingPage