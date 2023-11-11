const express = require('express');
const router = require('./routes/routes');
const { default: mongoose } = require('mongoose');
const app = express();
const port = 5000; // Choose any available port

// Middleware to parse JSON requests
app.use(express.json());
app.use('/api',router);

// Example route to get a random joke
// app.get('/get', (req, res) => {
//   res.json({ msg: 'get page' });
// });

const uri = 'mongodb+srv://Coding_Deb:Coding_Deb_1234@cluster0.amhy0tv.mongodb.net/';
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('Connected to MongoDB Atlas');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
