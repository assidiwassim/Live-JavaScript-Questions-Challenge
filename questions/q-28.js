/**********************************************************************/
/************* RBK's Live JavaScript Questions Challenge **************/
/**********************************************************************/

function restParameterProblem(...theArgs) {
  let total = 0;
  for (const arg of theArgs) {
    total += arg;
  }
  return total;
}

console.log(restParameterProblem(1, 2, 3));
