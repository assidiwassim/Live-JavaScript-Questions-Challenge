/**********************************************************************/
/************* RBK's Live JavaScript Questions Challenge **************/
/**********************************************************************/

function manipulateString(inputString) {
  let camelString = "";
  for (let i = 0; i < inputString.length; i++) {
    if (i % 2 === 0) {
      camelString += inputString[i].toUpperCase();
    } else {
      camelString += inputString[i].toLowerCase();
    }
  }
  return camelString;
}
console.log(manipulateString("Hello world"));
