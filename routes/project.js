const express = require('express');
const router = express.Router();

// data, or "locals", as an object that contains data to be passed to the Pug template
const { data } = require('../data/data.json');
const { projects } = data;

/* middleware: error handler */
router.use((req, res, next) => {
    next();
})

/* validate id param */
router.param('id', (req, res, next, id) => {
    /* validate and make id available for router.get */
    if (0 <= id && id < projects.length) req.id = id
    next()
})

// routes for single project`s ids -> data rendered passed to project.pug
router.get('/:id', (req, res) => {
    if (req.id) {
        res.render('project', {
            project_img: projects[req.params.id].image_urls.slice(1),
            project_name: projects[req.params.id].project_name,
            project_description: projects[req.params.id].description,
            project_technologies: projects[req.params.id].technologies,
            project_live: projects[req.params.id].live_link,
            project_github: projects[req.params.id].github_link,
        })
    } else {
        res.status(400)
        res.send('project not found')
    }
})

module.exports = router; 