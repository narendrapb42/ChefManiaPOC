import mongoose from "mongoose";
import validator from 'validator'

const cookForm = new mongoose.Schema({
    name:{type:String, required:true, minLength:3},
    contact:{type:String, maxLength:12},
    email:{type:String, required:true ,validate:{validator:(e)=>validator.isEmail(e)}},
    message:{type:String}
})

export default mongoose.model('form',cookForm)