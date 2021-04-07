const e = require('express');
const $M = require('./Model.js');
const $V = require('./View.js');

class Controller {
  async getItems(id) {
    const itemsList = await $M.getItemsList();
    const response = {
      statusCode: 200,
      result: []
    };

    // Работа с данными и ошибки - для модели. Контроллер только дёргает ниточки.
    // Добавить эмуляцию работы с БД - Репозиторий.
    if (id === undefined) {
      response.result = itemsList;
    } else {
      const requestedItem = itemsList.find(item => +item.id === +id);

      if (requestedItem === undefined) {
        response.statusCode = 404;
        response.result = 'Not Found';
        return response;
      }

      response.result.push(requestedItem);
    }

    if (response.result.length === 0) {
      response.statusCode = 204;
      response.result = 'No Content';
    }

    return response;
  }

  async addItems({name, id, url}) {
    const response = await $M.addNewItems(name, id, url);

    if (response) {
      return {
        statusCode: 201,
        result: 'Created'
      }
    } else {
      return {
        statusCode: 406,
        result: 'Not Acceptable'
      }
    }

    // updateView()
  }
}

module.exports = new Controller();