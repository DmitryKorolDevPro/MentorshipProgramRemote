const express = require('express');
const controller = require('./Controller');

const View = express.Router();

View.get('', async(_, res) => {
  const flowersList = await controller.getItems();
  res.render('view', {"list": flowersList});
})

module.exports = View;