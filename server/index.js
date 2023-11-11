const express = require('express');
const router = require('./routes/routes');
const app = express();
const port = 5000; // Choose any available port

// Middleware to parse JSON requests
app.use(express.json());
app.use('/api',router);

// Example route to get a random joke
// app.get('/get', (req, res) => {
//   res.json({ msg: 'get page' });
// });

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
