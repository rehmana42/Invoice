import express from 'express'
import { CreateInvoice, deleteInvoice, getInvoice, login, myInvoice, registar, statusUpdate } from '../controller/userController.js'
import { AuthUser } from '../middlewere/Auth.js'

export const userRouter=express.Router()

userRouter.post("/registar",registar)
userRouter.post("/login", login)

//invoice router 
userRouter.post('/createInvoice',AuthUser,CreateInvoice)
userRouter.get('/myInvoice',AuthUser ,myInvoice)
userRouter.get('/getInvoice/:id',AuthUser,getInvoice)
userRouter.put('/update/:id', AuthUser,statusUpdate)
userRouter.delete('/delete/:id',AuthUser,deleteInvoice)