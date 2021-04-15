const controller = require('./Controller');

class Middleware {
  async get(req, res, next) {
    let id = req.query.id;

    if (id === undefined) {
      req.response = await controller.getAllItems();
      return next();
    }
  
    id = parseInt(id);

    if (isNaN(id)) {
      return res.status(400).send('Type of ID must be a number.');
    }
  
    req.response = await controller.getOneItem(id);

    if (req.response === undefined) {
      return res.status(404).send('Not Found.\nItem was not found.');
    }
  
    if (req.response.length === 0) {
      return res.status(204).send('No content.');
    }
  
    next();
  }
  
  async post(req, res, next) {
    let { id, name, url } = req.query;
  
    if (
      id === undefined ||
      name === undefined ||
      url === undefined
    ) {
      return res.status(400).send('Bad request.\nID, NAME, URL must be present.\nID must be a number.');
    }
  
    id = parseInt(id);

    if (isNaN(id)) {
      return res.status(400).send('Type of ID must be a number.');
    }
  
    const itemToCreate = await controller.getOneItem(id);

    if (itemToCreate !== undefined) {
      return res.status(406).send('Not Acceptable.\nItem already exists.');
    }
  
    controller.addItem(id, name, url);
    next();
  }
  
  async put(req, res, next) {
    let { id, name, url } = req.query;
  
    if (id === undefined) {
      return res.status(400).send('Bad request.\nID, NAME or URL must be present.\nID must be a number.');
    }
  
    id = parseInt(id);

    if (isNaN(id)) {
      return res.status(400).send('Type of ID must be a number.');
    }
  
    const itemToUpdate = await controller.getOneItem(id);

    if (itemToUpdate === undefined) {
      return res.status(404).send('Not Found.\nItem was not found.');
    }
  
    controller.updateItem(id, name ?? itemToUpdate.name, url ?? itemToUpdate.url);
    next();
  }
  
  async delete(req, res, next) {
    let id = req.query.id;
  
    if (id === undefined) {
      return res.status(400).send('Bad request.\nID must be present.');
    }
  
    id = parseInt(id);

    if (isNaN(id)) {
      return res.status(400).send('Bad request. \nID must be a number.');
    }
  
    const itemToDelete = await controller.getOneItem(id);
    
    if (itemToDelete === undefined) {
      return res.status(404).send('Not Found.\nItem was not found.');
    }
  
    controller.deleteItem(id);
    next();
  }
}

module.exports = new Middleware();