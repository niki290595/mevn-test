const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

//get post
router.route('/posts/')
    .get(async (req, res) => {
        const posts = await loadPostCollection();
        res.send(await posts.find({}).toArray());
    })
    .post(async  (req, res) => {
        const posts = await loadPostCollection();
        await posts.insertOne({
            text: req.body.text,
            createdAt: new Date()
        });
        res.status(201).send();
    });
router.route('/posts/:id')
    //.get()
    //.put()
    .delete(async (req, res) => {
        const posts = await loadPostCollection();
        await posts.deleteOne({_id: new mongodb.ObjectID(req.params.id)});
        res.status(200).send();
    });

//add post

//delete post

async function loadPostCollection() {
    const client = await mongodb.MongoClient.connect(
        'mongodb+srv://niki:OREdqsFrle0FKgRP@cluster0-kfimm.mongodb.net/test?retryWrites=true', {
            useNewUrlParser: true
        });

    return client.db('vue_express').collection('posts')
}

module.exports = router;