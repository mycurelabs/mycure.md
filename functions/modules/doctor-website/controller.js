const getDoctorWebsite = require('../../mycure/doctor-website');

module = module.exports = (req, res) => {
  const url = req.params.url;
  getDoctorWebsite(url)
    .then(doctor => {
      if (!doctor) {
        res.render('404');
        return;
      }
      const data = doctor;
      data._data = doctor;
      console.log(data);
      console.log(data.$populated);
      res.render('index', {data});
    })
    .catch(e => {
      res.render('500');
    });
};
