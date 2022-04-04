const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const validatePinInput = require('../../validation/pins')
const Pin = require('../../models/Pin');

router.get('/', (req, res) => {
    Pin.find()
        .then(pins => res.json(pins))
        .catch(err => res.status(404).json({ nopinsfound: 'No pins found' }));
});

router.post('/',
    (req, res) => {
        const { errors, isValid } = validatePinInput(req.body);

        if (!isValid) {
            return res.status(400).json(errors)
        }

        const newPin = new Pin({
            user: req.user.id,
            lat: req.body.lat,
            long: req.body.long,
            category: req.body.category,
            description: req.body.description,
        })

        newPin.save().then(pin => res.json(pin))
    }
);

module.exports = router;