/**********************************************************************/
/************* RBK's Live JavaScript Questions Challenge **************/
/**********************************************************************/

var students = [
  { name: "a", score: 85 },
  { name: "b", score: 92 },
  { name: "c", score: 88 },
  { name: "d", score: 95 },
];

var arr = students.filter(function (student) {
  return student.score >= 90;
});

console.log(arr);
