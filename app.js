const express = require('express');
const app = express();
const port = 3000; // You can change this to any port you prefer

// Middleware to serve static files like HTML, CSS, images, etc.
app.use(express.static('public')); // Make sure to store your static files in a folder named 'public'

// Home route
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/home.html'); // Replace with the path to your index/home page
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
