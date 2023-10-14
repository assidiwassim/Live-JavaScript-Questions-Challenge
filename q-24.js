/**********************************************************************/
/************* RBK's Live JavaScript Questions Challenge **************/
/******************** Question-22 - Manage Objects ********************/
/****************************** 90 seconds ****************************/

let obj = { a: 10, b: 20, c: 30 };

const result = ["a", "a", "b", "a"].reduce((acc, val) => {
  return acc + obj[val];
}, 10);

console.log(result);
