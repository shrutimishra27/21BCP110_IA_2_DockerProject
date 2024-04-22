const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/my-app', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Define a simple schema for messages
const messageSchema = new mongoose.Schema({
    message: String
});

const Message = mongoose.model('Message', messageSchema);

// API endpoint to get a message
app.get('/api/message', async (req, res) => {
    try {
        const message = await Message.findOne();
        res.json({ message: message ? message.message : 'No message found' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
