// Assignment Code
var generateBtn = document.querySelector("#generate");
var promptChar;
var promptLength;
var passChar;
var passLength;
var count = 0;
var count2 = 0;
var ranChar;
var ranNum;
var ranNum2;
var ranCharIndex;
var passwordArr = [];
//string of characters, a counter for how many times used, and index of where it was used
var lowercaseletters = ["abcdefghijklmnopqrstuvwxyz",0,[]]
var uppercaseletters = ["ABCDEFGHIJKLMNOPQRSTUVWXTZ",0,[]]
var specialcharacters = [" !$%()*+,-./:;<=>?@[]^-`{|}~\'\"\&\\\#",0,[]];
var numbercharacters = ["0123456789",0,[]]
var allChar = []
// Write password to the #password input
function writePassword() {
  console.log("In the writePassword Function");
  var password = generatePassword();
  //password.toString();
  console.log("this is my password: " + password);
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
      addChar();
    }
//use passLength and passChar to create password
    if (promptLength){
      for (count = 0; count < passLength; count++){
        // generates a random number 0-criteriaNumber to choose between different character types
        ranNum = Math.floor((Math.random() * allChar.length));
        console.log("this is my ranNum" + ranNum);
        // generates a random character from within the character type
        console.log("this is allChar[ranNum] " + allChar[ranNum]);
        console.log("this is all char at this index: "+allChar[ranNum][0]);
        ranCharIndex = Math.floor((Math.random() * allChar[ranNum][0].length));
        // counts the number of time this character type is used
        allChar[ranNum][1] = allChar[ranNum][1] + 1;
        // counts the index of time this character type is used
        allChar[ranNum][2].push(count);
        //pushes character to passwordArr
        console.log("character type has been used this many times: " + allChar[ranNum][1]);
        // adds that character to your password
        // passwordArr.push(allChar[ranNum[0[ranCharIndex]]]);
        passwordArr.push(allChar[ranNum][0].charAt(ranCharIndex));
      }
      // check to see if all char types had been used at least once
      checkChar();
      console.log("this is my passwordArr: " + passwordArr);
      console.log("this is my passwordArr in string : " + passwordArr.join(""));
      
      password = passwordArr.join("");
    }
    else {
      if (!promptChar){
        for (count = 0; count < Math.floor(Math.random*120)+8; count++){
          ranNum = Math.floor((Math.random() * 3));
          ranCharIndex = Math.floor((Math.random() * allChar[ranNum][0].length));
          passwordArr.push(allChar[ranNum][0].charAt(ranCharIndex));
        }
      }
      else {
        for (count = 0; count < Math.floor(Math.random*120)+8; count++){
          ranNum = Math.floor((Math.random() * allChar.lenth));
          ranCharIndex = Math.floor((Math.random() * allChar[ranNum][0].length));
          passwordArr.push(allChar[ranNum][0].charAt(ranCharIndex));
        }
      }

    }
}

// this function adds all neccessary characters
function addChar(){
  console.log("went through addChar");
  if (passChar.indexOf('l')!=-1){
    allChar.push(lowercaseletters);
  }
  if (passChar.indexOf('u')!=-1){
    allChar.push(uppercaseletters);
  }
  if (passChar.indexOf('n')!=-1){
    allChar.push(numbercharacters);
  }
  if (passChar.indexOf('s')!=-1){
    allChar.push(specialcharacters);
  }
}

function checkChar(){
  for ( count = 0; count < allChar.length; count++ ){
    if (allChar[count[1]] == 0){
      // find which character type(s) has been used more than once and replace a random one with the one that is lacking
        for ( count2 = 0; count2 < allChar.length; count2++ ){
          if ( allChar[count2[1]] > 1 && allChar[count[1]] == 0){
            ranNum = Math.floor((Math.random() * allChar[count2][2].length));
            ranCharIndex = Math.floor((Math.random() * allChar[count][0].length));
            //changes the character at a random index with a repeated character type
            //passwordArr[allChar[count2[2[ranNum]]]] = allChar[count[0[ranCharIndex]]];
            passwordArr[allChar][count2][2][ranNum] = allChar[count][0].charAt([ranCharIndex]);
            //updates the counters
            allChar[count][1] == allChar[count][1]+1;
            allChar[count2][1] == allChar[count2][1]-1;
          }
        }

      }
    }
  }


