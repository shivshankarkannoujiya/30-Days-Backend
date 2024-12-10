import { Router } from "express";
import { signupUser } from "../controllers/user.controllers.js";

const router = Router()

router.route("/signup").post(signupUser)


export default router   