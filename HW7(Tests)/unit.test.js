const { checkPassword, checkEmail } = require('./HW7_Trupkina');
const { describe, test, expect } = require('@jest/globals');

describe('Testing... ', () => {
    describe('Testing function checkPassword: ', () => {
        let passwordTrue = [
            'aaaaaaaaA#',
            'AAAAAAA22a#',
            'passwOrd3%'
        ];
        let passwordFalse = ['парОль3%',
            'AAAAAAAAAA#',
            'aA#',
            '2222222222A#',
            '2222222222a#',
            '22222222222',
            '2222222222#',
            '############'
        ];
        test('Testing in function checkPassword if do not write anything:', () => {
            expect(passwordTrue).not.toBeNull();
            expect(passwordTrue).toBeDefined();
            expect(passwordTrue).not.toBeUndefined();
        });
        test('Testing true value password: ', () => {
            for (const i of passwordTrue) {
                expect(checkPassword(i)).toBe(true);
            }
        });
        test('Testing false value password: ', () => {
            for (const i of passwordFalse) {
                expect(checkPassword(i)).toBe(false);
            }
        });
    });

    describe('Testing function checkEmail: ', () => {
        let emailTrue = [
            'example@gmail.com',
            'EXAMPLE@MAIL.RU',
            'EXam_p.l-e@gmaiL.Com',
            'EXam_p.l35e@gmaiL.Com',
            'gss@Yandex.mojong',
            'example@356.ru',
            'example@Flora-mix.ru'
        ];
        let emailFalse = [
            '@gmaiL.Com',
            'gs@Yandex.mojong',
            'example @gmail.com',
            'example@356.333',
            'exa23@44m.p-le@Flora-mix.ru'
        ];
        test('Testing in function checkEmail if do not write anything:', () => {
            expect(emailTrue).not.toBeNull();
            expect(emailTrue).toBeDefined();
            expect(emailTrue).not.toBeUndefined();
        });
        test('Testing true value email', () => {
            for (const i of emailTrue) {
                expect(checkEmail(i)).toBe(true);
            }
        });
        test('Testing false value email', () => {
            for (const i of emailFalse) {
                expect(checkEmail(i)).toBe(false);
            }
        });
    });
});
