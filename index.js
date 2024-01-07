// Import required modules
const express = require('express');
const fs = require('fs');
const path = require('path');

// Create an Express application
const app = express();
const port = 3000; // Change this to your desired port

// Define a middleware to serve static files (HTML, CSS, JS, images, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Define a route to serve HTML content from a file
app.get('/blog/1', (req, res) => {
    const filePath = path.join(__dirname, 'public', 'blog1.html'); // Update the file path
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            // Handle the error (e.g., file not found)
            res.status(404).send('File not found');
        } else {
            // Send the file content as the response
            res.send(data);
        }
    });
});

app.get('/blog/2', (req, res) => {
    const filePath = path.join(__dirname, 'public', 'blog2.html'); // Update the file path
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            // Handle the error (e.g., file not found)
            res.status(404).send('File not found');
        } else {
            // Send the file content as the response
            res.send(data);
        }
    });
});

app.get('/', (req, res) => {
    // const filePath = path.join(__dirname, 'public', 'blog2.html'); // Update the file path
    fs.readFile('public/index.html', 'utf8', (err, data) => {
        if (err) {
            // Handle the error (e.g., file not found)
            res.status(404).send('File not found');
        } else {
            // Send the file content as the response
            res.send(data);
        }
    });
});


// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});