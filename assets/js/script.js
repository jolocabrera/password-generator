// Assignment code here

//Whatever generatePassword function returns will display on screen in main card
function generatePassword() {
  var passwordHolder = ""
  var chars = ""

  //sets password length
  var passwordLength = window.prompt("How long would you like your password to be? Select a number between 8 and 128.");
    if (passwordLength >= 8 && passwordLength <= 128) {
      window.alert("Your password will be " + passwordLength + " characters long.")
    }
    else {
      window.alert("Please choose a number between 8 and 128.");
      generatePassword();
    }
  
  //selecting character sets (case, numbers, special characters)

  // lower case letters
  var lowercase = window.confirm("Include lowercase letters in your password?");
  if (lowercase) {
    chars += "abcdefghijklmnopqrstuvwxyz";
  }

  // upper case letters
  var uppercase = window.confirm("Include uppercase letters in your password?");
  if (uppercase) {
    chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  // numeric
  var numbers = window.confirm("Include numbers in your password?");
  if (numbers) {
    chars += "123456789";
  }

  //special characters 
  var specialChar = window.confirm("Include special characters in your password?");
  if (specialChar) {
    chars += "!#$%&()*+,-./:;<=>?@[\]^_`{|}~";
  }

  //validation, at least one character type should be selected
  if (!lowercase && !uppercase && !numbers && !specialChar) {
    window.alert("You must select at least one password criteria to generate a password.")
    generatePassword();
  }

  //generates password through for loop
  for (i = 0; i < passwordLength; i++) {
    passwordHolder += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return passwordHolder;
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
