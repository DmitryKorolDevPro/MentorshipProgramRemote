const emailsToCheck = [
  // CHECK FOR CASE SENSIVITY
  "example@gmail.com", // true | Case doesn`t matter
  "EXAMPLE@GMAIL.COM", // true
  "ExAmPlE@mail.ru", // true
  // CHECK FOR SPACES BEFORE AND AFTER EMAIL
  "        example@gmail.com         ", // true | we can remove spaces
  "        example@gmail.com", // true | we can remove spaces
  "example@gmail.com         ", // true | we can remove spaces
  // CHECK FOR LENGTH
  "exmpl@mail.ru", // true | Let`s say the name of an email must be >= 5 characters
  "exmp@gmail.ru", // false | < 5
  "exm@mail.ru", // false | < 5
  // CHECK FOR ORDER OR MISSING PARTS
  "example @gmail.com", // false | space inside of enmail is not allowed
  "example@gmail. com", // false | space inside of enmail is not allowed
  "example@mailru", // false | dot is missing
  "exmple@mailru.", // false | there is no domain name
  ".example@mailru", // false | domain name must be after @
  "exm@.mailru", // false | there isn`t anything before @
  "exm@.", // false | domain name is missing
  "examplemail.ua", // false | @ is missing
  "@examplemail.ua", // false | @ is in the beginning
  "examplemail.ua@", // false | @ is in the end
  // CHECK FOR NUMBERS
  "example12@gmail.com", // true | numbers in the email name is allowed
  "12example@gmail.com", // true | numbers in the email name is allowed
  "example@12gmail.com", // false | numbers in the domain name is not allowed
  "example@gmail.12", // false | numbers in the domain name is not allowed
  // CHECK FOR OTHER CHARACTERS
  "ex!ample@gmail.com", // false | other characters is not allowed
  "ex?ample@gmail.com", // false | other characters is not allowed
  "ex,ample@gmail.com", // false | other characters is not allowed
  "ex@..a@mple@gmail.com", // false | other characters is not allowed
  "ex.ample@gmail.com" // false | other characters is not allowed
];

const regex = new RegExp(/.{5,}@.+\..+/);
const additionalRegex = new RegExp(/[-?_!,#$^&]/);

function emailValidator(email) {
  email = email.trim();

  if (
    !regex.test(email) ||
    email.indexOf(" ") !== -1 ||
    email.indexOf(".") !== email.lastIndexOf(".") ||
    email.indexOf("@") !== email.lastIndexOf("@")
  ) {
    return false;
  }

  const [emailName, domainName] = email.split("@");
  if (additionalRegex.test(email) || /\d/.test(domainName)) {
    return false;
  }

  return true;
}

for (const email of emailsToCheck) {
  if (emailValidator(email)) {
    console.log(`${email} is valid ✅`);
  } else {
    console.log(`${email} is not valid ❗️`);
  }
}

// and the second that will validate the password according to basic rules 
// (only Latin and numbers, and a special character are allowed " ?,!, @, -, +, = ". Large and small letters must be present, the password is at least 8 characters long)

const passwordsToCheck = [];

function passwordIsValid(pass) {

}

for (const pass of passwordsToCheck) {
  if (passwordIsValid(pass)) {
    console.log(`${pass} is valid ✅`);
  } else {
    console.log(`${pass} is not valid ❗️`);
  }
}