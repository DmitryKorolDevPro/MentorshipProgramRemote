const express = require('express');
const router = require('./router.js');

const app = express();
const port = 3333;

app.use('/', router);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
