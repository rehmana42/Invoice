import jwt  from "jsonwebtoken"
import { userModel } from "../models/userModel.js"
import bcrypt from "bcrypt"
import { invoiceModel } from "../models/invoiceModel.js"


export const registar=( async(req,res)=>{
    try{
        const {name,email,password}=req.body
        console.log(name, email,password)
        const user=await userModel.findOne({email})
        // console.log(user)

        if(user)return res.json({success:false,error:"user already exist"})
        
        const salt=await  bcrypt.genSalt(10)
        const hash=await bcrypt.hash(password,salt)

        const newUser=userModel.create({
            name,
            email,
            password:hash
        })

        const token= jwt.sign({email:newUser.email}, process.env.JWT_SECRATE)
        console.log(token)
        res.json({success:true,token})
    }
    catch(e){
        res.json({success:false,error:e.message})
    }

})


//login 

export const login =async (req,res)=>{
    try{
    const{email,password}=req.body
    console.log(email)
    console.log(password)
    
    const user=await userModel.findOne({email})
   
    if(!user){
      return res.json({succes:false,msg:'user not find' })
    }
    
     const isMatch= await bcrypt.compare(password,user.password)
     console.log(isMatch)
     if(isMatch){
      const loginToken=jwt.sign({email:user.email},process.env.JWT_SECRATE)
      console.log(loginToken)
      return res.json({success:true,loginToken,role:user.role})
  
     }
     else{
      return res.json({
        success:false,
        msg:"you password is wrong "
      })
     }
    
  
  }
  catch(error){
    res.json({succes:false,msg:error.message})
  }
  }
  
  

// because i am fucking  lazy  so i continue the invoice part in this file below this line  
//create invoice 
export const CreateInvoice= async(req,res)=>{

  try{
    const {invoiceNumber,startDate,dueDate,businessName,businessEmail,businessAddress,businessPhone, clientName, clientEmail, clientAddress,clientPhone, note,paymentTerm,item, tax,subTotal,Total}=req.body

    // login users
    const user=await userModel.findOne({email:req.userId.email})

    console.log(startDate, dueDate)
    //creating invoice 
    const newInvoice=await invoiceModel.create({
      invoiceNumber,
      startDate,
      dueDate,
      businessName,
      businessEmail,
      businessAddress,
      businessPhone,
       clientName,
      clientEmail,
      clientAddress,
      clientPhone,
      note,
      paymentTerm,
      item,
      tax:parseInt(tax),
      subTotal:parseInt(subTotal),
      Total:parseInt(Total),
      user:user._id,

    })

    console.log(newInvoice)
    return res.json({success:true,newInvoice})
    

  }
  catch(e){
    res.json({succes:false,msg:e.message})
  }
}


//all invoices of particular 

export const myInvoice=async(req,res)=>{
  try{

    
    const user=await userModel.findOne({email:req.userId.email})
  
    const invoice=await invoiceModel.find({user:user._id})
   
    res.json({success:true, invoice})

  }
  catch(e){
    res.json({succes:false,msg:e.message})
    console.log(e.message)
  }
}


//get invoice my id

export const getInvoice=async(req,res)=>{
  try{
    const {id}=req.params
    console.log(id)
    const invoice=await invoiceModel.find({_id:id})
    res.json({success:true, invoice})

  }
  catch(e){
    res.json({succes:false,msg:e.message})
    console.log(e.message )
  }
}

//status update 

export const statusUpdate=async(req,res)=>{
  try{
    const id=req.params.id
    console.log(id)

    const invoice=await invoiceModel.findOne({_id:id})
    if(invoice.status=='paid'){
      invoice.status='unpaid'
    }
    else{
       invoice.status='paid'
    }
    invoice.save()
    console.log(invoice)
    res.json({success:true, msg:"updated successfully"})
  }
  catch(e){
    res.json({succes:false,msg:e.message})
    console.log(e.message )
  }
}

//delete invoice 

export const deleteInvoice=async(req,res)=>{
  try{
    const{ id}=req.params
    const invoice=await invoiceModel.findOneAndDelete({_id:id})
    console.log(invoice)
    res.json({success:true, msg:"deleted successfully"})
  }
  catch(e){
    res.json({succes:false,msg:e.message})
    console.log(e.message )
  }
}




