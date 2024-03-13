import mongoose from "mongoose";
import validator from "validator";
import { jwt } from "jsonwebtoken";
import bcrypt from 'bcrypt';


const registerSchema = new mongoose.Schema({
    fullname:{
        type:String,
        required:true,
        minLength: [5 , "Full name must contain atleast 5 letters"],
    },
    email:{
        type:String,
        required:true,
        validate: [validator.isEmail , "Enter a valid email"],
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    username:{
        type:String,
        required:true,
        unique:true,
    }
});

registerSchema.pre("save" , async function(next){
    if(!this.isModified("password")) return next(); // check if the password was modified inorder to prevent multiple encryption
    this.password = bcrypt.hash(this.password , 3)
})

registerSchema.methods.isPasswordModified = async function(password){
    return await bcrypt.compare(password , this.password);            
}

export const Register = mongoose.model("Register" , registerSchema);