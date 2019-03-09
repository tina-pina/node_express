const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index')
    res.locals = data.projects;
})

module.exports = router;