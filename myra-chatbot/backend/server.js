// myra-chatbot/backend/server.js
import express from "express";
import cors from "cors";
import chatbotRoutes from "./routes/chatbotRoutes.js";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/chatbot", chatbotRoutes);

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("🍷 Connected to MongoDB - Myra is ready to sass!");
    app.listen(PORT, () => console.log(`🔥 Myra is sassing people on port ${PORT}`));
})
.catch(err => {
    console.error("❌ MongoDB Connection Error:", err);
    process.exit(1);
});