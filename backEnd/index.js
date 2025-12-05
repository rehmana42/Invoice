import express from  'express'
import {ConnectCloudinary} from './config/cloudinary.js'
import {config} from 'dotenv'
import cors from 'cors'
import { ConnectDB } from './config/mongoDB.js'
import  {userRouter} from './routes/AuthRoute.js'





const app=express()

//connection  function
config()
ConnectCloudinary()
ConnectDB()

//middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

app.use("/api/user",userRouter)





// creating the connection 

console.log(process.env.MONGO_URL)
app.get('/',(req,res)=>{
    res.json('landing page is here ')
})

app.listen(3000,()=>{
    console.log('http://localhost:3000')
})