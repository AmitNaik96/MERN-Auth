import express from "express";
import { authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile } from "../controllers/userController.js"; //import contoller(logic)
const router = express.Router();

import { protect } from "../middleware/authMiddleware.js"; // to protect routes!

//route api/users/auth   api/users in connected to the whole file
// router.post('/auth',authUser);


//connect all controllers(logic) to route
router.post('/',registerUser);
router.post('/auth',authUser);
router.post('/logout',logoutUser);

//PRIVATE -> protected routes
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile);

export default router;