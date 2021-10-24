const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
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

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server started on ${port}`));