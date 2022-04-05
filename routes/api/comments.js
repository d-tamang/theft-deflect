const express = require('express');
const router = express.Router();
const passport = require('passport');

const validateCommentInput = require('../../validation/comments');
const Comment = require('../../models/Comment');

router.get('/', (req, res) => {
    Comment.find()
        .sort({ date: -1})
        .then(comments => res.json(comments))
        .catch(err => res.status(400).json(err));
});

router.get('/:id', (req, res) => {
    Comment.findById(req.params.id)
        .then(comment => res.json(comment))
        .catch(err => res.status(400).json(err));
});

router.post('/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const { errors, isValid } = validateCommentInput(req.body);

        if (!isValid) {
            return res.status(400).json(errors)
        }

        const newComment = new Comment({
            user: req.user.id,
            pin: req.pin.id,
            text: req.body.text
        })

        newComment.save().then(comment => res.json(comment))
    }
);

module.exports = router;