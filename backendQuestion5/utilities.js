module.exports = {
    passwordLengthCheck:(password)=>{
        if (password.length < 8 || password.length > 12) {
            return false;
        }
        return true;

    },
    caseSensitiveCheck: (password)=>{
        if (password.search(/[a-z]/) == -1 || password.search(/[A-Z]/) == -1) {
            return false;
        }
            return true;
    },
    numberCheck:  (password)=>{
        if (!password.match(/[0-9]/g)) {
            return false;
        }
        if(password.match(/[0-9]/g).length < 3){
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
            if (parseInt(password.charAt(i)) && parseInt(password.charAt(i + 1)) && parseInt(password.charAt(i + 2)) && parseInt(password.charAt(i + 3)) && parseInt(password.charAt(i + 4)) && parseInt(password.charAt(i + 5))) {
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
                if (count >= 2) {
                    break;
                }
            }
            if (count >= 2) {
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
        if(password.search(firstName) > -1 || password.search(lastName) > -1){
            return false
        }
        return valid;
    }
}