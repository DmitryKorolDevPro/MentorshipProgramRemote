function checkEmail(mail) {
    const regexp_email = /^([\w\.+-]{3,})+@[A-z0-9-]{3,10}\.[A-z]{2,6}$/;
    return regexp_email.test(mail);
}

function checkPassword(pass) {
    const regexp_pass = /^.*(?=.{8,})(?=.+[A-Z])(?=.+[a-z])(?=.*[!@#$%^&*?+=-]).*$/;
    return regexp_pass.test(pass);
}
module.exports = { checkPassword, checkEmail };