// PseudoCode

// Create a function that capitalizes the first character and lowercases everything else
// Accepts a string and returns a capitalized string
    // Access the first character in the given string and raise the case and store in a variable
    // Access all characters after the first character and lower the case
    // return string after combining the first raised first character and the rest of the string that has been lower cased

// .toUpperCase, .toLowerCase, .slice/.substring

let firstNameInput = "tOrIA";

function capitalizStr(str){
    let firstChar = str.charAt(0);

    let restOfStr = str.slice(1);

    return firstChar.upperCase() + restOfStr.toLowerCase();
}
let capitalizedFirstName = capitalizeStr(firstNameInput);

console.log(capitalizedFirstName);