import axios from 'axios';
import { Button, Card ,  DarkThemeToggle, Datepicker,  Label, Select, Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow, Textarea, TextInput, } from 'flowbite-react'
import { Menu, Trash2 } from "lucide-react";
import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../Context/UserContext';
import { toast } from 'react-toastify';

const CreateInvoice = () => {

  //geting value from context api 

  const {backendUrl, token}=useContext(UserContext)

  //all inputs and useState variable 
   const[invoiceNumber,setInvoiceNumber]=useState('')
   const[startDate,setStartDate]=useState(null)

   const[dueDate,setDueDate]=useState(null)
   //business
   const[businessName,setBusinessName]=useState('')
   const[businessEmail,setBusinessEmail]=useState('')
   const [businessAddress,setBusinessAddress]=useState('')
   const[businessPhone, setBusinessPhone]=useState('')

  //client
  const[clientName, setClientName]=useState('')
  const[clientEmail,setClientEmail]=useState('')
  const[clientAddress, setClientAddress]=useState('')
  const[clientPhone, setClientPhone]=useState('')


  //note and payment term 
  const[note,setNote]=useState('')
  const[paymentTerm,setPaymentTerm]=useState('Net 15')


  //tax and total 

  const[tax,setTax]=useState(0)
  const [subTotal,setSubTotal]=useState(0)




  // importent function 
  const [item,setItem]=useState([
    {name:"", qty:1, price:0, tax:0}
  ])

  const handleItemChange=(index,field, value)=>{
    const newItems=[...item]
    newItems[index][field]=value
    setItem(newItems)
  }

  const addItem=()=>{
    setItem([...item,{name:"", qty:1, price:0, tax:0}])
  }

  const deleteItem=(index)=>{
    const newItems=item.filter((_,i)=> i !==index)
    setItem(newItems)
  }


  // ====================
  // TOTAL CALCULATIONS
  // ====================

  // TOTAL CALCULATIONS WITH useEffect
useEffect(() => {
  const st = item.reduce((acc, curr) => acc + curr.qty * curr.price, 0);
  setSubTotal(st);

  const tx = item.reduce(
    (acc, curr) => acc + curr.qty * curr.price * (curr.tax / 100),
    0
  );
  setTax(tx);
}, [item]);

const Total = subTotal + tax;


//api calling function 

const submitHandler=async()=>{
  try{
    const response=await axios.post(`${backendUrl}/createInvoice/`,{invoiceNumber,startDate,dueDate,businessName,businessEmail,businessAddress,businessPhone, clientName, clientEmail, clientAddress,clientPhone, note,paymentTerm,item, tax,subTotal,Total},{headers:{token}})
    console.log(response.data)
    if(response.data.success){
      toast.success(" invoice created successfully")
    }
  }
  catch(e){
    console.log(e.message)


  }
}



return(
  <>

   {/* date section  */}
  <Card href="#" className=" flex  mt-[6vh] ml-[2vw] sm:ml-[3vw] w-[95vw]  sm:w-[75vw]  ">
    <div className=' flex flex-col sm:flex-row  gap-10    '>

      <div className=' flex flex-col  items-start'>
        <Label htmlFor='invoiceNumber' className=' text-lg sm:text-sm font-semibold '>invoice number</Label>
        <TextInput id='invoiceNumber' type='text' onChange={(e)=>{setInvoiceNumber(e.target.value)}} value={invoiceNumber} placeholder='INV-1006' className=' w-[83vw] sm:w-[20vw]' />
      </div>
      <div className=' flex  flex-col items-start   '>
        <Label htmlFor='startDate' className='text-lg sm:text-sm font-semibold'>invoice date</Label>
        <Datepicker id='startDate'  value={startDate} onChange={(date)=>{setStartDate(date)}}  className=' w-[83vw] sm:w-[20vw]' />
      </div>

      <div className=' flex  flex-col items-start   '>
        <Label htmlFor='dueDate' className='text-lg sm:text-sm font-semibold'>Due date</Label>
        <Datepicker id='dueDate' onChange={(date)=>{setDueDate(date)}} value={dueDate} className=' w-[83vw] sm:w-[20vw]' />
      </div>

    </div>
  </Card>
  {/*  date section  */}

{/*  
 Billfrom and Billto section  */}

 <div className=' flex flex-col sm:flex-row lg:flex-row '>

{/* bill from  */}
<Card className=' flex flex-col gap-5  mt-[3vh] ml-[2vw] sm:ml-[3vw] w-[96vw] sm:w-[37vw]'>

  <Label className=' text-2xl font-extrabold'>Bill From</Label>
   <Label htmlFor='businessName' className=' text-lg sm:text-sm font-semibold'>Business Name</Label>
   <TextInput id='businessName' type='text' onChange={(e)=>{setBusinessName(e.target.value)}} value={businessName}  required/>

    <Label htmlFor='email' className=' text-lg sm:text-sm font-semibold'>Email</Label>
   <TextInput id='email' type='email' onChange={(e)=>{setBusinessEmail(e.target.value)}} value={businessEmail} required />

    <Label htmlFor='address' className=' text-lg sm:text-sm font-semibold'>Addrtes</Label>
    <Textarea id='address'  onChange={(e)=>{setBusinessAddress(e.target.value)} } required></Textarea>

    <Label htmlFor='phoneNumber' className=' flex  items-start text-lg sm:text-sm font-semibold'>Phone</Label>
   <TextInput id='phoneNumber' type='number' onChange={(e)=>{setBusinessPhone(e.target.value)}} value={businessPhone}   required/>

</Card>

{/* bill to */}
<Card className=' flex flex-col gap-5  mt-[3vh] ml-[2vw] sm:ml-[2vw] w-[96vw] sm:w-[37vw]'>

  <Label className=' text-2xl font-extrabold'>Bill To</Label>
   <Label htmlFor='ClientName' className=' sm:text-sm font-semibold'>Client Name</Label>
   <TextInput id='businesClientName' type='text' onChange={(e)=>{setClientName(e.target.value)}} value={clientName} required />

    <Label htmlFor='ClientEmail' className=' text-sm font-semibold'>Client Email</Label>
   <TextInput id='ClientEmail' type='email' onChange={(e)=>{setClientEmail(e.target.value)}} value={clientEmail} />

    <Label htmlFor='ClientAddress' className=' text-sm font-semibold'>Client Addrtes</Label>
    <Textarea id='ClientAddress' onChange={(e)=>{setClientAddress(e.target.value)}} value={clientAddress}></Textarea>

    <Label htmlFor='ClientPhoneNumber' className=' flex  items-start text-sm font-semibold'>Client Phone</Label>
   <TextInput id='ClientPhoneNumber' type='number' onChange={(e)=>{setClientPhone(e.target.value)}} value={clientPhone}  required/>

</Card>

 </div>


 <Card className='   ml-3 sm:ml-8  w-[95vw] sm:w-[77vw] mt-[1vh] p-4  '>
  <Label className=' text-xl font-bold'>Items</Label>
  <div className='overflow-x-auto w-full'>
  <Table hoverable  title='Items' className=' mt-[1vh]  w-full min-w-[600px] h-full '>

    <TableHead>
    <TableRow>
    <TableHeadCell>ITEM</TableHeadCell>
    <TableHeadCell>QTY</TableHeadCell>
    <TableHeadCell>PRICE</TableHeadCell>
    <TableHeadCell>TAX(%)</TableHeadCell>
    <TableHeadCell>TOTAL</TableHeadCell>
    </TableRow>
    </TableHead>

    <TableBody>
      { item.map((e,index)=>(
      <TableRow key={index} className='bg-white dark:border-gray-700 dark:bg-gray-800'>
        <TableCell>
          <TextInput type='text' onChange={(e)=>{handleItemChange(index,"name",e.target.value || "")}} value={e.name} placeholder='item' className=' w-full'/>
        </TableCell>

        <TableCell>
          <TextInput type='number' onChange={(e)=>handleItemChange(index,"qty",parseInt(e.target.value || 0))} value={e.qty} placeholder='quantity' className=' w-full'/>
        </TableCell>

        <TableCell>
          <TextInput type='number' onChange={(e)=>handleItemChange(index,"price",parseFloat(e.target.value || 0))} value={e.price} placeholder='price' className=' w-full'/>
        </TableCell>

        <TableCell>
          <TextInput type='number' placeholder='tax' onChange={(e)=>handleItemChange(index,"tax",parseFloat(e.target.value || 0))} value={e.tax} className=' w-full'/>
        </TableCell>

        <TableCell>
        ${(e.qty * e.price * (1 + e.tax / 100)).toFixed(2)}  
        </TableCell>

        <TableCell>
          <Button  size='20 ' color='failure' onClick={()=>deleteItem(index)}>
            <Trash2 color='red' />
          </Button>
        </TableCell>

      </TableRow>
      ))
      }
    </TableBody>
  </Table>
  </div>

  <Button outline color="dark"  className=' me-2 h-8 w-16' onClick={addItem}>Add</Button>
 </Card>

  <div className=' mt-3 mb-3 flex flex-col sm:flex-row w-full  justify-evenly gap-3'>

      <Card className=' ml-2 sm:ml-7 w-[97vw] sm:w-[35vw] flex-col gap-4 '>
        <Label className=' inter text-2xl sm:text-xl font-bold '>Notes & Terms</Label>
        <Label htmlFor='#notes' className='inter  text-lg sm:text-lg  font-medium' >Notes</Label>

        <Textarea  placeholder=' Leave the note......' required  rows={4}  onChange={(e)=>{setNote(e.target.value)}} value={note} />

        <Label className=' sm: text-xl sm:ml-2 inter'>Payment terms</Label>

        <Select id='payment terms' onChange={(e)=>{setPaymentTerm(e.target.value)}} value={paymentTerm} >
          
            <option>Net 15</option>
            <option>Net 30</option>
            <option>Net 7</option>
        </Select>
      </Card>

      {/* TOTALS SECTION */}
      <Card className=' ml-2 sm:ml-7 w-[97vw] sm:w-[35vw] flex-col gap-4 '>
        
      <div  className=' flex flex-row w-full justify-between'>
      <Label className=' text-base inter font-medium'>Subtotal</Label> 
      <Label className=' text-base inter font-medium'>
        ${subTotal.toFixed(2)}
      </Label>  
      </div>  

      <div  className=' flex flex-row w-full justify-between'>
      <Label  className=' text-base inter font-medium'>Tax</Label> 
      <Label className=' text-base inter font-medium'>
        ${tax.toFixed(2)}
      </Label>  
      </div>  

      <hr />

      <div  className=' flex flex-row w-full justify-between'>
      <Label className=' text-base font-extrabold '>Total</Label> 
      <Label className=' text-base inter font-extrabold'>
        ${Total.toFixed(2)}
      </Label>  
      </div>  
        
      </Card>

  </div>

<div className='  w-full h-[20vh]'>
<Button color="yellow"  onClick={()=>{submitHandler()}}  className=" mx-2 !h-[5vh] w-[95vw] sm:w-[75vw] mb-6 sm:ml-10 bg-black text-white dark:bg-white  dark:text-black" >
  Save
</Button>
</div>

  </>
)
}

export default CreateInvoice
