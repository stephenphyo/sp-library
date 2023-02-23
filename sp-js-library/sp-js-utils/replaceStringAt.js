const replaceStringAt = (str, index, newChar) => {
    var newString = '';
    for (let charIndex = 0; charIndex < str.length; charIndex++) {
        if (charIndex === index) {
            newString += newChar;
        } else {
            newString += str.charAt(charIndex);
        }
    }
    return newString;
}

export default replaceStringAt;
