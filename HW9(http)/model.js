// here we calculate all the business logic

const repository = require('./repository.js');

class Model {

  async getList() {
    // processing the data depending on the phase of the moon
    const listFromDb = await repository.getListFromDb();
    return listFromDb.map((elem)=>'User Number ' + elem);
  }

}

module.exports = new Model();