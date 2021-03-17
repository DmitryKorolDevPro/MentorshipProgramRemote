
function validEmail() {
    //Set the default value
    let email = prompt('Type correctly email please', `example@gmail.com`);
    const regexp_email = /^[A-z0-9_\.+-]+@[A-z0-9-]{3,10}\.[A-z0-9]{2,6}$/;
    if (email === null) return undefined;//i catch cancellation
    else if (regexp_email.test(email) === true) return alert('This is your Email:\n' + email);
    return validEmail();
}

console.log(validPassword());
function validPassword(pass) {
    //Set the default value with Math.random() if user doesn't want to come up with password
    let password = prompt('Type your password please', Math.floor(Math.random() * Math.floor(999999)) + 'Add!t');
    const regexp_pass = /^.*(?=.{8,})(?=.+[A-Z])(?=.+[a-z])(?=.*[!@#$%^&*?+=-]).*$/;
    if (password === null) return undefined;//i catch cancellation
    else if (regexp_pass.test(password) === true) return alert('This is your password:\n' + password);
    return validPassword();
}