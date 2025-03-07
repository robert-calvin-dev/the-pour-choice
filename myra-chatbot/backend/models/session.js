// myra-chatbot/backend/models/session.js
const mongoose = require("mongoose");

const sessionSchema = new mongoose.Schema({
    sessionId: { type: String, required: true, unique: true },
    userPreferences: { type: Object, default: {} },
    createdAt: { type: Date, expires: 1800, default: Date.now } // Auto-delete after 30 mins
});

module.exports = mongoose.model("Session", sessionSchema);