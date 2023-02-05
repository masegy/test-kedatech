const isPalindrome = require("./isPalindrome");

function testIsPalindrome(str, expectedResult) {
  let result = isPalindrome(str);
  console.log(result === expectedResult ? "PASS" : "FAIL", str);
}

testIsPalindrome("katak", true);
testIsPalindrome("bukan", false);
testIsPalindrome("malam", true);
