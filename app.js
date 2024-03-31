const express=require('express')
const ejs=require('ejs')
const DotEnv=require('dotenv')
const path=require('path')
const fs=require('fs')
const multer=require('multer')
const bodyParser=require('body-parser')
const app=express()
DotEnv.config()
const mongodbModel = require('./config/database')
mongodbModel()



app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.use('/product_ima',express.static('product_ima'))



app.set('view engine','ejs')
app.set('views','views')

const router = require('./router/product_router')
app.use(router)

const port=4041
app.listen(port,()=>{
    console.log(`server started http://localhost:${port}`)
})