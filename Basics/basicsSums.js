
let a = 10;
let b = 20;
const usingTempVairbale = (a , b) => {
    let temp =a;
    a = b
    b = temp
    console.log("Using a temp variable" , "a : ", a , " b : " , b);
}

// usingTempVairbale(a,b)

const usingNoThirdVariable = () =>{
    a = a+b
    b = a - b
    a = a - b
    console.log("Without using a temp variable" , "a : ", a , " b : " , b);
}

const usingArray =  (a , b) => {
    [b,a] = [a,b]

        console.log("Using array " , "a : ", a , " b : " , b);

}

function operators(){

    console.log(b % a)
    console.log(Math.floor(b/a))

//   && ||

console.log(true && true)
console.log(true && false)

console.log(false || true)
console.log(false || false)

} 

function shiftOperators(){
    console.log(10 <<3)
    console.log(100 >> 2)
}




function sums(){
    // let i = 11;
    // console.log(i++ + ++i)
    let i = 11;
    // let j = --(i++);
    // console.log(j)
}

function MathsFunction(){
    console.log(Math.sqrt(16))
    console.log(Math.pow(1000,2))
    console.log(Math.trunc(4.5678))
    console.log(Math.abs(-100))
    console.log(Math.trunc((Math.random()*9000)  + 1000));   //0 to 1
}

function circumferenceOfCircle(radius){

    return  2* Math.PI * radius;


}k

console.log(circumferenceOfCircle(10)
);

// MathsFunction()

