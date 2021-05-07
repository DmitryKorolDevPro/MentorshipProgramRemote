
let email = ['example@gmail.com', //true
    'EXAMPLE@MAIL.RU',            //true
    'EXam_p.l-e@gmaiL.Com',       //true
    'EXam_p.l35e@gmaiL.Com',      //true
    '@gmaiL.Com',                 //false
    'gss@Yandex.mojong',          //true
    'gs@Yandex.mojong',           //false 
    'example @gmail.com',         //false
    'example@356.ru',             //true 
    'example@356.333',            //false
    'example@Flora-mix.ru',       //true
    'exa23@44m.p-le@Flora-mix.ru' //false - for all ()!@#$%^&*=
];
console.log(checkEmail(email));
function checkEmail(mail) {
    const regexp_email = /^([\w\.+-]{3,})+@[A-z0-9-]{3,10}\.[A-z]{2,6}$/;//we can't use \w in domen name and sub name because '_' included
    for (const iterator of mail) {
        if (regexp_email.test(iterator)) {
            console.log(`${iterator}: true`);
        }
        else {
            console.log(`${iterator}: false`);
        };
    }
}

let password = ['aaaaaaaaA#',     //true
    'AAAAAAA22a#',                //true
    'парОль3%',                   //false
    'passwOrd3%',                 //true
    'AAAAAAAAAA#',                //false
    'aA#',                        //false
    '2222222222A#',               //false
    '2222222222a#',               //false
    '22222222222',                //false
    '2222222222#',                //false
    '############'                //false
];
console.log(checkPassword(password));
function checkPassword(pass) {
    /* only Latin and numbers, and a special character are allowed " ?,!, @, -, +, = ".
     Large and small letters must be present, the password is at least 8 characters long */
    const regexp_pass = /^.*(?=.{8,})(?=.+[A-Z])(?=.+[a-z])(?=.*[!@#$%^&*?+=-]).*$/;
    for (const iterator of pass) {
        if (regexp_pass.test(iterator)) {
            console.log(`${iterator}: true`);
        }
        else {
            console.log(`${iterator}: false`);
        }
    }
}
