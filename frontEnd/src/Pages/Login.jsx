import { Button, Label, TextInput } from 'flowbite-react'
import { Eye, EyeIcon, Lock, MailIcon, NotepadText } from 'lucide-react'
import React, { useContext, useEffect,  } from 'react'
import { useState } from 'react'
import axios from 'axios'

import { UserContext } from '../Context/UserContext'
import { toast } from 'react-toastify'
import { PiPassword } from 'react-icons/pi'
import { NavLink } from 'react-router-dom'

export const Login = () => {

  //useState variable 

   
    const[email, setEmail]=useState('');
    const[password, setPassword]=useState('');
    const[loading, setLoading]=useState(false)
  // useContext 
    const {backendUrl, token, setToken, navigate}=useContext(UserContext)



    const submitHandler= async()=>{
      try{
        setLoading(true)
        const response=await axios.post(`${backendUrl}/login`,{email,password})
        console.log(response.data)
        if(response.data.success ==true){
          console.log(response.data)
          setToken(response.data.loginToken)
          localStorage.setItem('token',response.data.loginToken)
          setLoading(false)
          navigate('*')
          
          
        }
        else{
          toast.error(response.data.msg)
        }
      }
      catch(e){
        console.log(e.message )
      }
      finally{
        setLoading(false)
      }
     }
  useEffect(()=>{
    console.log(token)

      if(token){
        navigate('*')
      }
     },[token])
  return (
    <>
    <div className=' h-screen w-full flex flex-col justify-center items-center  dark:bg-black ' >
        <div className=" h-10 w-10 bg-gradient-to-r from-blue-500 to-blue-800  rounded-lg mt-10"><NotepadText className=' text-white w-6 h-6  mt-2 place-self-center'/></div>
        
        <p className=' text-2xl sm:text-xl font-bold dark:text-gray-200 '>Login to your Account</p>

        {/* email div */}
        <div className=' flex flex-col gap-1 mt-10'>
        <Label className=' text-base sm:text-sm font-medium   text-gray-700 inter '>Email</Label>
        <TextInput icon={MailIcon} type='text' onChange={(e)=>{setEmail(e.target.value)}} value={email} placeholder=' example@gmail.com' className=' text-xl sm:text-base bg-white dark:bg-black dark:text-white w-[80vw] sm:w-[30vw]' required shadow></TextInput>
        </div>

        {/* password div */}
        <div className=' flex flex-col gap-1 mt-5'>
        <Label className=' text-sm font-medium   text-gray-700 inter '>Password</Label>
        <TextInput icon={Lock} rightIcon={EyeIcon} type='password' onChange={(e)=>{setPassword(e.target.value)}} value={password}  placeholder=' enter your password' className='    sm:text-base text-xl bg-white  dark:bg-black dark:text-white w-[80vw] sm:w-[30vw]'   required shadow></TextInput>
        </div>

        {/* button */}
        <Button color={'dark'} className=' inter text-lg font-bold  mt-5 w-56 sm:w-[25vw]' onClick={()=>{submitHandler()}}>{loading? "Loading....":"Login  ->"}</Button>

        <hr className="mt-4 w-[25vw]  bg-gray-400 h-0.5 border-0" />
       <div className=' mt-2 flex flex-row'> <p className=' inter text-sm text-gray-500 '>Don't have a account ?</p> <NavLink to={'/registar'}><p className=' ml-1 text-sm font-bold dark:text-blue-600'>Sign Up</p></NavLink></div> 

        
    </div>
    </>
  )
}
