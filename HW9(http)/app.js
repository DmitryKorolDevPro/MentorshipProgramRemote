const express = require('express');
const middleware = require('./public/scripts/Middleware.js');
const viewRouter = require('./public/scripts/View');

const app = express();
const PORT = process.env.PORT || 4200;

app.set('views', './public/views');
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use('/', viewRouter);

app.get('/api/flowers', middleware.get, (req, res) => {
  res.status(200).send(req.response);
});

app.post('/api/flowers', middleware.post, async (_, res) => {
  res.status(201).send('Created.\nItem was successfully created.');
});

app.put('/api/flowers', middleware.put, async (_, res) => {
  res.status(200).send('OK.\nItem was successfully updated.');
})

app.delete('/api/flowers', middleware.delete, async (_, res) => {
  res.status(200).send('OK.\nItem was successfully deleted.');
});

app.listen(PORT, () => {
  console.info(`Started a server on port: ${PORT}`)
})