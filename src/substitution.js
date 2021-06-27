// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  function substitution(input, alphabet, encode = true) {

    //return false if substitution alphabet doesnt exist
    if (!alphabet) return false;


    //check to see if the substitution alphabet is actually 26 characters long
    if (alphabet.length !== 26) return false;
    
    //here we invoke a function the checks for duplicate letters in the substitution alphabet, and if there are
    //any, returns false
    if (_hasDuplicates(alphabet)) return false;

    //? i chose to use helper functions to improve the readability of the code and make it easier
    //? to follow along.

    //if the user wishes to encode, we invoke the encode function and return the result
    if (encode) return _encode(input, alphabet);

    //likewise for the decode function
    else return _decode(input, alphabet);
  }


  //* this helper function creates a new "set" type object, which can only contain unique values. if there are any
  //* duplucate values in the input array, then the size of the set will not equal the length of the array. therefore, 
  //* we can return false.
  function _hasDuplicates(arr) {
    return new Set(arr).size !== arr.length;
  }
  
  
  //*helper function used to encode the message
  function _encode(input, alphabet) {
  
    //next 2 lines set up our regular, in-order, alphabet array of letters. here, 'real' aplhabet refers
    //to the normal alphabet in order.
    const realAlphabet = "abcdefghijklmnopqrstuvwxyz";
    const realAlphabetArray = [...realAlphabet];
  
    //spread the substitution alphabet into an array in the same fashion as the 'real' alphabet array.
    const substitueArray = [...alphabet];
  
    //spread the input message into an array as well. i spread all these variables to make them
    //easier to iterate through.
    let inputString = [...input];
  
    for (let i = 0; i < input.length; i++) {
  
      //using reduce method to iterate over evey letter in our input string array
      return inputString.reduce((acc, letter) => {
  
        //this checks if the current iteration value is a letter in the alphabet or not,
          //and if so, encodes it and adds it to the output string
        if (realAlphabetArray.includes(letter)) {
          acc += substitueArray[realAlphabetArray.indexOf(letter)];
  
          //else, if its non-alphabetic, ignore and just push to the output string
        } else {
          acc += letter;
        }
  
        //return our final string
        return acc;
      }, "");
    }
  }
  
  function _decode(input, alphabet) {
    const realAlphabet = "abcdefghijklmnopqrstuvwxyz";
    const realAlphabetArray = [...realAlphabet];
    const substitueArray = [...alphabet];
    let inputString = [...input];
    for (let i = 0; i < input.length; i++) {
      return inputString.reduce((acc, letter) => {
  
        //? here, for the decode function, everything works and flows the same way,
        //? we just swap the substitueArray and alphabetArray variables around in these if 
        //? statements below, thus reversing the encryption
  
        if (substitueArray.includes(letter)) {
          acc += realAlphabetArray[substitueArray.indexOf(letter)];
        } else {
          acc += letter;
        }
        return acc;
      }, "");
    }
  }

  return {
    substitution,
  };
})();





module.exports = { substitution: substitutionModule.substitution };