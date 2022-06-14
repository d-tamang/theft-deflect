const express = require('express');
const router = express.Router();
const passport = require('passport');
const Pin = require('../../models/Pin');
const validatePinInput = require('../../validation/pins');
const S3 = require('react-aws-s3');

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
    (req, res) => {
        const { errors, isValid } = validatePinInput(req.body);

        if (!isValid) {
            return res.status(400).json(errors);
        }

        const newPin = new Pin({
            user: req.user.id,
            lat: req.body.lat,
            long: req.body.long,
            category: req.body.category,
            description: req.body.description,
        });
        return newPin.save().then(pin => res.json(pin));

        // const config = {
        //     bucketName: 'mern-project-pro',
        //     dirName: 'testing',
        //     region: 'us-west-1',
        //     accessKeyId: '',
        //     secretAccessKey: '',
        // }
        // const ReactS3Client = new S3(config);
        // ReactS3Client
        //     .uploadFile(req.body.imageFile, req.body.imageFile.name)
        //     .then(data => {
        //         console.log("data")

        //     const newPin = new Pin({
        //         user: req.user.id,
        //         lat: req.body.lat,
        //         long: req.body.long,
        //         category: req.body.category,
        //         description: req.body.description,
        //     });
        //     return newPin.save().then(pin => res.json(pin));
        // })
        // .catch(err => {
        //     console.log("err")
        //     return res.json({ err: "errors" })
            // const reader = err.body.getReader()
            // reader.read().then(resp => { 
            //     return res.json(typeof S3)
            //     return new TextDecoder().decode(resp.value)
            // })
        // })

    }
);

module.exports = router;