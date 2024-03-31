const Product = require('../model/Product_model')
const path=require('path')
const fs=require('fs')
// ======alluser================
const Alluser =async (req, res) => {
    try{
        const alluser=await Product.find()
        //console.log('kk', alluser);
        if(alluser){
            res.render('home',{
                title:"home page",
                data:alluser
            })
        }

    }catch(error){
        console.log(error)
    }
  
}
const Adduser = (req, res) => {
    res.render('adduser')
}
// ====postuser========
const Postuser = async (req, res) => {
    try {
        const { pro_name, Price, size, dese } = req.body
        const postuser = new Product({
            pro_name,
            Price,
            size,
            dese
        })
        if(req.file){
            postuser.image=req.file.path
        }

        const postusers = await postuser.save()
        if (postusers) {
            res.redirect('/')
        } else {
            res.render('adduser')
        }


    } catch (error) {
        console.log(error)
    }

}

// ==============edituser=========
const EditUser=async(req,res)=>{
    try{
        const id=req.params.id
        const edituser=await Product.findById(id)
        if(edituser){
            res.render('edituser',{
                title:"edituser",
                data:edituser
            })
        }

    }catch(error){
        console.log(error)
    }
}

// ============updateuser=========
const UpdateUser=async(req,res)=>{
    try{
        const id=req.params.id
        const new_image=req.file.path
        const duplicateImagedelete= await Product.findById(id)
         fs.unlinkSync(duplicateImagedelete.image)
         
        
        const { pro_name, Price, size, dese } = req.body
        const Updateuser= await Product.findByIdAndUpdate(id,{
            pro_name, Price, size, dese,image:new_image
        },{new:true})
          if(Updateuser){
            res.redirect("/");  
          }
            
        

    }
    catch(error){
        console.log(error)
    }
}


// =========deletuser=======
const DeleteUser=async(req,res)=>{
    try{
        const id=req.params.id
        const deletuser=await Product.findByIdAndDelete(id)
        if(deletuser){
            fs.unlinkSync(deletuser.image)
            res.redirect('/')
        }

    }catch(error){
        console.log(error)
    }
}
module.exports = {
    Alluser,
    Adduser,
    Postuser,
    EditUser,
    UpdateUser,
    DeleteUser
}