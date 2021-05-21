// function will compress string

const compress = (string) => {
    let compressedString = "";
    for (let i = 0; i < string.length; i++) {
        let count = 1;
        let char = string.charAt(i);
        while (string.charAt(i) == string.charAt(i + 1)) {
            count++;
            i++;
        }
        compressedString += char + count;
    }
    if (compressedString.length < string.length) {
        return compressedString;
    } else {
        return string;
    }
}

// function will decompress string

const decompress = (string) => {
    if (string.search(/[0-9]/) == -1) {
        return string;
    }
    let decompressedString = "";
    let i = 0;
    while (i < string.length) {
        let char = string[i];
        let count = 0;
        while (parseInt(string.charAt(i + 1)) > -1) {
            count = count * 10 + parseInt(string.charAt(i + 1));
            i++;
        }
        while (count > 0) {
            decompressedString += char;
            count--;
        }
        i++;
    }
    return decompressedString;
}
