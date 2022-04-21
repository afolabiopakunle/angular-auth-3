const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Event = require('../models/event');

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

router.post('/event', (req, res) => {
    const eventData = req.body;
    const event = new Event(eventData);
    event.save((err, savedEvent) => {
        if(err) {
            console.log(err)
        } else {
            res.status(200).send('Event saved')
        }
    })
})

router.get('/events', (req, res) => {
    Event.find({},(err, foundEvents) => {
        if(err) {
            console.log(err)
        } else {
            res.status(200).send(foundEvents)
        }
    })
})
module.exports = router;


