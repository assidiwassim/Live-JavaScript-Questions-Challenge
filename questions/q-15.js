/**********************************************************************/
/************* RBK's Live JavaScript Questions Challenge **************/
/**********************************************************************/

async function main(){
  console.log("1");

  await new Promise(function (resolve) {
    setTimeout(function () {
      console.log("2");
      resolve()
    }, 0);
  });
  
  console.log("3");
}

main()


