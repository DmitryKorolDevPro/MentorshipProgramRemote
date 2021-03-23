const fetch = require('node-fetch'); // implementing fetch in Node.js
const {describe, test, expect, beforeAll} = require('@jest/globals');
const {validateEmail, User, getUsers} = require('./HW7_Khyzhniak.js');

describe('Testing function validateEmail with different emails.', () => {
  describe('Should return true with valid emails.', () => {
    const validEmailsToCheck = [
      'example@gmail.com',
      'EXAMPLE@GMAIL.COM',
      'ExAmPlE@mail.ru',
      '        example@gmail.com         ',
      '        example@gmail.com',
      'example@gmail.com         ',
      'exmpl@mail.ru',
      'example12@gmail.com',
      '12example@gmail.com',
    ];

    test('Returns true for valid emails.', () => {
      for (const email of validEmailsToCheck) {
        expect(validateEmail(email)).toBe(true);
      }
    });
  });

  describe('Should return false with invalid emails.', () => {
    const invalidEmailsToCheck = [
      'exmp@gmail.ru',
      'exm@mail.ru',
      'example @gmail.com',
      'example@gmail. com',
      'example@mailru',
      'exmple@mailru.',
      '.example@mailru',
      'exm@.mailru',
      'exm@.',
      'examplemail.ua',
      '@examplemail.ua',
      'examplemail.ua@',
      'example@12gmail.com',
      'example@gmail.12',
      'ex!ample@gmail.com',
      'ex?ample@gmail.com',
      'ex,ample@gmail.com',
      'ex@..a@mple@gmail.com',
      'ex.ample@gmail.com'
    ];

    test('Returns false for invalid emails.', () => {
      for (const email of invalidEmailsToCheck) {
        expect(validateEmail(email)).toBe(false);
      }
    });
  });
});

describe('Testing class User.', () => {
  describe('Passing both arguments to the User constructor.', () => {
    const user = new User('Dmytro', 'Khyzhniak');

    test('Returned object properties and values are correct.', () => {
      expect(user).toEqual({
        firstName: 'Dmytro',
        lastName: 'Khyzhniak'
      });
    });

    test('Method getFullName() returns correct result.', () => {
      expect(user.getFullName()).toBe('Dmytro Khyzhniak');
    });
  });

  describe('Passing only one argument to the User constructor.', () => {
    const user = new User('Dmytro');

    test('Returned object properties and values are correct.', () => {
      expect(user).toEqual({
        firstName: 'Dmytro',
        lastName: 'Simpson'
      });
    });

    test('Method getFullName() returns correct result.', () => {
      expect(user.getFullName()).toBe('Dmytro Simpson');
    });
  });

  describe('Passing no arguments to the User constructor.', () => {
    const user = new User();

    test('Returned object properties and values are correct.', () => {
      expect(user).toEqual({
        firstName: 'Homer',
        lastName: 'Simpson'
      });
    });

    test('Method getFullName() returns correct result.', () => {
      expect(user.getFullName()).toBe('Homer Simpson');
    });
  });
});

describe('Testing async function getUsers()', () => {
  let users;

  beforeAll(async () => {
      users = await (
        await fetch('https://jsonplaceholder.typicode.com/users')
      ).json();
  });

  test('Returned value is an Array and it`s length > 0', () => {
    expect(Array.isArray(users)).toBe(true);
    expect(users.length).toBeGreaterThan(0);
  });

  test('Returned array contains objects with valid properties', async () => {
    for (const user of users) {
      expect(user).toMatchObject({
        username: expect.any(String),
        name: expect.any(String),
        id: expect.any(Number),
      });
    }
  });
});