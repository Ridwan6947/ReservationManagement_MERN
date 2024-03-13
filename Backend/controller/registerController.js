import errorHandler from "../error/error.js";
import {Register} from '../model/register.js';


export const sendRegister = async (req, res, next) => {
    const { fullname, email, password, username } = req.body;
    try {
        // Check if all required fields are provided
        if (!fullname || !email || !password || !username) {
            throw new errorHandler("Please fill all the details", 400);
        }

        // Check if the email is already registered
        const existingUserByEmail = await Register.findOne({ email });
        if (existingUserByEmail) {
            throw new errorHandler("Email is already registered", 400);
        }
        //Check if username already present
        const existingUserByUsername = await Register.findOne({username});
        if(existingUserByUsername){
            throw new errorHandler("Username already registered , try another" , 400);
        }

        // Create a new user document
        const newUser = await Register.create({
            fullname,
            email,
            password,
            username
        });

        // Optionally, return the created user object in the response
        res.status(200).json({
            success: true,
            message: "User registered successfully",
            user: newUser
        });
    } catch (error) {
        // Handle validation errors and other unexpected errors
        if (error.name === "ValidationError") {
            const validationErrors = Object.values(error.errors).map(
                (err) => err.message
            );
            return next(new errorHandler(validationErrors.join(', '), 400));
        } else {
            console.error(error);
            return next(new errorHandler("Internal server error", 500));
        }
    }
};

export const sendLogin = async (req, res, next) => {
    try {
        const { email, password } = req.body;
 
        const user = await Register.findOne({ email });

        if (user) {
            if (user.password === password) {
                res.status(200).json({
                    success: true,
                    message: "Login successful"
                });
            } else {
                res.status(401).json({
                    success: false,
                    message: "Wrong password"
                });
            }
        } else {
            res.status(404).json({
                success: false,
                message: "Email not registered"
            });
        }
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Something went wrong"
        });
    }
};