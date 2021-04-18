const Router = require('express');
const MiddlewareCreator = require('./middleware.js');
const controller = require('./controller.js');

const router = Router();

router.get('/', 
  MiddlewareCreator(controller.getList),
  (req, res) => {
    res.send(res.locals.list);
  }
);

module.exports = router;
