const mongoose=require('mongoose')
const Schema=mongoose.Schema

const mongodbModel=async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URL)
        console.log('mongodb connection sucessfull')
    }catch(error){
        console.log(error)
    }
}
module.exports=mongodbModel