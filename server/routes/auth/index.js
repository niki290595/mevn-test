const express = require('express');
const Joi = require('joi');

const schema = Joi.object().keys({
    username: Joi.string().regex(/(^[a-zA-Z0-9_]+$)/).min(3).max(30).required(),
    password: Joi.string().min(6).required()
});

const router = express.Router();

router.get('/', async (req, res) => {
    res.json({
       message: "cool"
    });
});

router.post('/signup', (req, res) => {

    const result = Joi.validate(req.body, schema);

    res.json(result);
});

module.exports = router;