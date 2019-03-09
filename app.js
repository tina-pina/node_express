const express = require('express');

const app = express();

//variables to require the necessary dependencies



//middleware
//serve the static files located in the public folder
app.use('/static', express.static('public'));
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



app.listen(3000, () => {
    console.log('the application is running on port 3000')
});