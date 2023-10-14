/**********************************************************************/
/************* RBK's Live JavaScript Questions Challenge **************/
/******************** Question-22 - Manage Objects ********************/
/****************************** 90 seconds ****************************/

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
