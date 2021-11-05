const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config({ path: './config/.env' });

const items = require('./routes/api/items');

const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());

const mongoURI = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.fmalu.mongodb.net/mern-shopping-list?retryWrites=true&w=majority`;

mongoose
    .connect(mongoURI)
    .then(() => console.log('MongoDB connected'))
    .catch(e => console.log(e));

// Use Routes
app.use('/api/items', items);

// Serve static assets in PRODUCTION
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server started on ${port}`));