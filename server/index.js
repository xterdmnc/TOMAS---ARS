const express = require('express');
const cors = require('cors');
const app = express();
const authRoutes = require('./auth.routes'); // Assuming auth.routes is correctly defined
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3004;
const HOST = '192.168.10.41';

app.use(express.json());
app.use(cors());

// Corrected app.listen syntax
app.listen(PORT, HOST, () => {
    console.log(`Listening: http://${HOST}:${PORT}`);
});

mongoose.connect('mongodb://localhost:27017/ARS', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => {
    console.log('Connected to MongoDB');
  }).catch((err) => {
    console.error('Failed to connect to MongoDB', err);
  });
  
// Corrected app.use syntax
app.use('/auth', authRoutes); // Assuming '/register' is the path you want to mount the register route on
