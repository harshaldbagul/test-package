function isPalindromString(str) {
  if (!isString(str)) throw "Not an string";
  const revStr = str.split("").reverse().join("");
  return str === revStr;
}

function isString(str) {
  return typeof str === "string" || str instanceof String;
}

function isNumber(num) {
  return typeof num === "number" || num instanceof Number;
}

function isEven(num) {
  if (!isNumber(num)) throw "Not an number";
  return num % 2 === 0;
}

module.exports = { isString, isPalindromString, isEven };
