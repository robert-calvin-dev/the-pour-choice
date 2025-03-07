// myra-chatbot/backend/controllers/chatbotController.js
import openai from "../config/openaiConfig.js";
import Session from "../models/session.js";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

// Function to get chatbot response
const getChatResponse = async (req, res) => {
    const { sessionId, userMessage } = req.body;
    
    let session = await Session.findOne({ sessionId });
    if (!session) {
        session = await Session.create({ sessionId });
    }
    
    try {
        const aiResponse = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",

            messages: [{ role: "system", content: "You are Myra, a sassy wine expert. Be humorous and fun in responses." },
                       { role: "user", content: userMessage }],
            max_tokens: 100
        });
        
        let botResponse = aiResponse.choices[0].message.content.trim();
        res.json({ response: botResponse });
    } catch (error) {
        console.error("Error generating chatbot response:", error);
        res.status(500).json({ response: "Oops, Myra is having a bad day. Try again later!" });
    }
};

export { getChatResponse };
