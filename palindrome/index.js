// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  return str.split('').every((char, i)=>{
    return char === str[str.length - i -1];
  });
  // let revstr = ""
  // for (let char of str) {
  //   revstr = char + revstr;
  // }
  // return revstr === str;
  // const revstr = str.split('').reverse().join('')
  // const revstr = str.split('').reduce((rev, char) => char + rev, '');
  // return revstr === str;
}

module.exports = palindrome;
