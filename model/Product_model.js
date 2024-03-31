const mongoose=require("mongoose")
const Schema=mongoose.Schema

const mongoModel=new Schema({
    pro_name:{
        type:String,
        required:true
    },
    Price:{
        type:String,
        required:true
    },
    size:{
        type:String,
        required:true
    },
    dese:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    status:{
        type:String,
        default:1
    },
})

const Product_model= mongoose.model('allditail',mongoModel)
module.exports=Product_model