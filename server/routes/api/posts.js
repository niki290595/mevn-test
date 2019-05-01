const express = require('express');
const PostModel = require('../../models/post.model');

const router = express.Router();

router.route('/')
    .get(async (req, res) => {
      res.json(await PostModel.find({}));
    })
    .post(async  (req, res) => {
      let model = new PostModel({
        text: req.body.text
      });
      await model.save();
      res.status(201).send();
    });

router.route('/:id')
    .get(async (req, res) => {
      res.json(await PostModel.findById(req.params.id));
    })
    .delete(async (req, res) => {
      await PostModel.deleteOne({_id: req.params.id});
      res.status(200).send();
    });

module.exports = router;