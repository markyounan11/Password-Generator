let passwordLength = 0;
let passwordLengthChecker = Number(passwordLength);
let length=0;
let secretWord = "";
let masterArray = [];
let lowerArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let upperArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let numArr = [0,1,2,3,4,5,6,7,8,9];



let generateBtn = document.querySelector("#gen");
let copyBtn = document.querySelector("#copy");
let passwordBox = document.querySelector("#pass-final");




function chooseLengthCorrectly() {
    passwordLength = prompt("How long would you like to make your password?");
    passwordLengthChecker = Number(passwordLength);

    if (passwordLengthChecker < 8 || passwordLengthChecker > 128) {
        alert("You must select a password length between 8 and 128");
        chooseLengthCorrectly();
    } else if (passwordLengthChecker >= 8 && passwordLengthChecker <= 128){
        chooseCriteria();
    }
}
    chooseLengthCorrectly();



function chooseCriteria() {
    alert("Please choose from the 3 criteria");
    let useNumbers = confirm("Would you like to use numerical characters?");
    let useUpperCase = confirm("Would you like to use uppercase characters?");
    let useLowerCase = confirm("Would you like to use lowercase characters?");

    while (useLowerCase == false && useNumbers == false && useUpperCase === false) {
        chooseCriteria();
    }



}
generateSecretWord();

let generateSecretWord = function () {
    //event.preventDefault();
    let secretWord = "";
    for(let i=0;i<passwordLengthChecker;i++) {
    secretWord+=masterArray[Math.floor(Math.random()*((masterArray.length-1)-0)+0)];
    console.log(secretWord);
}
    passwordBox.textContent = secretWord;
}
generateSecretWord();




function generateMasterArray() {

    if(useNumbers==true){
        for(let i=0; i<numArr.length;i++){
            masterArray.push(numArr[i]);
        }
    }
    
    if(useLowerCase==true){
        for(let i=0; i<lowerArr.length;i++){
            masterArray.push(lowerArr[i]);
        }
    }
    
    if(useUpperCase){
        for(let i=0; i<upperArr.length;i++){
            masterArray.push(upperArr[i]);
        }
            // masterArray.push(upperArr[ Math.floor(Math.random() * upperArr.length) ]);
    }
    
    console.log(masterArray);
    return masterArray;
}








let copyText = function () {
    let copyText = document.getElementById("pass-final");
    let textArea = document.createElement("textarea");
    textArea.value = copyText.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("Copy");
    alert("Your generated password has been copied to the clipboard!");
    textArea.remove();
}



generateBtn.addEventListener("click", generateSecretWord);
copyBtn.addEventListener("click" , copyText);










//dynamically append secretword to frontend
//get element by ID
//event listener for button
//create function that captures secretWord
//call secretWord



//set 
//then call ran values from the array based on the length

//return the value
//append to frontend

// shuffle method





// alert("Welcome to Lawrence's Password Generator!");
// let passLength = prompt("How many characters would you like your password to be? Must be between 8 and 128.");
// let passLengthChecker = Number(passLength);
// let charTypeSpec = confirm("Would you like these special characters, which includes a space?  !\"/#$%&'()*+,-./:;<=>?@[\\]^_`{|}~");
// let charTypeNum = confirm("Would you like numeric characters 0-9?");
// let charTypeLower = confirm("Would you like lowercase characters?");
// let charTypeUpper = confirm("Would you like uppercase characters?");

// // Varibles for buttons

// let generateBtn = document.querySelector("#gen");
// let copyBtn = document.querySelector("#copy");
// let passwordBox = document.querySelector("#pass-final");

// // Initial Varibales with different sets of characters to select from

// let specialChars = " !\"/#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
// let numChars = "0123456789";
// let lowerChars = "abcdefghijklmnopqrstuvwxyz";
// let upperChars = lowerChars.toUpperCase();

// let charListFinal = "";

// // Helper function to check and make sure user selected password length between 8-128

// let o = function () {
//     alert("You must select a password length between 8 and 128");
//     passLength = prompt("How many characters would you like your password to be? Must be between 8 and 128.");
//     passLengthChecker = Number(passLength);
// }

// // Helper function to check to make sure at least one type of character is selected

// let choseCharList = function () {
//     alert("You must select at least one of the 4 character types.");
//     charTypeSpec = confirm("Would you like special characters?");
//     charTypeNum = confirm("Would you like numeric characters?");
//     charTypeLower = confirm("Would you like lowercase characters?");
//     charTypeUpper = confirm("Would you like uppercase characters?");
    
// }
// // Helper function to make final character list to select from for password generation and then returns the completed list

// let generateFinalCharList = function () {
    
//     if (charTypeSpec === true) {
//         charListFinal += specialChars;
//     }
//     if (charTypeNum === true) {
//         charListFinal += numChars;
//     }
//     if (charTypeLower === true) {
//         charListFinal += lowerChars;
//     }
//     if (charTypeUpper === true) {
//         charListFinal += upperChars;
//     }
//     return charListFinal;
// }

// // Function to generate a random password and place password into password div

// let generatePass = function () {
//     event.preventDefault();
//     let pass = "";
//     let charList = generateFinalCharList()
//     for (let i = 0; i < passLength; i ++) {
//         pass += charList[Math.floor(Math.random() * charList.length)];
//     }
//     passwordBox.textContent = pass;
// }

// // Copy generated password to the clipboard

// let copyText = function () {
//     let copyText = document.getElementById("pass-final");
//     let textArea = document.createElement("textarea");
//     textArea.value = copyText.textContent;
//     document.body.appendChild(textArea);
//     textArea.select();
//     document.execCommand("Copy");
//     alert("Your generated password has been copied to the clipboard!");
//     textArea.remove();
//    }

// // When buttons are clicked event listeners

// generateBtn.addEventListener("click", generatePass);
// copyBtn.addEventListener("click" , copyText);

// // While loops until the user selects a character type
// while (passLengthChecker < 8 || passLengthChecker > 128) {
//     o();
// }
// while (charTypeLower == false && charTypeNum == false && charTypeSpec == false && charTypeUpper === false) {
//     choseCharList();
// }