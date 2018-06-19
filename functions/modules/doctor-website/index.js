const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const mustacheExpress = require('mustache-express');
const getDoctorWebsite = require('./controller');

const app = express();
app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use(cors({ origin: true }));
app.get('/:url', getDoctorWebsite);

exports.doctorWebsite = functions.https.onRequest(app);