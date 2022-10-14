///////////////////////// DO NOT CHANGE ////////////////////////////////////
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); // this is the function we are creating
  var passwordText = document.querySelector("#password");
  passwordText.value = password;//this was @ line 7, moved it below the declaration of the variable to have it stop returning errors,which was preventing the code from running
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
const lowerCase = "abcdefghijklmnopqrstuvwxyz" 
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const numeric = "123456789"
const specChars = "~!@#$%^&*_+=><?/|.,"

function generatePassword() 
{/////////////////////////// WRITE YOUR CODE HERE /////////////////////////
// sets the minimum and maximum length for the password
  const minLength = 8;
  const maxLength = 128;
// asks the user how many characters long they would like their password to be, and stores the input as a value for lengthConfirm
  var lengthConfirm = prompt("How long would you like your password to be? \n(Minimum of 8 Characters and Maximum of 128 Characters)"); 
// when user enters valid number in prompt, it will store the value in the variable ^

// verifies the users number input should be between 8 and 128 characters, and returns a "try again" if false
  if(lengthConfirm >= minLength && lengthConfirm <= maxLength){
    console.log(lengthConfirm);
  } else {
    alert("Not a valid number, please try again!");
    return;
  }

  let userChoices = "";

// lower case confirm and input

  var lwrCaseConfirm = confirm("Would you like to include Lower Case letters?")
  if (lwrCaseConfirm) {
    userChoices += lowerCase;
    console.log(userChoices);
  }

// upper case confirm and input

  var uppCaseConfirm = confirm("Would you like to include Upper Case letters?");
  if (uppCaseConfirm) {
    userChoices += upperCase;
    console.log(userChoices);
  }

// number case confirm and input

  var numericConfirm = confirm("Would you like to include numbers?");
  if (numericConfirm) {
    userChoices += numeric;
    console.log(userChoices);
  }

// Symbols case confirm and input

  var specCharsConfirm = confirm("Would you like to include Special Characters?");
  if (specCharsConfirm) {
    // userChoices += specChars[Math.floor(Math.random() * specChars.length)]
    // the math.random was only pulling 1 piece out of the string. Objective is to aquire the whole string for randomization
    //should look like this \/
    userChoices += specChars;
    console.log(userChoices);
  }

  //attempting to generate characters @ random until user input number is hit
  
  for (var i = 0; i < lengthConfirm; i++ ) { // dropped the = from <= and .length from lengthConfirm.length on this line
    let password = " "
    
    password += userChoices[Math.floor(Math.random() * userChoices.length)]; // the line will only return 1 character at a time vs my objective of getting it in user input desired length
    // console.log(userChoices)
    alert("Your generated password is: " + password); // acceptable for the criteria but would be nice to get it into the box  
    console.log(password);
  }
}

// document.write(password).innerHtml = "#password" //might work for inputting generated password into readOnly textArea?