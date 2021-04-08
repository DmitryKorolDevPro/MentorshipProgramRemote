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

    const list = await this.findAll();
    const requestedItem = $M.findItem(list.result, id);

    if (requestedItem === undefined) {
      response.statusCode = 404;
      response.result = 'Not Found.\nItem was not found.';
    } else {
      response.result.push(requestedItem);
    }

    return response;
  }

  async create({ id, name, url }) {
    const response = {
      statusCode: 201,
      result: 'Created.\nItem was successfully created.'
    };

    if (
      name === undefined ||
      id === undefined ||
      url === undefined
    ) {
      response.statusCode = 400;
      response.result = 'Bad Request.\nSome parameters are missing. ID, NAME, URL must be present.';
      return response;
    }

    const itemAlreadyExists = await this.findOne(id);

    if (itemAlreadyExists.statusCode === 200) {
      response.statusCode = 406;
      response.result = 'Not Acceptable.\nItem already exists.'
    } else {
      $M.addNewItem(name, +id, url);
    }

    return response;
  }

  async update({ id, name, url }) {
    const response = {
      statusCode: 200,
      result: 'OK.\nItem was successfully updated.'
    };

    if (id === undefined) {
      response.statusCode = 400;
      response.result = 'Bad Request.\nSome parameters are missing. ID, NAME, URL must be present.';
      return response;
    }
    
    const findItem = await this.findOne(id);
    const item = findItem.result[0];

    if (findItem.statusCode === 404) {
      response.statusCode = 404;
      response.result = 'Not Found.\nItem was not found.';
    } else {
      $M.updateItem(+id, name ?? item.name, url ?? item.url);
    }

    return response;
  }

  async delete(id) {
    const response = {
      statusCode: 200,
      result: 'OK.\nItem was successfully deleted.'
    };

    const findItem = await this.findOne(id);

    if (findItem.statusCode === 200) {
      $M.deleteItem(id);
    } else {
      response.statusCode = 404;
      response.result = 'Not Found.\nItem was not found.';
    }

    return response;
  }
}

module.exports = new Repository($M);