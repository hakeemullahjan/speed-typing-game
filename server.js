const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

require('dotenv/config');

app.use(express.json());
app.use(cors());
app.use(bodyParser());

mongoose.connect(
  process.env.DB_CONNECTION,
  {useNewUrlParser: true},
  console.log('Connected to DB!'),
);


app.listen(3000,console.log('Server is listening!'));
