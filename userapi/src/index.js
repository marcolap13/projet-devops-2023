const express = require('express');
const userRouter = require('./routes/user');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port =  3000;

const db = require('./dbClient');

db.on('error', (err) => {
  console.error('Error using Redis client:', err);
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '..', 'public')));

app.use('/user', userRouter);

const server = app.listen(port, (err) => {
    if (err) throw err;
    console.log('Server listening on port ' + port);
});

module.exports = server;
