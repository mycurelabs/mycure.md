const functions = require('firebase-functions');

exports.doctorWebsite = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
});
