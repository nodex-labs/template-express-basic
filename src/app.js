const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(cors({}));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

module.exports = app;
