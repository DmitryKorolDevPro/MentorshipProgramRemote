const { getUsers } = require('./Async-functions');

function validateEmail(email) {
  return /^\s*\w{5,}@[a-z]+\.[a-z]+\s*$/i.test(email);
}

class User {
  constructor (firstName = 'Homer', lastName = 'Simpson') {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

async function getUsersEmails() {
  const users = await getUsers();
  return users.map(user => user.email);
}

module.exports = { validateEmail, User, getUsersEmails};