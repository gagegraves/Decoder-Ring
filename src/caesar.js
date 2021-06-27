// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  function caesar(input, shift, encode = true) {
    //a check to see if the shift value input by the user is too big, too small,
    //0, or doesnt exist
    if (!shift || shift == 0 || shift >= 26 || shift <= -26) return false;

    //? i chose to use helper functions to improve the readability of the code and make it easier
    //? to follow along.

    //if the user wishes to encode, we invoke the encode function and return the result
    if(encode) return _encode(input, shift);

    //likewise for the decode function
    else return _decode(input, shift);
  }


  //*helper function used to encode the message
function _encode(input, shift) {

  //next 2 lines set up our regular, in-order, alphabet array of letters
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const alphabetArray = [...alphabet]

  //this sets all capital letters to lowercase, thus ignoring capital letters
  let string = input.toLowerCase();

    //spread the input string into an array
    let inputString = [...string]

    //declare a variable for how far to shift the chars
    let shiftAmount = 0;


    for (let i = 0; i < input.length; i++) {

      //using reduce method to iterate over evey letter in our input string array
      return inputString.reduce((acc, letter) => {

        //here, we calculate how far to shift the letter based on 
        //the index of the letter in it's instance in the alphabet array
        shiftAmount = alphabetArray.indexOf(letter) + shift;

        //these next 2 if checks are for wrapping the letters around 
        //the alphabet if you hit the end or beginning of the array
        if (shiftAmount > 25) shiftAmount -= 26;
        else if (shiftAmount < 0) shiftAmount += 26;

        //this checks if the current iteration value is a letter in the alphabet or not,
        //and if so, encodes it and adds it to the output string
        if (alphabetArray.includes(letter)) {
          acc += alphabetArray[shiftAmount];

          //else, if its non-alphabetic, ignore and just push to the output string
        } else {
          acc += letter;
        }
        //return our final string
        return acc;
      }, "")
    }
}

//*helper function for decoding
function _decode(input, shift) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const alphabetArray = [...alphabet]
    let string = input.toLowerCase();
    let inputString = [...string]
    let shiftAmount = 0;
    for (let i = 0; i < input.length; i++) {
      return inputString.reduce((acc, letter) => {

        //? the only difference between this function and the encode function is that
        //? we subtract the shift amount from the index of the letter in the alphabet
        //? array instead of adding to it, so it reverses the encryption
        
        shiftAmount = alphabetArray.indexOf(letter) - shift;
        //!                                         ^ right here

        if (shiftAmount > 25) shiftAmount -= 26;
        else if (shiftAmount < 0) shiftAmount += 26;
        if (alphabetArray.includes(letter)) {
          acc += alphabetArray[shiftAmount];
        } else {
          acc += letter;
        }
        return acc;
      }, "")
    }
}


  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };


