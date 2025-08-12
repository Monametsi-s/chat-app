import express from "express";
import authRoute from "./routes/auth.route.js";
import dotenv from "dotenv";
import { connectDB} from "./lib/db.js";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import cors from "cors"

import cookieParser from "cookie-parser";
dotenv.config();

const app = express();
// app.use(express.json());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
})
);
const PORT = process.env.PORT
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
    connectDB();
})