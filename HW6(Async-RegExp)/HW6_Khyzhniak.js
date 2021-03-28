// One of the most common tasks is to validate the user's email and password.
// Write two regular expressions,
// one of which will validate the email for spelling validity 

const emailsToCheck = [
  // CHECK FOR CASE SENSIVITY
  'example@gmail.com', // ✅ | Case doesn`t matter
  'EXAMPLE@GMAIL.COM', // ✅
  'ExAmPlE@mail.ru', // ✅
  // CHECK FOR SPACES BEFORE AND AFTER EMAIL
  '        example@gmail.com         ', // ✅ | we can ignore spaces
  '        example@gmail.com', // ✅ | we can ignore spaces
  'example@gmail.com         ', // ✅ | we can ignore spaces
  // CHECK FOR LENGTH
  'exmpl@mail.ru', // ✅ | Let`s say the name of an email must be >= 5 characters
  'exmp@gmail.ru', // ❗️ | < 5
  'exm@mail.ru', // ❗️ | < 5
  // CHECK FOR ORDER OR MISSING PARTS
  'example @gmail.com', // ❗️ | space inside of enmail is not allowed
  'example@gmail. com', // ❗️ | space inside of enmail is not allowed
  'example@mailru', // ❗️ | dot is missing
  'exmple@mailru.', // ❗️ | there is no domain name
  '.example@mailru', // ❗️ | domain name must be after @
  'exm@.mailru', // ❗️ | there isn`t anything before @
  'exm@.', // ❗️ | domain name is missing
  'examplemail.ua', // ❗️ | @ is missing
  '@examplemail.ua', // ❗️ | @ is in the beginning
  'examplemail.ua@', // ❗️ | @ is in the end
  // CHECK FOR NUMBERS
  'example12@gmail.com', // ✅ | numbers in the email name is allowed
  '12example@gmail.com', // ✅ | numbers in the email name is allowed
  'example@12gmail.com', // ❗️ | numbers in the domain name is not allowed
  'example@gmail.12', // ❗️ | numbers in the domain name is not allowed
  // CHECK FOR OTHER CHARACTERS
  'ex!ample@gmail.com', // ❗️ | other characters is not allowed
  'ex?ample@gmail.com', // ❗️ | other characters is not allowed
  'ex,ample@gmail.com', // ❗️ | other characters is not allowed
  'ex@..a@mple@gmail.com', // ❗️ | other characters is not allowed
  'ex.ample@gmail.com' // ❗️ | other characters is not allowed
];

for (const email of emailsToCheck) {
  if (/^\s*\w{5,}@[a-z]+\.[a-z]+\s*$/i.test(email)) {
    console.log(`${email} is valid ✅`);
  } else {
    console.log(`${email} is not valid ❗️`);
  }
}

// and the second that will validate the password according to basic rules 
// (only Latin and numbers, and a special character are allowed ' ?,!, @, -, +, = '. Large and small letters must be present, the password is at least 8 characters long)

const passwordsToCheck = [
  'Exaaaaaaaammmmmpppleeeeee13333333777', // ✅
  'Example137', // ✅
  'Ex@mp!e137', // ✅
  'example137', // ❗️ | There are no capital letters
  'Exampleeee', // ❗️ | There are no digits
  'Example', // ❗️ | < 8
  'Examp12', // ❗️ | < 8
  'ex12', // ❗️ | < 8
];

for (const pass of passwordsToCheck) {
  if (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[\w\?\,\!\@\-\+\=]{8,}$/.test(pass)) {
    console.log(`${pass} is valid ✅`);
  } else {
    console.log(`${pass} is not valid ❗️`);
  }
}