// Arrays for special characters, lowercase letters, uppercase letters, and numbers
const specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "-", "=", "+", "(", ")", "{", "}", "[", "]", "?", "/", ">", "<", ".", ",", "~", "|"];

const numberChars = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

const uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

const lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let randomizedArr={
  specialBool: true,
  numberBool: true,
  upperBool: true,
  lowerBool: true
}

//function to get the password option selected by the user
function userSelected(){
  var answer = window.prompt("Pick an amount of characters between from 8-129.");
  if (answer < 8 || answer > 129){
    window.alert("Invalid answer.");
    userSelected();
  }
  else 
    randomizedArr.specialBool = window.confirm("Do you want Special Characters?");
    randomizedArr.numberBool = window.confirm("Do you want Numbers?");
    randomizedArr.upperBool = window.confirm("Do you want lowercase letters?");
    randomizedArr.lowerBool = window.confirm("Do you want Uppercase letters?");
    return
}
userSelected()
randomSelected(randomizedArr)



//need an array to randomize the elements selected
function randomSelected(object){
     
  
}

//function to generate the password from the user input

function generatePassword(){
 
  if (randomizedArr.specialBool === false && randomizedArr.numberBool === false && randomizedArr.upperBool === false && randomizedArr.lowerBool === false){
    window.alert("Choose at least one type of Character.");
    userSelected();
}
}

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
