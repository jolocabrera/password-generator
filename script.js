// Assignment code here

//Whatever generatePassword function returns will display on screen in main card
function generatePassword() {
  var passwordLength = window.prompt("How long would you like your password to be? Select a number between 8 and 128.");
  if (passwordLength >= 8 && passwordLength <= 128) {
    window.alert("Your password will be " + passwordLength + " characters long.")
  }
  else {
    window.alert("Please choose a number between 8 and 128.");
    generatePassword();
  }
  return passwordLength;

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
