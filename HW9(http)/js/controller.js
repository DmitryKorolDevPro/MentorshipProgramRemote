const model = require('./model.js');
class Controller {
    getAllItems() {
        return model.getAllinFiles();
    }


}

const controller = new Controller();
module.exports = controller;