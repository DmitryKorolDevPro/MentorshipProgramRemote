const model = require('./Model.js');

class Controller {
  async getAllItems() {
    const result = await model.getAllItems();
    
    if (!Array.isArray(result)) {
      return {
        result: 'Internal Server Error.',
        statusCode: 500
      }
    } else if (result.length === 0) {
      return {
        result,
        statusCode: 204
      }
    }

    return {
      result,
      statusCode: 200
    }
  }

  async getOneItem(id) {
    const item = await model.findOneItem(id);
    
    if (item === undefined) {
      return {
        result: 'Not Found.\nItem was not found.',
        statusCode: 404
      }
    }

    return {
      result: item,
      statusCode: 200
    }
  }

  async addItem({ id, name, url }) {
    if (
      id === undefined ||
      name === undefined ||
      url === undefined
    ) {
      return {
        result: 'Bad request.\nID, NAME, URL must be present.\nID must be a number.',
        statusCode: 400
      }
    }

    const itemAlreadyExists = await model.findOneItem(id) ?? false;

    if (itemAlreadyExists) {
      return {
        result: 'Not Acceptable.\nItem already exists.',
        statusCode: 406
      }
    }

    await model.addNewItemToTheList(id, name, url);

    return {
      result: 'Created.\nItem was successfully created.',
      statusCode: 201
    }
  }

  async updateItem({ id, name, url }) {
    if (id === undefined || (name === undefined && url === undefined)) {
      return {
        result: 'Bad request.\nID, NAME or URL must be present.\nID must be a number.',
        statusCode: 400
      }
    }

    const itemToUpdate = await model.findOneItem(id);

    if (itemToUpdate === undefined) {
      return {
        result: 'Not Found.\nItem was not found.',
        statusCode: 404
      }
    }

    name = name ?? itemToUpdate.name;
    url = url ?? itemToUpdate.url;

    await model.updateItem(id, name, url);

    return {
      result: 'OK.\nItem was successfully updated.',
      statusCode: 200
    }
  }

  async deleteItem(id) {
    if (id === undefined) {
      return {
        result: 'Bad request.\nID must be present.\nID must be a number.',
        statusCode: 400
      }
    }

    const itemToDelete = await model.findOneItem(id);

    if (itemToDelete === undefined) {
      return {
        result: 'Not Found.\nItem was not found.',
        statusCode: 404
      }
    }

    await model.deleteItem(id);

    return {
      result: 'OK.\nItem was successfully deleted.',
      statusCode: 200
    }
  }
}

module.exports = new Controller();