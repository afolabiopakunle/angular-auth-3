const express = require('express');
const app = express();

const api = require('./routes/api');

const PORT = 3000;

app.use('/api', api);

app.get('/', (req, res) => {
    res.send('Home page');
})


app.listen(PORT, () => console.log('app running on port ' + PORT))
