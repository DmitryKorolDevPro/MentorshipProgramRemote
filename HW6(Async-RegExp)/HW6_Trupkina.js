
function validEmail() {
    //Set the default value
    let email = prompt('Type correctly email please', `example@gmail.com`);
    const regexp_email = /^([\w\.+-]{3,})+@[A-z0-9-]{3,10}\.[A-z]{2,6}$/;//we can't use \w in domen name and sub name
    if (email === null) return undefined;//i catch cancellation
    else if (regexp_email.test(email) === true) return alert('This is your Email:\n' + email);
    return validEmail();
}

function validPassword(pass) {
    //Set the default value with Math.random() if user doesn't want to come up with password
    let password = prompt('Type your password please', Math.floor(Math.random() * Math.floor(999999)) + 'Add!t');
    const regexp_pass = /^.*(?=.{8,})(?=.+[A-Z])(?=.+[a-z])(?=.*[!@#$%^&*?+=-]).*$/;
    if (password === null) return undefined;//i catch cancellation
    else if (regexp_pass.test(password) === true) return alert('This is your password:\n' + password);
    return validPassword();
}

console.log(validPassword());
//testing password:
// aaaaaaaaA# //true
// AAAAAAA22a# //true
// AAAAAAAAAA# //false
// aA# //false
// 2222222222A#//false
// 2222222222a#//false
// 22222222222 //false
// 2222222222# //false
// ############ //false

console.log(validEmail());
//testing email:
//example@gmail.com //true
//EXAMPLE@MAIL.RU //true
//EXam_p.l-e@gmaiL.Com //true
//EXam_p.l35e@gmaiL.Com //true
//@gmaiL.Com //false
//gss@Yandex.mojong //true
//gs@Yandex.mojong //false 
//example @gmail.com //false
//example@356.ru //true 
//example@356.333 //false
//example@Flora-mix.ru //true
//exa23@44m.p-le@Flora-mix.ru //false - for all ()!@#$%^&*=
