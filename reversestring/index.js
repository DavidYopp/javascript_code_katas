// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  // return str.split("").reverse().join("");
  let revstr = "";
  // for (let i=str.length-1;i>=0;i--) {
  //   revstr += str[i];
  // }

  for (let character of str) {
    revstr = character + revstr;
    debugger;
  }
  return revstr;
  // return str.split('').reduce((rev, char) => char + rev, '');
  // return revstr;
}

reverse('asdf');

module.exports = {reverse};
