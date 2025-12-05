import React, { useContext, useEffect } from 'react'
import Snav from '../Component/Snav'
import CreateInvoice  from "../Component/CreateInvoice"
import TopBar from '../Component/TopBar'
import { Route, Routes } from 'react-router-dom'
import Pinvoice from '../Component/Pinvoice'
import Mpage from '../Component/Mpage'
import { UserContext } from '../Context/UserContext'
const Dashboard = () => {

const {token, navigate}=useContext(UserContext)

// check token useEffect 

useEffect(()=>{
  console.log(token)
  if(!token){
    navigate('/')
  }
},[token])

  return (
    <div className=' flex flex-row  dark:bg-slate-700 h-screen '>

      <Snav/>
    <div className=' flex flex-col overflow-y-auto  overflow-x-hidden'>
      <TopBar/>
      
      <Routes>
      {/* <Route index element={<Mpage/>}/> */}
  <Route path="/createInvoice" element={<CreateInvoice />} />
  <Route path="/invoice" element={<Pinvoice />} />
  {/* <Route path='/allinvoice' index element={<Mpage />} /> */}
  <Route path="*" element={<Mpage />} />




      </Routes>
    {/* <CreateInvoice/> */}
    </div>
     
    </div>
  )
}

export default Dashboard