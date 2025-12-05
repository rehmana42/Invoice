
import React, { useContext, useState } from "react";
import {DarkThemeToggle}  from 'flowbite-react'
import { Menu } from 'lucide-react'
import { UserContext } from "../Context/UserContext";

const TopBar = () => {
   const {open, setOpen}=useContext(UserContext)
  return (
     <div className="flex flex-row items-center  py-4 h-16   border-b shadow-sm dark:border-b-black   bg-white text-black dark:bg-slate-800  dark:text-gray-300  w-screen">
            {/* Hamburger Button */}
            <Menu
              onClick={() => setOpen(!open)}
              size={28}
              className="ml-5 sm:hidden cursor-pointer"
            />
            <h2 className="inter pl-5 text-2xl cursor-pointer">
              Welcome back, Abdul
            </h2>
    <DarkThemeToggle className="  relative left-5 "/>
    
          </div>
  )
}

export default TopBar