import express from "express";
import authRoutes from "./routes/auth.route.js";
import postRoutes from "./routes/post.route.js";
import dotenv from "dotenv"
import connectDb from "./config/db";
dotenv.config()

connectDb()

const app = express();

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/post", postRoutes);
app.use("/api/checkout", postRoutes);
app.use("/api/profile", postRoutes);
app.use("/api/post", postRoutes);



app.listen(5000, () => {
    console.log("Server running on port 5000");
});