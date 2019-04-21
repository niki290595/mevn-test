const express = require('express');

const router = express.Router();

router.get('/', async (req, res) => {
    res.json({
       message: "cool"
    });
});

router.post('/signup', (req, res) => {

    res.json(req.body);
});

module.exports = router;