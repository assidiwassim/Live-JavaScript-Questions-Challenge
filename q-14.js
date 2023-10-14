/**********************************************************************/
/************* RBK's Live JavaScript Questions Challenge **************/
/************************ Question-14 - Manage Array ******************/
/****************************** 60 seconds ****************************/

var numbers = [1, 2, 3, 2, 4, 5, 5, 6, 7, 7];

var arr = numbers.filter(function(number, index, array) {
  return array.indexOf(number) !== index;
});

console.log(arr);
