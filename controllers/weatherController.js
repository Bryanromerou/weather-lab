const express = require('express');
const router = express.Router();
const weather = require('weather-js');

router.get('/', (req, res) => {
  console.log(req.query.zipcode);//First we console log out to see if what we are looking for is correct
  const userZipcode = req.query.zipcode;//Then store it to a variable so we can query the location

  weather.find({search: userZipcode, degreeType: 'F'}, function(err, result) {
    if(err) console.log(err);

    // console.log(result[0]);
    // console.log(result[0].forecast);

    const obj = {
      location: result[0].location.name,
      temp: result[0].current.temperature,
      forecast: result[0].forecast,
    }
   
    res.render('weather',obj);
  });
});

module.exports = router;