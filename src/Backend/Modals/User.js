import mongoose from 'mongoose'
import validator from 'validator'
import bcrypt from 'bcrypt'

const User = mongoose.Schema({
    name:{type:String, required:true, minLength:3},
    email:{type:String, required:true,validate:{validator:(e)=>validator.isEmail(e)}},
    password:{type:String, required:true, minLength:3, maxLength:10}
})

User.pre("save",async function (){
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)

})
export default mongoose.model("Users",User)