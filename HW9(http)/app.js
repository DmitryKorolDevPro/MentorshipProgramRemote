const express = require('express');
const app = express();
const PORT = process.env.PORT || 4200;

const controller = require('./public/scripts/Controller.js');
const middleware = require('./public/scripts/Middleware.js');
const viewRouter = require('./public/scripts/View');

app.set('views', './public/views');
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use('/', viewRouter);

app.get('/api/flowers', middleware.handleRequest, async (req, res) => {
  let response = null;
  
  if (req.query.id !== undefined) {
    response = await controller.getOneItem(req.query.id);
  } else {
    response = await controller.getAllItems();
  }

  res.status(response.statusCode).send(response.result);
});

app.post('/api/flowers', middleware.handleRequest, async (req, res) => {
  const response = await controller.addItem(req.query);
  res.status(response.statusCode).send(response.result);
});

app.put('/api/flowers', middleware.handleRequest, async (req, res) => {
  const response = await controller.updateItem(req.query);
  res.status(response.statusCode).send(response.result);
})

app.delete('/api/flowers', middleware.handleRequest, async (req, res) => {
  const response = await controller.deleteItem(req.query.id);
  res.status(response.statusCode).send(response.result);
});

app.listen(PORT, () => {
  console.info(`Started a server on port: ${PORT}`)
})