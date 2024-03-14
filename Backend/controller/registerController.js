import errorHandler from "../error/error.js";
import { Register } from '../model/register.js';
import bcrypt from "bcrypt";
import ApiResponse from "../response/ApiResponse.js";


const generateAccessTokenRefreshToken = async (userId) => {
    try {
        const user = await Register.findById(userId)  // find userId of user from database to generate access and refresh token
        const accessToken = user.generateAccessToken()  // calling func from register model and storing
        const refreshToken = user.generateRefreshToke()  // calling func from register model and storing

        user.refreshToken - refreshToken // before this line only server had refresh token but after this we are storing refresh token in the database
        await user.save({ validateBeforeSave: false }) //mujhe pta h mai kya kr rha hu gyaan mt de

        return { accessToken, refreshToken }

    } catch (error) {
        throw new errorHandler("Internal error while generating Access and refresh token")
    }
}


export const registerUser = async (req, res, next) => {
    const { fullname, email, password, username } = req.body;
    try {
        // Check if all required fields are provided
        if (!fullname || !email || !password || !username) {
            throw new errorHandler("Please fill all the details", 400);
        }

        const userExist = await Register.findOne({
            $or: [{ email }, { username }]
        })

        if (userExist) {
            throw new errorHandler("user already exist", 404);
        }

        const hashedPassword = await bcrypt.hash(password, 3);
        // Create a new user document
        const newUser = await Register.create({
            fullname,
            email,
            password: hashedPassword,
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

export const loginUser = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        const user = await Register.findOne({ email });  // while accessing database or process that require high computation power we use await
        //await allows the program to wait for a promise to resolve or reject before proceeding to the next line of code

        if (user) {
            // if (user.password === password) {
            //     res.status(200).json({
            //         success: true,
            //         message: "Login successful"
            //     });
            // } else {
            //     res.status(401).json({
            //         success: false,
            //         message: "Wrong password"      //method 1 - used when bcrypt is not used
            //     });
            // }

            const isPasswordValid = await user.isPasswordCorrect(password) // method 2 - used with bcrypt

            if (isPasswordValid) {
                res.status(200).json({
                    success: true,
                    message: "Login Successful",
                })
            } else {
                res.status(400).json({
                    success: false,
                    message: "invalid password , try again",
                })
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
    const {accessToken , refreshToken} = await generateAccessTokenRefreshToken(user._id)

    const options = {
        httpOnle: true,     // cookies can only be modified when we use httponly and secure 
        secure: true,
    }

    return res
    .status(200)
    .cookie("accessToken",accessToken,options)
    .cookie("refreshToken",refreshToken,options)
    .json(
        new ApiResponse(
            200 , 
            {
                user:accessToken,refreshToken
            } , 
            "Login Successful"
        )
    )
}; 

export const logoutUser = async (req , res) =>{
    //remove refresh token from database
    await Register.findByIdAndUpdate(          //find and update user REfreshToken and delete it
        req.user._id,
        {
            $set:{    //set is used to update in mongoDB
                refreshToken:undefined,
            },
        },
        {
            new:true
        }
    )
    const options = {
        httpOnle: true,     // cookies can only be modified when we use httponly and secure 
        secure: true,
    }

    return res.status(200).clearCookie("accessToken" , options).clearCookie("refreshToken" . options).json(
        new ApiResponse(
            200 ,"User logged out"
        )
    )
}