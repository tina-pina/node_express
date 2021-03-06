const express = require('express');
const app = express();

/* use pug as templete engine */
app.set('view engine', 'pug');

/* serve the static files located in the public folder */
app.use('/static', express.static('public'));

/* set routes */
const mainRoutes = require('./routes');
const aboutRoutes = require('./routes/about');
const projectRoutes = require('./routes/project')

app.use(mainRoutes);
app.use('/about', aboutRoutes);
app.use('/project', projectRoutes);

app.use((req, res, next) => {
    const err = new Error('Not found');
    err.status = 404;
    next(err);
})

/* error handler */
app.use((err, req, res, next) => {
    /* res.locals.error => use error object in pug template */
    console.log(`User trying to access ${req.originalUrl} and route is ${err.message}`)
    res.locals.error = err;
    res.status(err.status);
    res.render('error')
})

app.listen(3000, () => {
    console.log('the application is running on port 3000')
});
