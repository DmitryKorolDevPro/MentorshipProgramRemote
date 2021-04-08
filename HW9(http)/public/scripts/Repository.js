const $M = require('./Model.js');

class Repository {
  constructor(Model) {
    this.collection = Model;
  }

  async findAll() {
    const response = {
      statusCode: 200,
      result: []
    };

    response.result = await this.collection.getItems();

    if (response.result.length === 0) {
      response.statusCode = 204;
      response.result = 'No Content.\nNo content in database.';
    }

    return response;
  }

  async findOne(id) {
    const response = {
      statusCode: 200,
      result: []
    };
    
    const allItems = await this.findAll();

    const requestedItem = allItems.result.find(
      item => +item.id === +id
    );

    if (requestedItem === undefined) {
      response.statusCode = 404;
      response.result = 'Not Found.\nItem was not found';
    } else {
      response.result.push(requestedItem);
    }

    return response;
  }

  async create({ name, id, url }) {
    const response = {
      statusCode: 201,
      result: 'Created.\nItem was successfully created.'
    };

    const gotAllParams =
    name !== undefined &&
    id !== undefined &&
    url !== undefined;

    if (!gotAllParams) {
      response.statusCode = 400;
      response.result = 'Bad Request.\nSome params are missing. NAME, ID, URL must be present.';
      return response;
    }

    const itemAlreadyExists = await this.findOne(id);
    
    if (itemAlreadyExists.statusCode === 200) {
      response.statusCode = 406;
      response.result = 'Not Acceptable.\nItem already exists.'
    } else {
      $M.addNewItem(name, id, url);
    }

    return response;
  }

  update(id, value) {
    throw new Error("Method not implemented.");
  }

  delete(id) {
      throw new Error("Method not implemented.");
  }
}

module.exports = new Repository($M);