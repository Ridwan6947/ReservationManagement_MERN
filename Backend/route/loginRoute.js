import  express  from "express";
import { sendLogin } from "../controller/registerController.js";

const router = express.Router();

router.post('/loginCredential' , sendLogin);

export default router;