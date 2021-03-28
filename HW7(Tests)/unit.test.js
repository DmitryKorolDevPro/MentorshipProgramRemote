const { checkPassword, checkEmail } = require('./HW7_Trupkina');
const { describe, test, expect } = require('@jest/globals');

describe('Testing... ', () => {
    describe('Testing function checkPassword: ', () => {
        let correctPasswords = [
            'aaaaaaaaA#',
            'AAAAAAA22a#',
            'passwOrd3%'
        ];
        let uncorrectPasswords = ['парОль3%',
            'AAAAAAAAAA#',
            'aA#',
            '2222222222A#',
            '2222222222a#',
            '22222222222',
            '2222222222#',
            '############'
        ];
        test('Testing true value password: ', () => {
            for (const i of correctPasswords) {
                expect(checkPassword(i)).toBe(true);
            }
        });
        test('Testing false value password: ', () => {
            for (const i of uncorrectPasswords) {
                expect(checkPassword(i)).toBe(false);
            }
        });
    });

    describe('Testing function checkEmail: ', () => {
        let correctEmail = [
            'example@gmail.com',
            'EXAMPLE@MAIL.RU',
            'EXam_p.l-e@gmaiL.Com',
            'EXam_p.l35e@gmaiL.Com',
            'gss@Yandex.mojong',
            'example@356.ru',
            'example@Flora-mix.ru'
        ];
        let uncorrectEmail = [
            '@gmaiL.Com',
            'gs@Yandex.mojong',
            'example @gmail.com',
            'example@356.333',
            'exa23@44m.p-le@Flora-mix.ru'
        ];
        test('Testing true value email', () => {
            for (const i of correctEmail) {
                expect(checkEmail(i)).toBe(true);
            }
        });
        test('Testing false value email', () => {
            for (const i of uncorrectEmail) {
                expect(checkEmail(i)).toBe(false);
            }
        });
    });
});
