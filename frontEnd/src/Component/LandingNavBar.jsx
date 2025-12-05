import { useGSAP } from '@gsap/react'
import { Button, DarkThemeToggle, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import gsap from 'gsap';

import React, { useRef } from 'react'
import { GlobalTL } from './GlobalTL';
import { useContext } from 'react';
import { UserContext } from '../Context/UserContext';

const LandingNavbar = () => {

  const {navigate}=useContext(UserContext)
  useGSAP(()=>{
    gsap.from("#name",{
      y:-50,
      duration:1,
      ease:'bounce.out'
    })
     
  })
  
  return (
      <div  className=" overflow-x-hidden">
         <Navbar fluid rounded 
         theme={{
       
            root: {
              base: "bg-transparent dark:bg-transparent border-none shadow-none backdrop-blur-none px-4 py-4",
          
              rounded: {
                on: "rounded-2xl",
                off: "",
              },
              bordered: {
                on: "border",
                off: "",
              },
              inner: {
                base:
                  "mx-auto flex flex-wrap items-center justify-between transition-all duration-300",
          
                // Fluid makes it full width, off makes it container
                fluid: {
                  on: "",
                  off: "container",
                },
              },
            },
          
            brand: {
              base: "flex items-center gap-2 text-xl font-semibold",
            },
          
            collapse: {
              base: "w-full md:block md:w-auto",
              list:
                "mt-4 flex flex-col gap-2 md:mt-0 md:flex-row md:items-center md:space-x-8 md:text-[15px] md:font-medium",
          
              hidden: {
                on: "hidden",
                off: "",
              },
            },
          
            link: {
              base:
                "block py-2 pl-3 pr-4 md:p-0 relative transition-all duration-300",
          
              active: {
                on:
                  // Solid premium text + gradient underline only
      "text-purple-600 dark:text-white font-semibold " +
      "after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full " +
      "after:bg-gradient-to-r after:from-purple-500 after:to-blue-500 after:rounded-full",
          
                off:
                  // Normal + hover modern color + scale
                  "text-gray-700 dark:text-gray-300 " +
                  "hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 " +
                  "md:hover:text-transparent md:hover:bg-clip-text md:hover:bg-gradient-to-r md:hover:from-purple-500 md:hover:to-blue-500 " +
                  "transform hover:scale-[1.05] transition-all duration-300 " +
                  "dark:hover:text-white",
              },
          
              disabled: {
                on: "text-gray-400 hover:cursor-not-allowed dark:text-gray-600",
                off: "",
              },
            },
          
            toggle: {
              base:
                // Modern hamburger button
                "inline-flex items-center rounded-xl p-3 text-sm text-gray-600 dark:text-gray-300 " +
                "hover:bg-gray-200/60 dark:hover:bg-gray-700/50 backdrop-blur-lg transition-all duration-300",
              icon: "h-6 w-6 shrink-0",
              title: "sr-only",
            },
          }
          
        }
         >
        <NavbarBrand >
        
          <h2 id='name' className="rubik-dirt-regular text-3xl dark:text-white"> Invoizo</h2>
        </NavbarBrand>
        <div className=" md:order-2  flex  items-center justify-center gap-4">
        <Button
    className="bg-red-500 shadow-red-500 shadow-md dark:bg-white dark:text-black hover:bg-red-500 dark:hover:bg-white"
    theme={{
      base:
        "inline-flex items-center justify-center select-none font-medium " +
        "rounded-xl px-5 py-2.5 shadow-md transition-all duration-300 " +
  
        // Scale on hover + smooth premium interactions
        "hover:scale-[1.05] active:scale-[0.98] " +
  
        // Glassmorphism optional layer
        "backdrop-blur-xl bg-opacity-80 dark:bg-opacity-60",
  
      color: {
        // primary:
        //   // Premium gradient button + hover effects
        //   "text-white bg-gradient-to-r from-purple-500 to-blue-500 " +
        //   "hover:from-purple-600 hover:to-blue-600 " +
        //   "active:from-purple-700 active:to-blue-700",
  
        red:
          "text-white bg-red-500 hover:bg-red-600 active:bg-red-700 " +
          "dark:bg-red-600 dark:hover:bg-red-700",
  
        glass:
          // Clean glass button
          "text-gray-900 dark:text-gray-200 " +
          "bg-white/20 dark:bg-gray-800/40 border border-white/30 " +
          "hover:bg-white/30 hover:dark:bg-gray-800/50",
  
        minimal:
          // Ultra minimal button (Apple style)
          "text-gray-800 dark:text-gray-200 bg-transparent " +
          "hover:bg-gray-100/40 dark:hover:bg-gray-700/40",
      },
  
      pill: {
        on: "rounded-full px-6",
        off: "",
      },
  
      disabled:
        "opacity-50 cursor-not-allowed hover:scale-100 active:scale-100",
  
      inner:
        // Icon inside button spacing fix
        "flex items-center gap-2",
    }}
  
    onClick={()=>{
      console.log('hii')
      navigate('/login')
    }}
    
  >
    Sign
  </Button>
    <DarkThemeToggle/>
          <NavbarToggle  />
        </div>
  
        
        <NavbarCollapse className=' h-screen sm:h-auto w-full '>
          <NavbarLink href="#home" active className=' poppins   bg-black text-white dark:bg-white  sm:dark:bg-transparent sm:dark:text-white dark:text-black'>
            Home
          </NavbarLink>
          <NavbarLink  href="#feature">
            Features
          </NavbarLink>
          <NavbarLink href="#coustomer">Testimonial</NavbarLink>
          
        </NavbarCollapse>
      </Navbar>
      </div>
    )
}

export default LandingNavbar