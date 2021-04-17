const express = require('express');
const controller = require('./Controller');

const View = express.Router();

View.get('', async(_, res) => {
  const flowersList = await controller.getAllItems();
  res.render('view', {"list": flowersList.result});
})

module.exports = View;