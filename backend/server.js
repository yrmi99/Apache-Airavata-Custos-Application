const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

// Enable CORS for all routes
app.use(cors());

// Parse JSON bodies
app.use(express.json());

// Route to handle content addition
app.post('/api/add-content', (req, res) => {
    try {
        // Here you would typically handle database operations
        // For this example, we'll just send a success response
        res.json({ 
            success: true, 
            message: 'Content Added' 
        });
    } catch (error) {
        res.status(500).json({ 
            success: false, 
            message: 'Error adding content' 
        });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});