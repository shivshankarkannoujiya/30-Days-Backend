import { Router } from "express";
import { signupUser, singinUser } from "../controllers/user.cntrollers.js";

const router = Router();
router.route("/signup").post(signupUser);
router.route("/signin").post(singinUser);

export default router;
