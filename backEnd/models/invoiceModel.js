import mongoose from "mongoose";

const invoiceSChema=mongoose.Schema({
    invoiceNumber:{
        type:String
    },

    startDate:{
        type:String
    },
    dueDate:{
        type:String
    },

    businessName:{
        type:String
    }, 
    
    businessEmail:{
        type:String
    },
    businessAddress:{
        type:String
    },

    businessPhone:{
        type:String
    },

    clientName:{
        type:String
    },
    clientEmail:{
        type:String
    },
    clientAddress:{
        type:String
    },

    clientPhone:{
        type:String
    },

    item:[
        {
        name: { type: String, required: true },
        qty: { type: Number, required: true },
        price: { type: Number, required: true },
        tax: { type: Number, required: true }
        }
    ],

    note:{
        type:String
    },
   paymentTerm:{
    type:[String],
    enum:["Net 15", "Net 30", "Net 7"]
   },
   tax:{
    type:Number
   },
   subTotal:{
    type:Number
   },
   Total:{
    type:Number
   },

   user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"user"
   },
   status:{
    type:String,
    default:'unPaid'
 }
    

})

export const invoiceModel=mongoose.model('invoice',invoiceSChema)