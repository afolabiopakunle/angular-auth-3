const express = require('express');
const jwt = require('jsonwebtoken');

const router = express.Router();
const User = require('../models/user');
const Event = require('../models/event');
const PrivateEvent = require('../models/privateEvent');

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
                    const payload = { subject: newUser._id }
                    const token = jwt.sign(payload, 'mySecretKey')
                    res.status(200).send({token})
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
            const payload = { subject: foundUser._id }
            const token = jwt.sign(payload, 'mySecretKey');
            res.status(200).send({token})
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

router.post('/private-event', (req, res) => {
    const eventData = req.body;
    const event = new PrivateEvent(eventData);
    event.save((err, savedEvent) => {
        if(err) {
            console.log(err)
        } else {
            res.status(200).send('Private event saved')
        }
    })
})

router.get('/events', (req, res) => {
    Event.find({},(err, foundEvents) => {
        if(err) {
            console.log(err)
        } else {
            res.status(200).json(foundEvents)
        }
    })
})

router.get('/private-events', (req, res) => {
    PrivateEvent.find({}, (err, foundPrivateEvents) => {
        if(err) {
            console.log(err)
        } else {
            res.status(200).json(foundPrivateEvents)
        }
    })
})

module.exports = router;


