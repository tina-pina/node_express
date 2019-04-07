const express = require('express');
const router = express.Router();
const { data } = require('../data/projectsData.json');

// data passed to index.pug
router.get('/', (req, res) => {
    res.render('index', { projects: data.projects })
})

module.exports = router;
