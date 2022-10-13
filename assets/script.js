///////////////////////// DO NOT CHANGE ////////////////////////////////////
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  passwordText.value = password;//this keeps returning errors stopping my JS from working
  var password = generatePassword();// this is the function we are creating
  var passwordText = document.querySelector("#password");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
///////////////////////// DO NOT CHANGE ABOVE HERE /////////////////////////
/* 1. prompt asking if you want to generate a password
   2. prompt for password criteria
    2.1 prompt user asking how long they want their 
    generated password to be (8-128 chars (no less or more)
    2.2 prompt user asking if they want to include uppercase, lowercase, special chars, and numerics
  3.  Validate input?
  4. generate a password @ random, within users specifications
  5. When password is generated, display to user, using alert or some kind of insertion through javascript
*/
var lowerCase = "abcdefghijklmnopqrstuvwxyz" 
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numeric = "123456789"
var specChars = "~!@#$%^&*_+=><?/|.,"

function generatePassword() 
{
  /////////////////////////// WRITE YOUR CODE HERE /////////////////////////



  var btnClicked = function ()
  {confirm("would you like to generate a password");

      if(confirm) {
        prompt("Would you like to use Lower Case letters? Type yes or no")
      }
  }

  btnClicked = document.getElementById("generate").onclick = function() { 
    writePassword()
  };
}

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