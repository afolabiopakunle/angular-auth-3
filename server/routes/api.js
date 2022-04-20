const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/', (req, res) => {
    res.send('API Page')
})

router.post('/register', (req, res) => {
    const userData = req.body;
    const user = new User(userData);
    user.save((err, newUser) => {
        if(err) {
            console.log("ERROR",err)
        } else {
            res.status(200).send(newUser)
        }
    })
})
module.exports = router;


