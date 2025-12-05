import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import { GlobalTL } from './GlobalTL'
import { assets } from '../assets/assets'


const HeroSection = () => {
  useGSAP(()=>{
    GlobalTL.from("#title1",{
      skewY:10,
      duration:1,
      
      opacity:0,
     
    ease:'power1.out'
      
    })

    //des
    GlobalTL.from('#des',{
      clipPath: "inset(0 100% 0 0)",
  duration: 1.50,
  ease: "power3.out",
    })

 
    //img
    GlobalTL.from('#heroImage',{
      x:-300,
      duration:1,
       rotateY:200,
    
      opacity:0

    })
    GlobalTL.play()
  })
  return (
    <div>
        <div  id='homw' className=' z-1 flex  flex-col  items-center min-h-screen  w-full bg-transparent overflow-x-hidden'>
            {/* <div id='box' className='  ml-5 h-36 w-36 bg-red-600 rounded-md shadow-md'></div> */}
            <p id="title1" className="ml-2 mt-24 sm:mt-16 whitespace-nowrap text-2xl sm:text-5xl  dark:text-white  .inter ">
Effortless Billing for Freelancers
</p>
<p id='des' className=' text-center ml-2 sm:ml-16 mt-6 sm:mt-5 text-base text-gray-500 dark:text-blue-300 inter  font-medium w-[99%] sm:w-[70%]'>From freelancers to growing teams, our platform makes invoicing faster, smarter, and more reliable. Spend less time on paperwork and more time doing what you love.</p>



{/* hero Animation  */}
<img id='heroImage' src={assets.heroImage} className='  h-[50vh] sm:w-[30%]' />
  </div>
</div>
  )
}

export default HeroSection