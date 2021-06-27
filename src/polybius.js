// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {

  //declaring all of the arrays im gonna need to encode and decode messages. the reason there are 2 arrays is
  //because when encoding, 'i' and 'j' need to be seen as different chars where when decoding, they must be
  //seen at the same index
  const encodeAlpha = [
    'a', 'b', 'c', 'd',
    'e', 'f', 'g', 'h',
    'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p',
    'q', 'r', 's', 't',
    'u', 'v', 'w', 'x',
    'y', 'z'
]

const decodeAlpha = [
  'a', 'b', 'c', 'd',
  'e', 'f', 'g', 'h',
  '(i/j)', 'k', 'l',
  'm', 'n', 'o', 'p',
  'q', 'r', 's', 't',
  'u', 'v', 'w', 'x',
  'y', 'z'
]

//i included '42' twice in the encode numbers array because both 'i' and 'j' are supposed to be
//42, so i matched both of their indexes with 42.
const encodeNums = [
    '11', '21', '31', '41', '51',
    '12', '22', '32', '42', '42', '52',
    '13', '23', '33', '43', '53',
    '14', '24', '34', '44', '54',
    '15', '25', '35', '45', '55'
]

const decodeNums = [
  '11', '21', '31', '41', '51',
  '12', '22', '32', '42', '52',
  '13', '23', '33', '43', '53',
  '14', '24', '34', '44', '54',
  '15', '25', '35', '45', '55'
]

  function polybius(input, encode = true) {

    //? we should only perform this first check if the user wants to decode
    if (!encode) {

      //here, we put the input string into an array, separating each index by the space in between the 
      //encoded words
       const split = input.split(' ');

       //we then loop through the array and check that the length of each index is even, and if not, 
       //we immediately return false
        for (let i = 0; i < split.length; i++) {
          if (split[i].length % 2 !== 0) return false;
        }

        //we then invoke the decode helper function, 
        return _decode(input)

        //else, we just skip all of that and invoke the encode helper function
    } else return _encode(input)
  }


//? i chose to use helper functions to improve the readability of the code and make it easier
//? to follow along.


//*helper function used to encode the message
function _encode(input) {
  
  //this spreads the input message into a new array to iterate through
  let inputString = [...input]

  for (let i = 0; i < inputString.length; i++) {

    //here we use reduce to go through every letter in the message
    return inputString.reduce((acc, letter) => {

      //if the current variable we are on is a letter, encode it
      if (encodeAlpha.includes(letter)) {
        acc += encodeNums[encodeAlpha.indexOf(letter)]

        //if its not a letter, jsut push it anyway because its a space and we want to
        //keep spaces
      } else {
        acc += letter;
      }

      //return encoded message!!!
      return acc;
    }, "")
  }
}

//*helper function used to decode the message
function _decode(input) {

  //we have to delcare an empty array to push results into
  let resultArray = [];

  //here, we split the input by its spaces into an array
  let splitString = input.split(' ')

  //we then have to loop over every index in that array and decode it
  for (let i = 0; i < splitString.length; i++) {

    //this line takes the current index and splits it again, this time only every
    //2nd variable. it splits like this so we have an array of 2 digit long numbers
    //that match the polybius table. we do this for every individual word we loop over
    let word = splitString[i].match(/.{1,2}/g);

    //we delcare another empty variable to push indiviual decoded words into. this
    //variable resets to empty everytime we restart the loop, so we can fill it with
    //the next word.
    let resultWord = '';

    //we have to loop through the array of 2 digit numbers we created and match them to
    //their corresponding index in the decodeAlpha array
    for (let j = 0; j < word.length; j++) {

      //we push every matched letter individually to the empty string we created
      resultWord += decodeAlpha[decodeNums.indexOf(word[j])]
    }

    //everytime we finish a word, we push it to the empty array we created
    resultArray.push(resultWord);
  }

  //finally, we join the array together into a string with spaces in between every index
  return resultArray.join(' ')
}


  return {
    polybius,
  };
})();


module.exports = { polybius: polybiusModule.polybius };
