/**********************************************************************/
/************* RBK's Live JavaScript Questions Challenge **************/
/*********************** Question-5 - Closure *************************/
/****************************** 60 seconds ****************************/

function createCounter() {
  var count = 0;
  count++;
  return function() {
    count++;
    console.log(count);
  };
}

var counter = createCounter();
counter(); 


















/*
*  output => Error : ReferenceError: x is not defined
*  let & const => block scope 
*/