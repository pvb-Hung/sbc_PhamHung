const express = require('express');
var bodyParser = require('body-parser')

const API_V1 = require('./routes/v1/index');
const app = express();
const errorHandle = require('./middleware/errorHandler');

const port = 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// sử dụng app.use để định nghĩa routes trong server
app.use('/v1', API_V1);
app.use(errorHandle);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});