// function will compress any string without numbers if needed

const compress =  (string) => {
    let stringArray = string.split("");
    let compressedString = "";
    for (let i = 0; i < stringArray.length; i++) {
        let count = 1;
        let char = stringArray[i];
        if(char.search(/[a-z]/) > -1){
            while (i < stringArray.length - 1 && stringArray[i] == stringArray[i + 1]) {
                count++;
                i++;
            }
            compressedString += char + count;
            
        }else{

            compressedString += char;
           
        }
    }
    if(compressedString.length < string.length){
        return compressedString;
    }else{
        return string;
    }
}

// function will decompress string
const decompress =  (string) => {
    if(string.match(/[0-9]/g) == null){
        return string
    }
    let decompressedString = "";
    for (let i = 0; i < string.length;) {
        let char = string[i];
        let count = 0;
        i++;
        if(char.search(/[a-z]/) === -1){
            decompressedString += char;
        }
        while (i < string.length && parseInt(string[i]) >= 1 && parseInt(string[i]) <= 9) {
            console.log(parseInt(string[i]))
            count =  parseInt(count * 10) + parseInt(string[i]);
            i++;
        }
        while (count > 0) {
            decompressedString += char;
            count--;
        }
    }
    return decompressedString;
}


