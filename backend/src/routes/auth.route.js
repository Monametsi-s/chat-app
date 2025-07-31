import express from "express";
import {  signup, login, logout } from "../controllers/auth.controller.js";
import { updateProfile } from "../../../../../Users/seelem/OneDrive - Botswana Telecommunications Company/Documents/SoftwareEngineering/fullstack-chat-app/backend/src/controllers/auth.controller.js";


const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.put("/update-profile", protectRoute, updateProfile);


export default router;