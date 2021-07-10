// Assignment code here
// declare character type const
const lower = "abcdefghijklmnopqrstuvwxyz";
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const number = "0123456789";
const symbol = "!@#$%^&*_-+=";

// function to populate a password string
function popPassword(pLength, pType) {
  var createdPassword = "";

  for (var i = 0; i < pLength; i++) {
    var popString;
    do { popString = Math.floor(Math.random() * pType.length);
    } while (!pType[popString]);
    
    // switch case for each character type
    switch (popString) {
      case 0:
        createdPassword += lower[Math.floor(Math.random() * lower.length)];
        break;

      case 1: 
        createdPassword += upper[Math.floor(Math.random() * upper.length)];
        break;

      case 2:
        createdPassword += number[Math.floor(Math.random() * number.length)];
        break;

      case 3:
        createdPassword += symbol[Math.floor(Math.random() * symbol.length)];
        break;
    }
  }
  return createdPassword;
}

// genratePassword () function starts here
function generatePassword() {
  var passwordLength = 0;
  var passwordString = "";

  // create variable to store user input for character types
  var lowerSelect = false,
      upperSelect = false,
      numberSelect = false,
      symbolSelect = false;

  // ask users the length of password
  passwordLength = prompt(
    "How many characters do you want your password to have? Enter a number between 8 and 128.");

  // verify password length
  if (passwordLength >= 8 && passwordLength <= 128) {
    // ask user if they want lowercase, uppercase, number and symbol
    lowerSelect = confirm("Do you want to include lowercase letters? Click OK for Yes, Cancel for No.");
    upperSelect = confirm("Do you want to include uppercase letters? Click OK for Yes, Cancel for No.");
    numberSelect = confirm("Do you want to include a number? Click OK for Yes, Cancel for No.");
    symbolSelect = confirm("Do you want to include special characters? Click OK for Yes, Cancel for No.");

    // if user chooses at least one option
    if (
      lowerSelect || upperSelect || numberSelect || symbolSelect) {
      // return passwordString = popPassword(passwordLength, [lowerSelect, upperSelect, numberSelect, symbolSelect]);
      return passwordString = popPassword(passwordLength, [lowerSelect, upperSelect, numberSelect, symbolSelect]);    

    } else {
      // if user does not choose any option
      alert("You need to pick at least one character type.");
    }

  } else {
    // let user know their selection is invalid
    alert("Invalid password length.");
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);