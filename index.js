function isPalindromString(str) {
  if (!isString(str)) throw "Not an string";
  const revStr = str.split("").reverse().join("");
  return str === revStr;
}

function isString(str) {
 return typeof str === "string" || str instanceof String;
}

module.exports = { isString, isPalindromString };
