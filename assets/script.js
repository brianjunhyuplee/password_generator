// Assignment Code
var generateBtn = document.querySelector("#generate");
var promptChar;
var promptLength;
var passChar;
var passLength;
var count = 0;
var ranChar;
var ranNum;
var ranCharIndex;
var passwordArr = [];
//string of characters and a counter for how many times used
var lowercaseletters = ["abcdefghijklmnopqrstuvwxyz",0]
var uppercaseletters = ["ABCDEFGHIJKLMNOPQRSTUVWXTZ",0]
var specialcharacters = [" !$%()*+,-./:;<=>?@[]^-`{|}~\'\"\&\\\#",0];
var numbercharacters = ["0123456789",0]
var allChar = []
// Write password to the #password input
function writePassword() {
  console.log("In the writePassword Function");
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//this function generates the password
function generatePassword(){
  //getting length of password
  console.log("In the generatePassword Function");
  promptLength = confirm("There should be a set length for my password");
  console.log("User Input for length confirm: " + promptLength);
    if(promptLength){
      passLength = prompt("Enter a number (8 - 128) for character count");
      console.log("User Input for length confirm: " + passLength);
    }
  //getting characters needed
  var promptChar = confirm("There should be certain characters included for my password");
  console.log("User Input for char confirm: " + promptChar);
    if(promptChar){
      alert("Enter all letters that apply");
      passChar =  prompt("Lowercase (L), Uppercase (U), Numbers (N), Special Characters (S)");
      console.log("User Input for length confirm: " + passChar);
      passChar = passChar.toLowerCase();
      passChar.addChar();
    }
//use passLength and passChar to create password
    if (promptLength){
      for (count = 0; count < passLength; count++){
        
        // generates a random number 0-criteriaNumber to choose between different character types
        ranNum = Math.floor((Math.random() * allChar.length));
        // generates a random character from within the character type
        ranCharIndex = Math.floor((Math.random() * allChar[ranNum[0]].length));
        // counts the number of time this character type is used
        allChar[ranNum[1]] = allChar[ranNum[1]] + 1;
        console.log("character type has been used this many times: " + allChar[ranNum[1]]);
        ranChar = promptChar[ranNum[[0][ranCharIndex]]];
        // adds that character to your password
        passwordArr.push(ranChar);
      }
    }
    else {
  
    }
}

// this function adds all neccessary characters
function addChar(){
  if (promptChar.indexOf('l')){
    allChar.push(lowercaseletters);
  }
  if (promptChar.indexOf('u')){
    allChar.push(uppercaseletters);
  }
  if (promptChar.indexOf('n')){
    allChar.push(numbercharacters);
  }
  if (promptChar.indexOf('s')){
    allChar.push(specialcharacters);
  }
}
