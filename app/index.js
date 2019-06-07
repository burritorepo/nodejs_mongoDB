const express = require('express');
const app = express();
const db = require('./models/db');
const Router = require('./controllers/routes');
const port = process.env.PORT || 3000; // Heroku will use the first one, that's why we should define our port like this

app.use('/api', Router);

app.listen(port);
console.log(`Running on port ${port}`);