require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const cors = require('cors');  // Import the cors module

const app = express();

// Middleware
app.use(cors());  // Use the cors middleware
app.use(bodyParser.json());

app.post('/chat', async (req, res) => {
    console.log("Received a request at /chat with body:", req.body);
    const userMessage = req.body.message;

    try {
        const response = await fetch("https://api.openai.com/v1/engines/davinci/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                prompt: userMessage,
                max_tokens: 150
            })
        });

        const data = await response.json();

        res.json({ message: data.choices[0].text.trim() });

    } catch (error) {
        console.error("Error calling OpenAI API:", error);
        res.status(500).json({ error: "Failed to fetch response from OpenAI." });
    }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
