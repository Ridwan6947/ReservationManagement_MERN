import mongoose from "mongoose";
import validator from "validator";

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

export const Register = mongoose.model("Register" , registerSchema);