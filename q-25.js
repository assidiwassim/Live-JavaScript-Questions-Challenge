/**********************************************************************/
/************* RBK's Live JavaScript Questions Challenge **************/
/******************** Question-22 - Manage Objects ********************/
/****************************** 90 seconds ****************************/

function manipulateString(inputString) {
  if (!inputString || typeof inputString !== 'string') {
    return "Please provide a valid string as input.";
  }

  const firstChar = inputString.charAt(0).toUpperCase();
  const remainingChars = inputString.substring(1).toLowerCase();

  return firstChar + remainingChars;
}
console.log(manipulateString("hello")); 