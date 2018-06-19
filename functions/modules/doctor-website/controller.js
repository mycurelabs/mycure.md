const getDoctorWebsite = require('../../mycure/doctor-website');

module = module.exports = (req, res) => {
  getDoctorWebsite()
    .then(doctor => {
      const data = {
        title: req.params.url,
        name: doctor.name
      }
      res.render('index', data);
    })
    .catch(e => {
      res.status(500).send('NOT OK');
    });
}