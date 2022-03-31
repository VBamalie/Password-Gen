// Arrays for special characters, lowercase letters, uppercase letters, and numbers
const specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "-", "=", "+", "(", ")", "{", "}", "[", "]", "?", "/", ">", "<", ".", ",", "~", "|"];

const numberChars = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

const uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

const lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//answerObj might be able to be more localized
psArr = []
let passwordlen
let addArr

//function to get the password options selected by the user
//it then goes into the objects of answerObj
function generatePassword(){
   passwordLen = window.prompt("Pick an amount of characters between from 8-129.");
  if (passwordLen < 8 || passwordLen > 129){
    window.alert("Invalid answer.");
    userSelected();
  }
  else 
     addArr = window.confirm("Do you want Special Characters?");
      if(addArr){
        psArr = psArr.concat(specialChars)
      };
    addArr = window.confirm("Do you want Numbers?");
      if(addArr){
        psArr = psArr.concat(numberChars)
      };
    addArr = window.confirm("Do you want lowercase letters?");
    if(addArr){
      psArr = psArr.concat(lowercase)
    };
    addArr = window.confirm("Do you want Uppercase letters?");
    if(confirm){
      psArr = psArr.concat(uppercase);
    };
    return
}
console.log(psArr)
generatePassword()
console.log(psArr)


//need an array to randomize the elements selected
//will eventually be the concatonized version of all the arrays the user selected
function randomSelected( psLen , randomizedArr ){
     for (let i = 0; i < psLen; i++); {
      let random = Math.floor(Math.random() * randomizedArr.length);
      let newItem = randomizedArr[random]
      password = password + newItem;
     }
  console.log(password)
}

//function to generate the password from the user input
//this function needs to contatonate the lists that the user wants to be included together and then bring it back up to the randomSelected function
//FIGURE OUT WHETHER THE CONCAT ARRAY NEEDS TO BE LOCAL OR GLOBAL



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
