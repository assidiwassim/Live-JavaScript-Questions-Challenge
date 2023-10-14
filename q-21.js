/**********************************************************************/
/************* RBK's Live JavaScript Questions Challenge **************/
/************** Question-21 - Manage Rest Parameter  ******************/
/****************************** 90 seconds ****************************/

function restParameterProblem(...theArgs) {
  let total = 0;
  for (const arg of theArgs) {
    total += arg;
  }
  return total;
}

console.log(restParameterProblem(1, 2, 3));
