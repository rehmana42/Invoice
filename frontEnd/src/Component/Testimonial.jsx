import React, { useRef } from 'react'
import { Avatar, Blockquote } from "flowbite-react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';
import { assets } from '../assets/assets';
const Testimonial = () => {
  const container=useRef()
  
  gsap.registerPlugin(ScrollTrigger)
  useGSAP(()=>{
    const word=container.current.querySelectorAll("#title5")
    const tl=gsap.timeline({
      scrollTrigger:{
        trigger:container.current,
        scroll:'body',
        start:"top 70%",
        }})

      tl.from(word,{
        autoAlpha:0,
       y:-30,
       duration:1,
       ease:'bounce.inOut',
  stagger:1,
  
      })

      tl.from('#testimonial',{
        skewX:60,
        opacity:0,
        duration:1
      })




  },{scope:container})
  return (
    <div>
        <div id='coustomer' ref={container}  className=' flex flex-col   w-full h-[120vh] sm:h-[70vh]'>
        <div className=' flex justify-center w-full  text-2xl sm:text-4xl font-medium  font-poppins  gap-2 text-[#3A0519] dark:text-white' >
      <span id='title5' >What</span>  <span id='title5' > our</span >  <span id='title5' > coustomer</span>  <span id='title5' > says</span> 
            </div>

            {/* Testimonial */}
            <div id='testimonial'  className=' flex flex-col  items-center gap-7 sm:flex-row w-full mt-12 sm:justify-center sm:mt-16'>

                {/* first */}
        <figure className="  h-[30vh] w-[80vw] sm:h-[30vh] sm:w-[20vw] bg-[#F6F5F2]   dark:bg-[#211832]  rounded-xl  text-center  shadow-xl">
      <svg
        className="mx-auto  mb-3 h-6 w-6 text-gray-400 dark:text-gray-600"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 18 14"
      >
        <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
      </svg>
      <Blockquote className=' text-lg'>
        <p className=" font-medium italic text-[#49243E] dark:text-[#D9E9CF]">
          "Creating and downloading invoices has never been this fast and simple."
        </p>
      </Blockquote>
      <figcaption className="mt-6 flex  items-center justify-center space-x-3">
        <Avatar rounded size="sm" img={assets.Avatar1} alt="profile picture" />
        <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
          <cite className="pr-3 font-medium text-gray-900 dark:text-white">Micheal Gough</cite>
          <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">CEO at Google</cite>
        </div>
      </figcaption>
    </figure>

      {/* second */}
      <figure className="  h-[30vh] w-[80vw] sm:h-[30vh] sm:w-[20vw] bg-[#F6F5F2]     dark:bg-[#211832]   rounded-xl  text-center  shadow-xl">
      <svg
        className="mx-auto  mb-3 h-6 w-6 text-gray-400 dark:text-gray-600"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 18 14"
      >
        <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
      </svg>
      <Blockquote className=' text-lg'>
        <p className=" font-medium italic text-[#49243E] dark:text-white">
          "My entire billing process became 10x easier with this."
        </p>
      </Blockquote>
      <figcaption className="mt-6 flex  items-center justify-center space-x-3">
        <Avatar rounded size="sm" img={assets.Avatar2} alt="profile picture" />
        <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
          <cite className="pr-3 font-medium text-gray-900 dark:text-white">Shalini Gough</cite>
          <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">CEO at Google</cite>
        </div>
      </figcaption>
    </figure>

     
     {/* third*/}
     <figure className="  h-[30vh] w-[80vw] sm:h-[30vh] sm:w-[20vw] bg-[#F6F5F2]    dark:bg-[#211832]   rounded-xl  text-center  shadow-xl">
      <svg
        className="mx-auto  mb-3 h-6 w-6 text-gray-400 dark:text-gray-600"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 18 14"
      >
        <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
      </svg>
      <Blockquote className=' text-lg'>
        <p className=" font-medium italic text-[#49243E] dark:text-white">
          "Invoices look so professional my clients actually compliment them."
        </p>
      </Blockquote>
      <figcaption className="mt-6 flex  items-center justify-center space-x-3">
        <Avatar rounded size="sm" img={assets.Avatar3} alt="profile picture" />
        <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
          <cite className="pr-3 font-medium text-gray-900 dark:text-white">Soumitrak khan</cite>
          <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">CEO at Google</cite>
        </div>
      </figcaption>
    </figure>


    </div>
      
        </div>
    </div>
  )
}

export default Testimonial