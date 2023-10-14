/**********************************************************************/
/************* RBK's Live JavaScript Questions Challenge **************/
/*********************** Question-4 - Error handling ******************/
/*****************************  30 seconds ****************************/

try {
  var x = 1;
  {
    var x = 2;
  }
  console.log(x);
} catch (err) {
  console.log(err);
}
