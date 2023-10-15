/**********************************************************************/
/************* RBK's Live JavaScript Questions Challenge **************/
/**********************************************************************/
async function step1() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log("2");
      resolve();
    }, 1000);
  });
}
async function step2() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log("1");
      resolve();
    }, 1000);
  });
}
async function step3() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log("0");
      resolve();
    }, 1000);
  });
}
step1()
  .then(() => step2())
  .then(() => step3())
  .catch((error) => {
    console.error("An error occurred");
  });
