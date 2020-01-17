let passwordLength = prompt("How long would you like to make your password?"); //remember to parseInt
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




function choseLengthCorrectly () {
    alert("You must select a password length between 8 and 128");
    let passwordLength = prompt("How long would you like to make your password?");
    passwordLengthChecker = Number(passwordLength);
}




function chooseCriteria() {
    alert("Please choose from the 3 criteria");
    let useNumbers = confirm("Would you like to use numerical characters?");
    let useUpperCase = confirm("Would you like to use uppercase characters?");
    let useLowerCase = confirm("Would you like to use lowercase characters?");
}




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




let generateSecretWord = function () {
    event.preventDefault();
    var secretWord = "";
    for(let i=0;i<passwordLengthChecker;i++) {
    secretWord+=masterArray[Math.floor(Math.random()*((masterArray.length-1)-0)+0)];
    console.log(secretWord);
    }
    passwordBox.textContent = secretWord;
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




while (passwordLengthChecker < 8 || passwordLengthChecker > 128) {
    choseLengthCorrectly();
}





while (useLowerCase == false && useNumbers == false && useUpperCase === false) {
    chooseCriteria();
}

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







