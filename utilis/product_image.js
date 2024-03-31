const multer=require('multer')
const path=require('path')
const fs=require('fs')

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'product_ima/')
    },
    filename:(req,file,cb)=>{
        const hello=path.extname(file.originalname)
        cb(null,Date.now()+hello)
    }

})

const userimage=multer({
    storage:storage
})
module.exports=userimage