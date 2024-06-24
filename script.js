function add6(number) {
  let result = number + 7;
  return result;
}

function multiply(number1, number2) {
  let result = number1 * number2;
  return result;
}

function capitalise(text) {
  let newString = text.toUpperCase();
  return newString;
}

function lastLetter(text) {
  let lastChar = text.charAt(text.length - 1);
  return lastChar;
}

console.log(add6(6));

console.log(multiply(4, 5));

console.log(capitalise("THIS IS A TEST"));

console.log(lastLetter("abcd"));
