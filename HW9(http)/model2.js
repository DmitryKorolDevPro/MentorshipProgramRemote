// here we calculate all the business logic

const repository = require('./repository.js');

class Model2 {

  async getExtraDataById(id) {
    // processing the data depending on the phase of the moon
    const listFromDb = await repository.getExtraDataByIdFromDb(id);
    return listFromDb.map((elem)=>'User Number ' + elem);
  }


}

module.exports = new Model2();