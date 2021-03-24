async function getUsers() {
  return await (await fetch('https://jsonplaceholder.typicode.com/users')).json();
}

exports.getUsers = getUsers;