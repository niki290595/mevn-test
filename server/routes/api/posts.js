const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

//get post
router.route('/posts/')
    .get((req, res) => {
        res.send('hello');
    });

//add post

//delete post


module.exports = router;