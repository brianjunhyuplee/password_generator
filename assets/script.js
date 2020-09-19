// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//this function generates the password
function generatePassword(){
  //getting length of password
  var promptLength = confirm("There should be a set length for my password");
    if(promptLength){
      var passLength = prompt("Enter a number (8 - 128) for character count");
    }
}

