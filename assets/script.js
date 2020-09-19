// Assignment Code
var generateBtn = document.querySelector("#generate");

var promptChar;
var promptLength;
var passChar;
var passLength;
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
  promptLength = confirm("There should be a set length for my password");
    if(promptLength){
      passLength = prompt("Enter a number (8 - 128) for character count");
    }
  var promptChar = confirm("There should be certain characters included for my password");
    if(promptChar){
      alert("Enter all letters that apply");
      passChar =  prompt("Lowercase (L), Uppercase (U), Numbers (N), Special Characters (S)");
      passChar = passChar.toLowerCase();
    }
}

