app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
require('pg'); // explicitly require the "pg" module
const Sequelize = require('sequelize');