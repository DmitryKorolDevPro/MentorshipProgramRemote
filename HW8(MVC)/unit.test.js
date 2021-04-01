const { addButton, saveButton } = require('./javascript');
const { describe, test, expect } = require('@jest/globals');

describe('testing...', () => {
    test('Testing true value addButton: ', () => {

        expect(addButton('text')).toBe('text');

    });
});
// describe('Testing Controller... ', () => {
//     describe('On click button Add: should add into list ', () => {

//     });
// });

// describe('Testing Model... ', () => {
//     describe(' ', () => {

//     });
// });