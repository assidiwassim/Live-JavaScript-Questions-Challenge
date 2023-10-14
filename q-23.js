/**********************************************************************/
/************* RBK's Live JavaScript Questions Challenge **************/
/******************** Question-22 - Manage Objects ********************/
/****************************** 90 seconds ****************************/

function jsonParseProblem(a) {
  try {
    const b = JSON.parse(a);
    console.log(b > 0);
  } catch (err) {
    console.log(err);
  }
}

jsonParseProblem("123456789");
