import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import User from './Modals/User.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import CookForm from './Modals/CookForm.js'

dotenv.config()
const app = express()


app.use(cors())

app.use(bodyParser.json())
app.get('/home',(req,res)=>{
    res.send('Hello')
})

app.post('/usersignup',async (req,res)=>{
    const {name,email,password} = req.body

    try{
        if(name === '' || email === '' || password === ''){
            return res.status(400).json({msg:'Cannot have empty values'})
        }
        
        const userExists = await User.findOne({email})

        if(!userExists){
            const data = new User({name,email,password})
            const savedData = await data.save()
            
            const token = jwt.sign({id:email},process.env.SECRET_KEY,{expiresIn:'1h'})
            res.status(201).json({msg:'User created successfully..Redirecting',data:savedData,token})
        }
        else{
            return res.status(400).json({msg:'User Already exists. Please login!'})
        }
      
    }
    catch(err){
        return res.status(500).json({msg:'Internal server error'})
    }
    
})

app.post('/loginuser',async (req,res)=>{
    const {email,password} = req.body

    const user = await User.findOne({email})

    const passwordMatch = await bcrypt.compare(password,user.password)

    if(passwordMatch){
        const token = jwt.sign({id:email},process.env.SECRET_KEY,{expiresIn:'1h'})
        res.status(200).json({msg:'Logging you in!',token,name:user.name})
    }
    else{
        res.status(401).json({msg:'Either password or email is incorrect'})
    }
})

app.post('/cookform',async(req,res,next)=>{
    const {name,contact,email,message} = req.body
    
    if(name ==='' || contact === '' || email === '' || message === ''){
        return res.status(400).json({msg:'Please provide all values'})
    }
    try{
        const data = new CookForm({name,contact,email,message})
        await data.save()
    
        res.status(200).json({msg:'Submitted Succesfully'})
    }catch(err){
        return res.status(400).json({msg:'Something went wrong. Please try again'})
    }
   next()
})
const connectDb = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL)
        app.listen(process.env.PORT,()=>{
            console.log(`Port is running on ${process.env.PORT}`);
            
        })
    }catch(err){
        console.log(err)
    }
};connectDb()
