/**
 * friday29jul-app-prac 
 * v0.01 Not Released
 * (c) nzwebapps & richard clark (2022), all rights reserved.
 */

const express = require('express');
const app = express();
const config = require('config');
const modelDebug = require('debug')('app:model');
const viewDebug = require('debug')('app:view');
const controllersDebug = require('debug')('app:controller');
const devOnlyDebug = require('debug')('app:devOnlyDebug');
const { urlencoded } = require('express');
const path = require('path');
const morgan = require('morgan');
const dateController = require('./controllers/TimeDate');
const host = config.get('server.host');
const port = config.get('server.port');
const applicationName = config.get('application.name');
const timeStamp = dateController.getTimeStamp();

// view engine views\pages\index.html

app.set('view engine', 'ejs');

app.get('/', ( req, res) => {
    // res.render('index', { applicationName, timeStamp });
    res.render('pages/index', { applicationName , timeStamp})
});

// middleware
// handle json and req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
// use path to set up folder to serve static content
app.use(express.static(path.join(__dirname, "public")));


//security
app.use(morgan('tiny'));

// start server


app.listen(port, host, () => {
    const infoString = `App "${applicationName}" | Listening on port ${port} of host ${host} | The current timeStamp : ${timeStamp}`
    console.log(infoString);
    devOnlyDebug(infoString);
});