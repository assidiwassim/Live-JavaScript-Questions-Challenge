/**********************************************************************/
/************* RBK's Live JavaScript Questions Challenge **************/
/******************** Question-9 - Callback Hell **********************/
/****************************** 60 seconds ****************************/

function step1(callback) {
  setTimeout(function () {
    console.log("10");
    callback();
  }, 1000);
}

function step2(callback) {
  setTimeout(function () {
    console.log("11");
    callback();
  }, 1000);
}

function step3() {
  setTimeout(function () {
    console.log("12");
  }, 1000);
}

step1(function () {
  step2(function () {
    step3();
  });
});
