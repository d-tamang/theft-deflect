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

router.get('/pins/:pinId', (req, res) => {
    Comment.find({pin: req.params.pinId})
        .then(comments => res.json(comments))
        .catch(err =>
            res.status(404).json({ nocommentsfound: 'No comments found from that pin' }
        )
    );
});

router.patch('/:id', 
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const {errors, isValid} = validateCommentInput(req.body);
        if (!isValid) {
            return res.status(400).json(errors);
        }
        
        Comment.findByIdAndUpdate(
            req.params.id,
            {
                text: req.body.text,
            },
            {new: true},
            function (err, success) {
                if (err) {
                    console.log(err)
                } else {
                    return res.json(success)
                }
            }
        )
    }
)

router.post('/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const { errors, isValid } = validateCommentInput(req.body);
        if (!isValid) {
            return res.status(400).json(errors)
        }
        const newComment = new Comment({
            user: req.body.user,
            pin: req.body.pin,
            text: req.body.text
        })

        newComment.save().then(comment => res.json(comment))
    }
);

router.delete('/:id',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const commentId = req.params.id
        Comment.findByIdAndDelete(commentId)
            .then((err, comment) =>{
                if (err) {
                    return res.json(err)
                } else {
                    return res.json({msg: 'Comment deleted'})
                }
            }
        ) 
    }
)

module.exports = router;