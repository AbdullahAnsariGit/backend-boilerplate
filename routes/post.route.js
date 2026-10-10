import express from "express"
import addpost from "../controllers/auth.controller"
import authMiddleware from "../middlewares/user.middlewares";

const router = express.Router();

router.post("/add-post", authMiddleware, addpost);

export default router;