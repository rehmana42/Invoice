import axios from 'axios';
import { Button, Card, Dropdown, DropdownItem, Label , Select, Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow, TextInput  } from 'flowbite-react'
import { CrossIcon, Delete, DeleteIcon, DollarSign,  NotepadText, SearchIcon, Trash2Icon, X,} from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import { UserContext } from '../Context/UserContext';
import { BiCut } from 'react-icons/bi';
import { PropagateLoader } from 'react-spinners';
import { toast } from 'react-toastify';

const Mpage = () => {

  

  const [Query,setQuery]=useState('');
  const [Loading,setLoading]=useState(false)
  const [invoice,setInvoice]=useState([])

  const [filteredInvoice, setFilteredInvoice]=useState([])
  //get userContext values
  const {backendUrl, token, navigate}=useContext(UserContext)

//request invoice function 
  const requestInvoice=async()=>{
    try{
      console.log(token)
      setLoading(true)
      const response=await axios.get(`${backendUrl}/myInvoice`,{headers:{token}})
 
      setInvoice(response.data.invoice)
      setFilteredInvoice(response.data.invoice)
      setLoading(false)
   
    }
    catch(e){
      console.log(e.message )
      setLoading(false)
    }
    finally{
      setLoading(false)
    }
  }

 

 
  
  //request useEffect 
  useEffect(()=>{
    requestInvoice()
  },[])

    //search function
  const Search=()=>{
   if(Query.trim()){
      setInvoice(filteredInvoice.filter(i=> i.clientName.toLowerCase().includes(Query.toLowerCase())))
    }
    else{
      setInvoice(filteredInvoice)
    }
  }
  useEffect(()=>{
    Search()
  },[Query])

  //update function 
  const updated=async(id)=>{
    console.log(token)
    const response=await axios.put(`${backendUrl}/update/${id}`,{},{headers:{token}} )
    // useEffect(()=>{
      requestInvoice()
    // },[])
  }


//delete invoice function 

const deleteInvoice=async(id)=>{
  try{
    const responce=await axios.delete(`${backendUrl}/delete/${id}`,{headers:{token}})
    console.log(responce.data)
    toast.success(responce.data.msg)
    requestInvoice()
  }
  catch(e){
    console.log(e.message )
  }
}

  return (
   
        <>
        { Loading ?(
          <PropagateLoader className=' flex self-center mt-24'/>
        ):(
        <div>
        
        
        <div className=' flex  flex-col gap-3 sm:flex-row'>
        <Card className=' ml-2  mt-3 h-[14vh] w-[96vw] sm:w-[27vw] '>
           <div className=' flex flex-row items-center gap-5 '>
            <div className='  h-10 w-10  bg-blue-200  rounded-md'>
            <NotepadText color='blue' className='w-8 h-8 place-self-center  mt-1 ' />
              </div>
           
           
           <div className=' flex flex-col gap-1'>
            <Label className=' text-xl sm:text-base text-gray-500  font-semibold '>Total Invoice</Label>
            <Label className=' text-2xl sm:text-lg font-bold'>{filteredInvoice.length}</Label>
           </div>
           </div>
        </Card>

     

        <Card className=' ml-2 mt-3 h-[14vh] w-[96vw] sm:w-[27vw] '>
           <div className=' flex flex-row items-center gap-5 '>
            <div className='  h-10 w-10  bg-green-200  rounded-md'>
            <DollarSign color='green' className='w-8 h-8 place-self-center  mt-1 ' />
              </div>
           
           
           <div className=' flex flex-col gap-1'>
            <Label className=' text-xl sm:text-base text-gray-500  font-semibold '>Total Paid</Label>
            <Label className=' text-2xl sm:text-lg font-bold'>{filteredInvoice.filter(i=> i.status =='paid').length}</Label>
           </div>
           </div>
        </Card>

        {/* unpaid */}

        <Card className=' ml-2 mt-3 h-[14vh] w-[96vw] sm:w-[24vw] '>
           <div className=' flex flex-row items-center gap-5 '>
            <div className='  h-10 w-10  bg-red-200  rounded-md'>
            <DollarSign color='red' className='w-8 h-8 place-self-center  mt-1 ' />
              </div>
           
           
           <div className=' flex flex-col gap-1'>
            <Label className=' text-xl sm:text-base text-gray-500  font-semibold '>Total UnPaid</Label>
            <Label className=' text-2xl sm:text-lg font-bold'>{filteredInvoice.filter(i=> i.status =='unpaid').length}</Label>
           </div>
           </div>
        </Card>

        </div>

       

        <div className="inter mt-10 rounded-md shadow-md border border-gray-400 w-[95%] sm:w-[97%] ml-3">

  <TextInput 
    icon={SearchIcon}
    onChange={(e)=> setQuery(e.target.value)} 
    value={Query} 
    placeholder='Search here'
    className='mt-4 w-[85%] ml-3'
  />

  {/* Only table scrolls */}
  
  <div className="overflow-x-auto overflow-y-auto max-h-[400px] mt-4">
         
      <Table  theme={{
    "root": {
      "base": "w-full text-left text-sm text-gray-500 dark:text-gray-400",
      "shadow": "absolute left-0 top-0 -z-10 h-full w-full rounded-lg bg-white drop-shadow-md dark:bg-black",
      "wrapper": "relative"
    },
    "body": {
      "base": "group/body",
      "cell": {
        "base": "px-6 py-4 group-first/body:group-first/row:first:rounded-tl-lg group-first/body:group-first/row:last:rounded-tr-lg group-last/body:group-last/row:first:rounded-bl-lg group-last/body:group-last/row:last:rounded-br-lg"
      }
    },
    "head": {
      "base": "group/head text-xs uppercase text-gray-700 dark:text-gray-400",
      "cell": {
        "base": "bg-gray-100 px-6 py-3 group-first/head:first:rounded-tl-lg group-first/head:last:rounded-tr-lg dark:bg-gray-700"
      }
    },
    "row": {
      "base": "group/row",
      "hovered": "hover:bg-gray-50 dark:hover:bg-gray-600",
      "striped": "odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700"
    }
  }} >
        <TableHead>
          <TableRow className=' text-sm sm:text-sm'>
            <TableHeadCell>CLIENT</TableHeadCell>
            <TableHeadCell>AMOUNT </TableHeadCell>
            <TableHeadCell>STATUS </TableHeadCell>
            <TableHeadCell>DUE DATE</TableHeadCell>
            <TableHeadCell>Action</TableHeadCell>

          
          </TableRow>
        </TableHead>
        <TableBody className="divide-y">
           {
            invoice && invoice.length <=0?
            <TableRow>
      <TableCell colSpan={5} className="text-center py-6 text-gray-500">
        No data found
      </TableCell>
    </TableRow>:
           invoice?.map((item,id)=>(

         
          <TableRow key={id} className="bg-white dark:border-gray-700 dark:bg-gray-800 text-sm sm:text-sm">
            <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white cursor-pointer" onClick={()=>{navigate(`/invoice`, { state: item })}}>
              {item.clientName}
            </TableCell>
            <TableCell>${item.Total}</TableCell>
            <TableCell className={`${item.status == "paid" ? ' text-green-600' :'text-red-600' }  font-bold`}>{item.status}</TableCell>
            <TableCell>{ item.startDate 
      ? new Date(item.startDate).toLocaleString("en-IN", { 
          day:"2-digit", 
          month:"short", 
          year:"numeric", 
          
        }) 
      : "" 
  }</TableCell>
            <TableCell> <div className=' flex flex-row  items-center justify-start gap-5'>
              <Button color={'dark'} 
              
              onClick={()=>{
              updated(item._id)
              }}
              size='sm' className=' font-medium  dark:bg-gray-200 dark:text-black  text-xs  h-8 w-28 sm:text-sm sm:h-8 sm:w-15' >{item.status=='unpaid'? 'Mark Paid': 'Mark Unpaid'}</Button>
              <Trash2Icon color='red' onClick={()=>{deleteInvoice(item._id)}}/>
              </div></TableCell>

           
          </TableRow>
           ))
}
        </TableBody>

        

      </Table>
      </div>
    </div>
        

</div>
        )}
    </>
    
  )
}

export default Mpage