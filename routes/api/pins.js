const express = require('express');
const router = express.Router();
const passport = require('passport');
const Pin = require('../../models/Pin');
const validatePinInput = require('../../validation/pins');
// const S3 = require('react-aws-s3');
const keys = require('../../config/keys');
const AWS = require('aws-sdk');
const fs = require('fs');
const uuidv4 = require ('uuid').v4;

router.get('/', (req, res) => {
    Pin.find()
        .sort({ date: -1 })
        .then(pins => res.json(pins))
        .catch(err => res.status(404).json({ nopinsfound: 'No pins found' }));
});

router.delete('/:id',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const pinId = req.params.id
        
        Pin.findByIdAndDelete(pinId)
            .then((err, pin) =>{
                if (err) {
                    return res.json(err)
                } else {
                    return res.json({msg: 'Pin deleted'})
                }
            }
        ) 
    }
)

router.patch('/:id',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const { errors, isValid } = validatePinInput(req.body);
        if (!isValid) {
            return res.status(400).json(errors);
        };

        Pin.findByIdAndUpdate(
            req.params.id,
            {
                category: req.body.category,
                description: req.body.description
            },
            {new: true},
            function (err, success) {
                if (err) {
                    console.log(err);
                } else {
                    return res.json(success)
                }
            }
        )
    }
)

router.get('/:id', (req, res) => {
    Pin.findById(req.params.id)
        .then(pin => res.json(pin))
        .catch(err =>
            res.status(404).json({ nopinfound: 'No pin found with that ID' })
        );
});

router.post('/',
    passport.authenticate('jwt', { session: false }),
    async (req, res) => {
        const { errors, isValid } = validatePinInput(req.body);

        if (!isValid) {
            return res.status(400).json(errors);
        }
        
        let awsURL = '';

        if (req.body.imageFile) {
            const buffer = Buffer.from(req.body.imageFile.replace(/^data:image\/\w+;base64,/, ""), 'base64');
            const s3 = new AWS.S3({
                accessKeyId: keys.S3accessKeyId,
                secretAccessKey: keys.S3secretAccessKey,
              })
            const uploadedImage = await s3.upload({
                Bucket: "theft-deflect-pro",
                Key: uuidv4(),
                Body: buffer,
                ContentEncoding: 'base64',
                ContentType: 'image/jpeg'
            }).promise()
            awsURL = uploadedImage.Location;
        }

        const newPin = new Pin({
            user: req.user.id,
            lat: req.body.lat,
            long: req.body.long,
            category: req.body.category,
            description: req.body.description,
            imageUrl: awsURL
        });

        return newPin.save().then(pin => res.json(pin));

    }
);

module.exports = router;