const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/', (req, res) => {
    res.send('API Page')
})

router.post('/register', (req, res) => {
    const userData = req.body;
    const user = new User(userData);
    User.findOne({email: userData.email}, (err, foundUser) => {
        if(err) {
            console.log(err)
        } else if(foundUser) {
            res.status(401).send('user already exists')
        } else {
            user.save((err, newUser) => {
                if (err) {
                    console.log("ERROR", err)
                } else {
                    res.status(200).send(newUser)
                }
            })
        }
    })

})

router.post('/login', (req, res) => {
    const userData = req.body;
    const user = new User(userData);
    User.findOne({email: userData.email}, (err, foundUser) => {
        if(err) {
            console.log(err);
        } else if(!foundUser) {
            res.status(401).send('invalid email address')
        } else if(foundUser.password !== userData.password) {
            res.status(401).send('password is wrong');
        } else {
            res.status(200).send(`Welcome ${userData.email}`)
        }
    })
})
module.exports = router;


