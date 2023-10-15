/**********************************************************************/
/************* RBK's Live JavaScript Questions Challenge **************/
/**********************************************************************/

var numbers = [1, 2, 3, 4, 5];

var val = numbers.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue;
}, 0); 

console.log(val);
