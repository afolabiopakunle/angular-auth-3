const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());

const mongoose = require('mongoose');
const db = 'mongodb+srv://afolabi:8899fifafa@cluster0.bwrba.mongodb.net/eventsdb?retryWrites=true&w=majority';
const api = require('./routes/api');

const PORT = 3000;

app.use('/api', api);

app.get('/', (req, res) => {
    res.send('Home page');
})

mongoose.connect(db, (err) => err ? console.log(err) : console.log('Successfully connected to mongoDB'))

app.listen(PORT, () => console.log('app running on port ' + PORT))
