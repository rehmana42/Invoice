import axios from 'axios'
import { Button, Card, Label, Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow  } from 'flowbite-react'
import { Printer } from 'lucide-react'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { UserContext } from '../Context/UserContext'
import { useReactToPrint } from 'react-to-print'
import html2pdf from "html2pdf.js"

const Pinvoice = () => {
  //params content 
  const {state}=useLocation()
  const invoice=state
 
  //get userContext value 
  const {token}=useContext(UserContext)

  //print function and variable
  const printRef=useRef()

  const handleDownload = () => {
    const element = printRef.current

    const options = {
      margin: 0.5,
      filename: `invoice-${invoice.invoiceNumber}.pdf`,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
    }

    html2pdf().set(options).from(element).save()
  }

 

 

  useEffect(()=>{
    console.log(invoice)
    invoice
  },[invoice])

 
  return (
    
    <div>
      
      
      <div className=' mt-3  flex flex-col sm:flex-row justify-center sm:justify-between'>
        <div>  <Label className='  ml-4 text-2xl sm:ml-3 inter sm:text-xl font-bold'>Invoice</Label> <Label className=' text-3xl font-semibold text-gray-400'>{invoice.invoiceNumber}</Label></div>

        <Button onClick={()=>{handleDownload()}} ic className=' bg-black  rounded-md h-12 w-[60vw] ml-3 mt-3 text-xl  sm:w-28 sm:h-8  sm:text-base inter sm:mt-2 sm:mr-2 dark:bg-white dark:text-black ' >
          <Printer className="mr-2 h-5 w-5"/>
          Print </Button>
      
      </div>
      <div ref={printRef}>
      <Card className=' mt-5 inter' >
        {/* first section */}
        <div className=' flex flex-col sm:flex-row sm:justify-between gap-2'>
          
      <div>  <Label className=' flex flex-col sm:flex-row    sm:ml-1 inter sm:text-3xl  text-3xl  font-extrabold '>Invoice</Label> <Label className=' text-sm font-semibold text-gray-400'>{invoice.invoiceNumber}</Label></div>
     
      <div className={`h-7 w-16 ${invoice.status=='unpaid'? 'bg-red-200':'bg-green-200'} rounded-lg `}>
        <p className={`${ invoice.status=='unpaid'? 'text-red-800':'text-green-500'}  px-2`}>{invoice.status}</p>
       </div>
      </div>
        {/* first section */}

        <hr></hr>

        {/* address section  */}

        <div className=' flex  flex-col sm:flex-row  sm:justify-between gap-5'>

          {/* bill from */}
        <div className=' flex flex-col'> <Label className=' text-lg text-gray-400 font-semibold '>Bill From</Label>
        <Label className=' text-lg font-bold  mt-1'>{invoice.businessName} </Label>
        <Label className=' text-base text-gray-700'>{invoice.businessAddress}</Label>
        <Label className='text-base text-gray-700'>{invoice.businessEmail}</Label>
        <Label className='text-base text-gray-700'>{invoice.businessPhone}</Label>
        </div>

        {/* bill to  */}

        <div className=' flex  flex-col  sm:text-right  '> <Label className=' text-lg text-gray-400 font-semibold '>Bill to</Label>
        <Label className=' text-base font-bold  mt-1'>{invoice.clientName}</Label>
        <Label className=' text-sm text-gray-700'>{invoice.clientAddress}</Label>
        <Label className='text-sm text-gray-700'>{invoice.clientEmail}</Label>
        <Label className='text-sm text-gray-700'>{invoice.clientPhone}</Label>
        </div>


        </div>

        {/* date section  */}

        <div className=' mt-5 sm:mt-3 flex flex-col sm:flex-row sm:justify-between gap-3'>
          {/* invoice date */}

          <div className=' flex flex-col gap-1 '>
            <Label className=' text-lg text-gray-500 font-semibold'>INVOICE DATE</Label>
            <Label className=' text-base text-gray-800'>{invoice.startDate 
      ? new Date(invoice.startDate).toLocaleString("en-IN", { 
          day:"2-digit", 
          month:"short", 
          year:"numeric", 
          
        }) 
      : "" }</Label>
          </div>

          <div className=' flex flex-col gap-1 '>
            <Label className=' text-lg text-gray-500 font-semibold'>DUE DATE</Label>
            <Label className=' text-base text-gray-800'>{invoice.dueDate 
      ? new Date(invoice.dueDate).toLocaleString("en-IN", { 
          day:"2-digit", 
          month:"short", 
          year:"numeric", 
          
        }) 
      : "" }</Label>
          </div>

          <div className=' flex flex-col gap-1 '>
            <Label className=' text-lg text-gray-500  font-semibold'>PAYMENT TERM</Label>
            <Label className=' text-base text-gray-800'>{invoice.paymentTerm}</Label>
          </div>

        </div>


        {/* item section */}
        <div className="mt-5 overflow-x-auto">
  <Table striped
  theme={{
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
  }} 
  >
    <TableHead> 
      <TableRow className="bg-red-800">
        <TableHeadCell>Item</TableHeadCell>
        <TableHeadCell>Qty</TableHeadCell>
        <TableHeadCell>Price</TableHeadCell>
        <TableHeadCell>Tax</TableHeadCell>    
        <TableHeadCell>Total</TableHeadCell>
      
      </TableRow>
    </TableHead>
    
    <TableBody className="divide-y">
    { invoice.item?.map((i)=>(
      <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
        <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        {i.name}
        </TableCell>
        <TableCell>
          {i.qty}
        </TableCell>
        <TableCell>
          {i.price}
         </TableCell>
       <TableCell>{i.tax}</TableCell>
         <TableCell>
         ${(i.qty * i.price * (1 + i.tax / 100)).toFixed(2)}
         </TableCell>
      </TableRow>
    ))
  }
    </TableBody>
  </Table>
</div>



      <div className=' mt-5 sm:place-self-end  flex flex-col gap-3 sm:w-[24vw] w-[50vw]  sm:mr-3 '>
         <div  className=' flex flex-row w-full justify-between'>
              <Label className=' text-base inter font-medium'>Subtotal</Label> 
              <Label className='  text-base inter font-medium'>${invoice.subTotal}</Label>  
              </div>  
        
              <div  className=' flex flex-row w-full justify-between' >
              <Label  className=' text-base inter font-medium'>Tax</Label> 
              <Label className='  text-base inter font-medium'>${invoice.tax}</Label>  
              </div>  
              <hr></hr>
        
        
              <div  className=' flex flex-row w-full justify-between'>
              <Label className=' text-base font-extrabold '>Total</Label> 
              <Label className=' text-base inter font-extrabold'>${invoice.Total}</Label>  
              </div>  
        
        </div>  

        <hr className=' text-3xl mt-5'></hr>

        <div className=' flex flex-col ml-3 mt-2'>
          <Label className=' text-lg font-semibold inter  text-gray-600'>Notes</Label>
          <Label className=' text-base font-medium text-gray-500'>{invoice.note} </Label>
        </div>
       
      </Card>
      </div>
          
    </div>
  )
}

export default Pinvoice