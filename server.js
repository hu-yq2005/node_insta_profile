// Install Express before running: npm install express
const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Serve static files from the 'public' folder
app.use(express.static('public'));

// Route for profile page
app.get('/profile', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'profile.html'));
});

// Route for home page
app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'home.html'));
});

// Default route redirects to home
app.get('/', (req, res) => {
    res.redirect('/home');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
