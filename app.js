const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

//Import routes
const postsRoute=require('./Routes/posts');

//middleware
app.use(cors());
app.use(express.json());
app.use('/posts',postsRoute);

//Routes
app.get('/',(req,res) => {
    res.send('We are at HOME');
});

//Connect to Db
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true },()=> console.log('Connected to db'));

//How to start listening for requests
app.listen(3000);