const express = require('express');
const router = express.Router();

//data, or "locals", as an object that contains data to be passed to the Pug template
const { data } = require('../data/projectsData.json');
const { projects } = data;

router.get('/:id', (req, res) => {
    // res.locals = data;
    res.render('project', {
        project_img: projects[req.params.id].image_urls,
        project_name: projects[req.params.id].project_name,
        project_description: projects[req.params.id].description,
        project_technologies: projects[req.params.id].technologies,
        project_netlify: projects[req.params.id].live_link,
        project_github: projects[req.params.id].github_link,
    })
})

module.exports = router; 