// myra-chatbot/frontend/src/components/ChatbotUI.js
import React, { useState } from "react";
import axios from "axios";
import "./ChatbotUI.css";

const ChatbotUI = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const sessionId = "myra-session";

    const sendMessage = async () => {
        if (!input.trim()) return;

        const newMessages = [...messages, { sender: "user", text: input }];
        setMessages(newMessages);
        setInput("");

        try {
            const response = await axios.post("http://localhost:5000/api/chatbot", {
                sessionId,
                userMessage: input
            });
            
            setMessages([...newMessages, { sender: "myra", text: response.data.response }]);
        } catch (error) {
            setMessages([...newMessages, { sender: "myra", text: "Oops, Myra is having a bad day. Try again later!" }]);
        }
    };

    return (
        <div className="chatbot-container">
            <div className="chatbot-messages">
                {messages.map((msg, index) => (
                    <div key={index} className={`message ${msg.sender}`}>
                        <span>{msg.text}</span>
                    </div>
                ))}
            </div>
            <div className="chatbot-input">
                <input 
                    type="text" 
                    value={input} 
                    onChange={(e) => setInput(e.target.value)} 
                    placeholder="Ask Myra about wine..." 
                />
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
};

export default ChatbotUI;
