const getDoctorWebsite = require('../../mycure/doctor-website');

module = module.exports = (req, res) => {
  const url = req.params.url;
  getDoctorWebsite(url)
    .then(doctor => {
      res.render('index', doctor);
    })
    .catch(e => {
      res.status(500).send(e);
    });
}