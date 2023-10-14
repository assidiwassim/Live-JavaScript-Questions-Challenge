/**********************************************************************/
/************* RBK's Live JavaScript Questions Challenge **************/
/*********************** Question-4 - Error handling ******************/
/*****************************  30 seconds ****************************/

var x = 1;

function example(x) {
  try {
    x++;
  } catch (err) {
    console.log(err);
  }
}
example();

console.log(x);
