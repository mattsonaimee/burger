const express = require('express');

const PORT = process.env.PORT || 8080;
var app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');







app.listen(PORT, () =>
  console.log(`Server listening on: http://localhost:${PORT}`)
);

