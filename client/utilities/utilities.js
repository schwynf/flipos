export const  passwordLengthCheck = (password)=>{
    if (password.length < 8 || password.length > 12) {
        console.log("invalid for character count")
        return false
    }
    return true
}


export const caseSensitiveCheck = (password)=>{
    if (password.search(/[a-z]/) == -1 || password.search(/[A-Z]/) == -1) {
        console.log("invalid for no lowercase or uppercase letters");
        return false;
    }
        return true
}


export const numberCheck = (password)=>{
    if (password.match(/[0-9]/g) && password.match(/[0-9]/g).length < 3) {
        console.log("invalid for not enough numbers");
        return false;
    }
        return true;
}


export const spaceCheck = (password)=>{
    if (password.match(/ /)) {
        console.log("invalid for having space");
        return false;
    }
        return true;
}


export const repeatedLettersCheck = (password)=>{
    let valid = true;
    for (let i = 0; i < password.length; i++) {
        if (password[i + 4] === undefined) {
            break;
        }
        if (password[i] === password[i + 1] && password[i] === password[i + 2] && password[i] === password[i + 3] && password[i] === password[i + 4]) {
            console.log("invalid for repeated letters");
            var valid = false;
            break;
        }
    }
    return valid;
}

export const repeatedNumbersCheck = (password)=>{
    let valid = true;
    for (let i = 0; i < password.length; i++) {
        if (password[i + 5] === undefined) {
            break;
        }
        if ((password.charCodeAt(i) >= 48 && password.charCodeAt(i) <= 57) && (password.charCodeAt(i + 1) >= 48 && password.charCodeAt(i + 1)) && (password.charCodeAt(i + 2) >= 48 && password.charCodeAt(i + 2) <= 57) && (password.charCodeAt(i + 3) >= 48 && password.charCodeAt(i + 3) <= 57) && (password.charCodeAt(i + 4) >= 48 && password.charCodeAt(i + 4) <= 57) && (password.charCodeAt(i + 5) >= 48 && password.charCodeAt(i + 5) <= 57)) {
            console.log("invalid for repeated numbers");
            valid = false;
            break;
        }

    }
    return valid;
}

export const specialCharacterCheck = (password)=>{
    let valid = true;
    var specialCharArray = ["!", "\???", "#", "$", "%", "&", "\???", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
    let a = 0;
    let count = 0;
    while (a < specialCharArray.length) {
        for (let i = 0; i < password.length; i++) {
            if (specialCharArray[a] === password.charAt(i)) {
                ++count
            }
            if (count > 2) {
                break
            }
        }
        if (count > 2) {
            break
        }
        a++;
    }

    if (count < 2) {
        console.log("invalid for special character count");
        valid = false;
    }
    return valid;
}