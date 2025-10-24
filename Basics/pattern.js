// taking prompt from terminal

/* let prompt= require('prompt-sync')()
process.stdout.write("Hello ")
process.stdout.write("World \n")
let a= prompt('enter your value')
process.stdout.write(a) 
*/

// Priting Stars
let prompt = require("prompt-sync")();
const printStarsSimple = () => {
  let a = prompt("ENter your star number");
  let starInRow = a;
  while (a > 0) {
    // let  i = 1;

    for (let i = 0; i < starInRow; i++) {
      process.stdout.write("* ");
    }
    process.stdout.write("\n");
    a -= 1;
  }
};

const rightangleTrianlgeStars = (n = 5) => {
  let i = 1;

  while (i <= n) {
    for (let l = 1; l <= i; l++) {
      process.stdout.write("* ");
    }
    process.stdout.write(" \n");
    i += 1;
  }
};

const rightAngleTriableNumber = (n = 5) => {
  let i = 1;

  while (i <= n) {
    for (let l = 1; l <= i; l++) {
      process.stdout.write(`${l} `);
    }
    process.stdout.write(" \n");
    i += 1;
  }
};

// rightAngleTriableNumber()

const printingAlphabets = (n = 5) => {
  for (let i = 1; i <= n; i++) {
    let ascii = 65;

    for (let j = 1; j <= i; j++) {
      process.stdout.write(String.fromCharCode(ascii) + " ");
      ascii++;
    }
    console.log("");
  }
};

const invertedTranle = (n = 5) => {
  for (let i = n; i > 0; i--) {
    for (let j = 1; j <= i; j++) {
      process.stdout.write("* ");
    }
    console.log("");
  }
};

const trianlewithspaces = (n = 5) => {
    for(let i = 1 ; i <= n ; i++){
        // inverted trianle
        for(let j=1 ;j<=n-i ; j++){
            process.stdout.write(" ")
        }
     
        // right angle trianle
        for (let m = 1 ; m<=i ; m++){
            process.stdout.write("*")
        }
        console.log()
    }
};




function XTriangle( n = 3){
    for(let i = 1 ; i <=n ; i++){
        for(let j =1 ; j <=n ; j++){

            if(i+j == n+1 || i == j){
                process.stdout.write('*')
            }
            
            process.stdout.write(" ")
        }
        console.log()
    }

}

function VPattern(n  =5){
    for(let  i = 1 ; i <= n ; i++){
        for (let j= 1 ; j <= n*2 ; j++){
            if(i==j || i+j == n*2){
                process.stdout.write("*")
            }
            else process.stdout.write(" ")
        }
        console.log("")

    }
}
VPattern()