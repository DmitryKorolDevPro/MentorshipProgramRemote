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

async function getUsers() {
  return await (await fetch('https://jsonplaceholder.typicode.com/users')).json();
}

module.exports = {validateEmail, User, getUsers};