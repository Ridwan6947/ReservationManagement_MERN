import  express  from "express";
import { loginUser, logoutUser} from "../controller/registerController.js";
import { verifyJWT } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route('/login').post(loginUser);

//secure Routes
router.route('/logout').post(verifyJWT ,logoutUser)

export default router;