//global variables
let passwordLength = 0;
let passwordLengthChecker = Number(passwordLength);
let length=0;
let secretWord = "";
let masterArray = [];
let lowerArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let upperArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let numArr = [0,1,2,3,4,5,6,7,8,9];
let useNumbers;
let useLowerCase;
let useUpperCase;





//grabbing html elements
let generateBtn = document.querySelector("#gen");
let copyBtn = document.querySelector("#copy");
let passwordBox = document.querySelector("#pass-final");





//prompts user to choose password length and alerts if not within range
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





//selects contents of master array based on user input
function generateMasterArray(num, upper, lower) {
    console.log("num"+ num);

    if(num==true){
        for(let i=0; i<numArr.length;i++){
            masterArray.push(numArr[i]);
        }
    }
    console.log("upper"+ upper);

    if(upper==true){
        for(let i=0; i<lowerArr.length;i++){
            masterArray.push(lowerArr[i]);
        }
    }
    console.log("lower"+ lower);

    if(lower==true){
        for(let i=0; i<upperArr.length;i++){
            masterArray.push(upperArr[i]);
        }
    }
        
    console.log(masterArray);
        //call fx to call seceret word (we need to pass in the master array, the isNum, isUpper, isLower)
    generateSecretWord(masterArray, num, upper, lower);
}





//prompts user to select whether or not to include characters from each criteria
function chooseCriteria() {
    alert("Please choose from the 3 criteria");
    let useNumbers = confirm("Would you like to use numerical characters?");
    let useUpperCase = confirm("Would you like to use uppercase characters?");
    let useLowerCase = confirm("Would you like to use lowercase characters?");

    while (useLowerCase == false && useNumbers == false && useUpperCase === false) {
        chooseCriteria();
    }
    generateMasterArray(useNumbers,useUpperCase,useLowerCase);
}





//allows password to be copied to clipboard
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





//to do: need to create a checking mech to make sure all test cases met
//how are we going to do that?
let generateSecretWord = function (masterArray, isNum, isUpper, isLower) {
    console.log(masterArray);
    //event.preventDefault();
    let secretWord = "";
    for(let i=0;i<passwordLengthChecker;i++) {
        //we will have conditionals occur, once done, let it do the normal randomization
        //we know secretword is a string.. typeof() fx that returns out type
        //there is a includes function that takes in a string and returns true or false
    secretWord+=masterArray[Math.floor(Math.random()*((masterArray.length-1)-0)+0)];
    console.log(secretWord);
}
    passwordBox.textContent = secretWord;
}





//on click listeners
generateBtn.addEventListener("click", chooseLengthCorrectly);
copyBtn.addEventListener("click" , copyText);