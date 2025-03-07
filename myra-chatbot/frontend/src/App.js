// myra-chatbot/frontend/src/App.js
import React from "react";
import ChatbotUI from "./components/ChatbotUI";
import "./App.css";

function App() {
    return (
        <div className="app-container">
            <h1>Myra - The Sassy Wine Chatbot 🍷</h1>
            <ChatbotUI />
        </div>
    );
}

export default App;