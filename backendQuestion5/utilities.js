module.exports = {
    passwordLengthCheck:(password)=>{
        if (password.length < 8 || password.length > 12) {
            return false;
        }
        return true;

    },
    caseSensitiveCheck: (password)=>{
        if (password.search(/[a-z]/) < 0 || password.search(/[A-Z]/) < 0) {
            return false;
        }
            return true;
    },
    numberCheck:  (password)=>{
        if (password.match(/[0-9]/g) && password.match(/[0-9]/g).length < 3) {
            return false;
        }
            return true;
    },
    spaceCheck: (password)=>{
        if (password.match(/ /)) {
            return false;
        }
            return true;
    },
    repeatedLettersCheck: (password)=>{
        let valid = true;
        for (let i = 0; i < password.length; i++) {
            if (password[i + 4] === undefined) {
                break;
            }
            if (password[i] === password[i + 1] && password[i] === password[i + 2] && password[i] === password[i + 3] && password[i] === password[i + 4]) {
                console.log("invalid for repeated letters");
                valid = false;
                break;
            }
        }
        return valid;
    },
    repeatedNumbersCheck: (password)=>{
        let valid = true;
        for (let i = 0; i < password.length; i++) {
            if (password[i + 5] === undefined) {
                break;
            }
            if ((password.charCodeAt(i) >= 48 && password.charCodeAt(i) <= 57) && (password.charCodeAt(i + 1) >= 48 && password.charCodeAt(i + 1)) && (password.charCodeAt(i + 2) >= 48 && password.charCodeAt(i + 2) <= 57) && (password.charCodeAt(i + 3) >= 48 && password.charCodeAt(i + 3) <= 57) && (password.charCodeAt(i + 4) >= 48 && password.charCodeAt(i + 4) <= 57) && (password.charCodeAt(i + 5) >= 48 && password.charCodeAt(i + 5) <= 57)) {
                valid = false;
                break;
            }
    
        }
        return valid;
    },
    specialCharacterCheck: (password)=>{
        let valid = true;
        var specialCharArray = ["!", "\”", "#", "$", "%", "&", "\’", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
        let a = 0;
        let count = 0;
        while (a < specialCharArray.length) {
            for (let i = 0; i < password.length; i++) {
                if (specialCharArray[a] === password.charAt(i)) {
                    ++count;
                }
                if (count > 2) {
                    break;
                }
            }
            if (count > 2) {
                break;
            }
            a++;
        }
    
        if (count < 2) {
            valid = false;
        }
        return valid;
    },
    nameCheck: (password, firstName, lastName) => {
        let valid = true;
        let a = 0;
        for (let i = 0; i < password.length; i++) {
            if (password.slice(i, firstName.length + a++).toLowerCase() == firstName.toLowerCase()) {
                valid = false;
                break;
            }
        }
        a = 0;
        for (let i = 0; i < password.length; i++) {
            if (password.slice(i, lastName.length + a++).toLowerCase() == lastName.toLowerCase()) {
                valid = false;
                break;
            }
        }
        return valid;
    }
}



