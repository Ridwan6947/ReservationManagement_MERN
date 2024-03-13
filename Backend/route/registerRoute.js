import { sendRegister } from "../controller/registerController.js";
import  express  from "express";

const router = express.Router();

router.post('/registerUser' , sendRegister)

export default router;