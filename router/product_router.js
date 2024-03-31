const express=require('express')
const path=require('path')
const fs=require('fs')
const router=express.Router()


const { Alluser, Adduser, Postuser, EditUser, UpdateUser, DeleteUser } = require('../controler/product_controler')
const uplode=require('../utilis/product_image')

router.get('/',Alluser)
router.get('/adduser',Adduser)
router.post('/postuser',uplode.single('image'),Postuser)
router.get('/edituser/:id',EditUser)
router.post('/updateuser/:id',uplode.single('image'),UpdateUser)
router.get('/deletuser/:id',DeleteUser)

module.exports=router