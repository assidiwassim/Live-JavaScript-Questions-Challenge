/**********************************************************************/
/************* RBK's Live JavaScript Questions Challenge **************/
/******************** Question-29 - Problem solving *******************/
/****************************** 90 seconds ****************************/

const numbers = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < 5; i++) {
  if (i % 2 === 0) sum += numbers[i];
}

console.log(sum);
