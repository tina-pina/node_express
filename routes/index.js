const express = require('express');
const router = express.Router();
const { data } = require('../data/projectsData.json');
const { projects } = data;

router.get('/', (req, res) => {
    // this is what we get when we render the view.
    // res.locals = data.projects;
    // console.log(res.locals)

    res.render('index', { projects: projects })
})






module.exports = router;