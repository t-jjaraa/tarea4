const express = require('express');
const hotels = require('./data/data.json');

const app = express();

// allow-cors
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.static(__dirname + '/public'));

app.get('/api/hotels', (req, res) => {
  res.json({
    hotels: hotels
  })
});

// localhost:3008/api/hotel?name=nameHotel
app.get('/api/hotel', (req, res, next) => {
  const {
    query: {
      name = "",
      stars = 0
    }
  } = req;


let selectedHotel = "";

    if(name){
      selectedHotel = hotels.filter(hotel => hotel.name === name);
    }
      
    if(stars){
      selectedHotel = hotels.filter(hotel => hotel.stars === Number(stars));
    }
  

  res.json({
    hotels: selectedHotel
  });
});

app.listen(3008, function () {
  console.log('server on port 3008');
});