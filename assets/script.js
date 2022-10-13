///////////////////////// DO NOT CHANGE ////////////////////////////////////
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); // this is the function we are creating
  var passwordText = document.querySelector("#password");
  passwordText.value = password;//this keeps returning errors, probably stopping my JS from working
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
///////////////////////// DO NOT CHANGE ABOVE HERE /////////////////////////

/* 1. prompt asking if you want to generate a password on button click
   2. prompt for password criteria:
    2.1 prompt user asking how long they want their 
    generated password to be (8-128 chars (no less or more)
    2.2 prompt user asking if they want to include uppercase, lowercase, special chars, and numerics
  3. Validate input?
  4. generate a password @ random, within users specifications
  5. When password is generated, display to user, using alert or some kind of insertion through javascript
*/
var lowerCase = "abcdefghijklmnopqrstuvwxyz" 
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numeric = "123456789"
var specChars = "~!@#$%^&*_+=><?/|.,"

function generatePassword() 
{/////////////////////////// WRITE YOUR CODE HERE /////////////////////////
  var lengthConfirm = prompt("How long would you like your password to be? (\nMinimum of 8 Characters and Maximum of 128 Characters)")
  var lwrCaseConfirm = confirm("Would you like to include Lower Case letters?")
  var uppCaseConfirm = confirm("Would you like to include Upper Case letters?")
  var numericConfirm = confirm("Would you like to include numbers?")
  var specCharsConfirm = confirm("Would you like to include Special Characters?")


  var lwrCaseRNG = lowerCase[Math.floor(Math.random() * lowerCase.length)];
  var uppCaseRNG = upperCase[Math.floor(Math.random() * upperCase.length)];
  var numericRNG = numeric[Math.floor(Math.random() * numeric.length)];
  var specCharsRNG = specChars[Math.floor(Math.random() * specChars.length)];

  if(lwrCaseConfirm){
    
  }

}
  
  // document.getElementById("generate").innerHtml = prompt("Would you like to use lower case letters?");

// var btn = document.getElementsByClassName("btn");
// btn.addEventListener("click", generatePassword);

/*
  prompt?
  alert?
  confirm?
*/

/* Length checker
function stringLengthCheck(name, minlength, maxlength)
{
var mnlen = minlength;
var mxlen = maxlength;
 
if(name.value.length<mnlen || name.value.length> mxlen)
{ 
alert("Name should be " +mnlen+ " to " +mxlen+ " characters.");
return false;
}
else
{ 
return true;


*/