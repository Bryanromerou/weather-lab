const express = require('express');
const app = express();
const ejsLayouts = require('express-ejs-layouts');

app.set('view engine', 'ejs');
app.use(ejsLayouts);

app.get('/', (req, res) => {
  res.render('home');
});
app.use('/weather', require('./controllers/weatherController'));

app.listen(8000);