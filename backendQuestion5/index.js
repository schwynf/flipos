let {nameCheck,passwordLengthCheck,caseSensitiveCheck,numberCheck,spaceCheck,repeatedLettersCheck,repeatedNumbersCheck,specialCharacterCheck } = require("./utilities");


const passwordValidator = (password,firstName,lastName) => {

    if(!passwordLengthCheck(password)){
        return false;
    }
    if(!caseSensitiveCheck(password)){
        return false;
    }
    if(!numberCheck(password)){
        return false;
    }
    if(!spaceCheck(password)){
        return false;
    }
    if(!repeatedLettersCheck(password)){
        return false;
    }
    if(!repeatedNumbersCheck(password)){
        return false;
    }
    if(!specialCharacterCheck(password)){
        return false;
    }
    if(!nameCheck(password,firstName,lastName)){
        return false;
    }

    return true;
};

console.log(passwordValidator("schwy@@I908", "schwyn", "francis"))