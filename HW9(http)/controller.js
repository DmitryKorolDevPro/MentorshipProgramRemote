const model = require('./model.js');
const model2 = require('./model2.js');

class Controller {

  async getList(req, res) {
    const someIdFromReq = req.userId;
    const list = await model.getList();
    const extraData = await model2.getExtraDataById(someIdFromReq);
    // If we work with a view, 
    // we can generate a page based on the data from the model 
    // and send it to the router already
    res.locals.list = [...list, ...extraData];
  }

}

module.exports = new Controller();