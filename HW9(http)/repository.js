// Here we encapsulate the work with the database.

class Repository {

  async getListFromDb() {
    // here we go to the database, 
    // taking into account all the specifics of working with the database
    return Promise.resolve([1,2,3]);
  }

  async getExtraDataByIdFromDb(id) {
    // let's imagine that ID is really needed here
    return Promise.resolve([4,5,6]);
  }

}

module.exports = new Repository();