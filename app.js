

//variables to require the necessary dependencies
const express = require('express');

const app = express();

//middleware
const bodyParser = require('body-parser');

//serve the static files located in the public folder
app.use('/static', express.static('public'));
app.use(express.static('public/img/'));
//
app.set('view engine', 'pug');

// app.get('/', (req, res) => {
//     res.render('project')
// })


//set routes
const mainRoutes = require('./routes');
const aboutRoutes = require('./routes/about');
const projectRoutes = require('./routes/project')

app.use(mainRoutes);
app.use('/about', aboutRoutes);
app.use('/project', projectRoutes);

//middleware which will be responsible for creating error object and handing off to the error handler
app.use((req, res, next) => {
    const err = new Error('Not found');
    err.status = 404;
    next(err);
})

app.use((err, req, res, next) => {
    //error handler 
    //receive error
    res.locals.error = err;
    res.status(err.status);
    res.render('error')
})



app.listen(3000, () => {
    console.log('the application is running on port 3000')
});