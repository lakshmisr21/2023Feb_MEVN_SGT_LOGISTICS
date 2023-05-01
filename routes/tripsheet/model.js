const mongoose = require('mongoose')
//const bcrypt = require('bcrypt')

const tripSchema = new mongoose.Schema({
    // slno:{type:Number, required:true},   
    gcno:{type:Number,required:true},   
    consigner:{type:String,required:true},  
    consignee:{type:String,required:true},  
    quantity:{type:Number,required:true},  
    topay:{type:String,required:true},     
    paid:{type:Number}, 
})


const tripsheetSchema = new mongoose.Schema({
    tripsheetno:{
        type:String,
        required:true
    },
    vehicleno:{
        type:String,
        required:true
    },
    place:{
        type:String,
        required:true }
    ,
    trip_date:{
        type:String,
        default:Date.now()},
    // trip:[{tripSchema}],   
    trip:[{
        slno: Number,
        gcno: Number,
        consigner: String,
        consignee: String,
        quantity : Number,
        topay : Number,default:0,
        paid : Number,default:0
    }] ,


    //Trip Expenses
    
    lorryrent:{
        type:Number,
        required:true
    },
    cash:{
        type:Number,default:0        
    },
    unload:{
        type:Number,default:0         
    },
    righter:{
        type:Number,default:0         
    },
    amaali:{
        type:Number,default:0 
    },
    miscellaneous:{
        type:Number,default:0 
    },
    topaytotal:{
        type:Number
    },
    paidtotal:{
        type:Number
    },
    //expenses:{
      //  type:Number
    //},
    balance:{
        type:Number
    },
    deposit:{ type:Number,default:0},
    depositdue:{ type:Number,default:0}
})



/*const counterSchema = mongoose.Schema({
    id:{
        type:String
    },
    seq:{
        type:Number
    }
})*/


//const seq = mongoose.model('counter',counterSchema)
const tripModel = mongoose.model('tripsheet',tripsheetSchema);
const tripsheetDetailsModel = mongoose.model('tripsheetDetails',tripSchema)

module.exports = {tripModel, tripsheetDetailsModel}