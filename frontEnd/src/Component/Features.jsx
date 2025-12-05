import { useGSAP } from '@gsap/react'
import { Label } from 'flowbite-react'
import gsap from 'gsap'
import { ScrollTrigger, TextPlugin } from 'gsap/all'
import { CreativeCommonsIcon,  FilePlus, SearchCheck, SearchCode, SearchSlash, SearchX, SeparatorHorizontal, StampIcon, Star, StarIcon, StarOff } from 'lucide-react'
import React, { useRef } from 'react'
import { StaticRouter } from 'react-router-dom'

const Features = () => {
   //animations part and logis or you can say function 
  //first we register scrolltrigger 
  const desk=window.innerWidth >700

   gsap.registerPlugin(ScrollTrigger,TextPlugin)

  const featureDiv=useRef(null)
  const title=useRef(null)
   useGSAP(()=>{

// creating time of with scrollTrigger 
    const tl=gsap.timeline({
  
      scrollTrigger:{
            trigger: featureDiv.current,
            scroll:'body',
            start:'top 70%',
            
           
    
          }
    })

    gsap.from( title.current,{
    opacity: 0,
    text:"",
  duration: 2,
  delay:1,
  ease: "power3.out",
  scrollTrigger:{
    trigger: featureDiv.current,
    scroll:'body',
    start:'top 70%',
    scrub:true
   

  }
 
    })

    gsap.from('#feature',{
    y:-20,
    opacity: 0,
    duration:1,
    ease: "power3.out",
    stagger:1,
    scrollTrigger:{
      trigger: featureDiv.current,
      scroll:'body',
      start:'top 70%',
      
     

    }
      })

   },{scope:featureDiv})

  return (
    <div>
        <div  id='feature' ref={featureDiv} className=' flex flex-col   w-full h-[120vh] sm:h-[70vh]'>
              {/* heading div */}
            <div className=' flex justify-center w-full  '>
            <h1 ref={title} className='  text-xl sm:text-3xl text-center     text-[#331D2C] font-extrabold  dark:text-white  '>Powerfull Features To Run Business</h1>
            </div>

            {/* features div */}
            <div  className=' flex flex-col  items-center gap-5 sm:flex-row w-full sm:justify-center sm:mt-16'>
                {/* create feature */}
                <div id='feature' className=' mt-5 ml-5 flex flex-col  h-[30vh] w-[65vw] sm:h-[35vh] sm:w-[16vw] bg-[#F9F8F6] dark:bg-[#1A1A1D] dark:text-white  rounded-2xl shadow-2xl'>
                    <div className=' h-10 w-10  rounded-2xl  bg-indigo-300  shadow-lg  ml-10 mt-5'>
                    <FilePlus  size={25} className=' m-2 shadow-lg  text-violet-600'/>
                    </div>
                    <h2 className=' ml-3 mt-3 text-base whitespace-nowrap font-semibold text-[#522258] dark:text-white  font-poppins'>Create Invoices Instantly</h2>
                    <p className=' mt-3 ml-3 text-sm w-[90%] font-poppins font-medium text-gray-500 dark:text-[#948979] '>Generate professional invoices in seconds with a clean and simple interface. no complex setup required.</p>
                </div>

                {/*  feature */}
                    <div id='feature' className=' mt-5 ml-5 flex flex-col  h-[30vh] w-[65vw] sm:h-[35vh] sm:w-[16vw] bg-[#F9F8F6] dark:bg-[#1A1A1D] dark:text-white rounded-xl shadow-2xl'>
                    <div className=' h-10 w-10  rounded-2xl  bg-indigo-300  shadow-lg  ml-10 mt-5'>
                    <SearchSlash size={25} className=' m-2 shadow-lg  text-violet-600'/>
                    </div>
                    <h2 className=' ml-4 mt-3 text-base whitespace-nowrap font-semibold  font-poppins text-[#522258] dark:text-white '>Powerful Smart Search</h2>
                    <p className=' mt-3 ml-3 text-sm w-[90%] font-poppins font-medium text-gray-500 dark:text-[#948979] '>Find any invoice instantly using our advanced search system. Search by client name everything appears the moment you type.</p>
                </div>


              {/* Download  */}
              <div id='feature' className=' mt-5 ml-5 flex flex-col  h-[30vh] w-[65vw] sm:h-[35vh] sm:w-[16vw] bg-[#F9F8F6] dark:bg-[#1A1A1D] dark:text-white rounded-xl shadow-2xl'>
                    <div className=' h-10 w-10  rounded-2xl  bg-indigo-300  shadow-lg  ml-10 mt-5'>
                    <SearchSlash size={25} className=' m-2 shadow-lg  text-violet-600'/>
                    </div>
                    <h2 className=' ml-4 mt-3 text-base whitespace-nowrap font-semibold  font-poppins text-[#522258] dark:text-white '>Download In One Click</h2>
                    <p className=' mt-3 ml-3 text-sm w-[90%] font-poppins font-medium text-gray-500 dark:text-[#948979]'>Download invoices as clean, print-ready PDFs anytime. Share them easily via email, WhatsApp,</p>
                </div>
            </div>
           
        </div>
    </div>
  )
}

export default Features