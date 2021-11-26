const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

function upperFirstChar(word) {
  return word[0].toUpperCase() + word.slice(1)
}

function capitilizeString (string) {
  const wordsArray = string.split(" ");
  const uppArray = wordsArray.map(upperFirstChar)
  return uppArray.join(" ")
}

// const titleCased = (stingArray) => {
//   return stingArray.map(capitilizeString)
// }

function titleCased() { 
  return tutorials.map(capitilizeString)
}

titleCased()