// Assignment Code

// variable names for user input in function 

// Start Password variable values: 

var character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", " > ", " ? ", "@", "[", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphabetUp = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var options = [];
// function user input criteria
var criteriaStart;
var confirmNumber;
var confirmCharacter;
var confirmLowercase;
var confirmUppercase;

var generateBtn = document.querySelector("#generate");


// this function is getting user input
function generatePassword() {
  // prompted for password criteria
  criteriaStart = prompt("How many characters would you like your password to be, please choose between 8 and 128?");
  // user choose a length of at least 8 characters and no more than 128 characters (is this if statement on line 30-37, needed if rule say they chose)
  // First if statement for user validation 
  if (!criteriaStart) {
    alert("This needs a value");
  } else if (criteriaStart < 8 || criteriaStart > 128) {
    criteriaStart = parseInt(alert("You must choose between 8 and 128"));

  } else {
    // Continues once user input is validated
    confirmNumber = confirm("Would you like numbers?");
    confirmCharacter = confirm("Would you like special characters letters?");
    confirmLowercase = confirm("Would you like lowercase letters?");
    confirmUppercase = confirm("Would you like uppercase letters?");
  }
  //  when user is prompted for character types they choose lowercase, uppercase, numeric, and/or special characters
  // This is the if/else statement for at least one input for a character type should be selected 

  // if no option is selected
  if (!confirmLowercase && !confirmNumber && !confirmUppercase && !confirmCharacter) {

    alert("At least one character type should be selected ");
  }

  // Else if for 4 positive options
  else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {

    options = options.concat(number, alphabet, alphabetUp);
  }
  // Else if for 3 positive options
  else if (confirmCharacter && confirmNumber && confirmUppercase) {
    options = options.concat(character, number, alphabetUp);
  } else if (confirmCharacter && confirmNumber && confirmLowercase) {
    options = options.concat(character, number, alphabet);
  } else if (confirmCharacter && confirmLowercase && confirmUppercase) {
    options = options.concat(alphabet, character, alphabetUp);
  } else if (confirmNumber && confirmLowercase && confirmUppercase) {
    options = options.concat(number, alphabet, alphabetUp);
  }
  // Else if for 2 positive options 
  else if (confirmCharacter && confirmNumber) {
    options = options.concat(character, number);

  } else if (confirmCharacter && confirmLowercase) {
    options = options.concat(character, alphabet);

  } else if (confirmCharacter && confirmUppercase) {
    options = options.concat(character, alphabetUp);
  } else if (confirmLowercase && confirmNumber) {
    options = options.concat(alphabet, number);

  } else if (confirmLowercase && confirmUppercase) {
    options = options.concat(alphabet, alphabetUp);

  } else if (confirmNumber && confirmUppercase) {
    options = options.concat(number, alphabetUp);
  }
  // Else if for 1 positive option
  else if (confirmCharacter) {
    options = character;
  } else if (confirmNumber) {
    options = number;
  } else if (confirmLowercase) {
    options = alphabet;
  }
  // Created space variable to fill uppercase conversion
  else if (confirmUppercase) {
    options = alphabetUp;
  }

  var passwordGenerated = "";
//  This is creating a password to display once criteria is established and looping through the amount of criterias the user would like
  for (var i = 0; i < criteriaStart; i++) {
    //  Creating a random numbers from the number array
    var randomNumber = Math.floor(Math.random() * options.length);
    passwordGenerated += options[randomNumber];
  }

    var passwordText = document.querySelector("#password");
  // passwordText.value is actually display the password once the generate button is clicked.
  passwordText.value = passwordGenerated;

}



// Giving rule to computer stating when the generate button is clicked to generate a password.
generateBtn.addEventListener("click", generatePassword);