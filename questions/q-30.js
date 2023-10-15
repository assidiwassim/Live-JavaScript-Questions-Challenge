/**********************************************************************/
/************* RBK's Live JavaScript Questions Challenge **************/
/**********************************************************************/

function jsonParseProblem(a) {
  try {
    const b = JSON.parse(a);
    console.log(b > 0);
  } catch (err) {
    console.log(err);
  }
}

jsonParseProblem("123456789");
