// let random_random_Arr_836492_836492 = []

// for(let i = 10 ; i <= 100 ; i = i+10){
//     random_Arr_836492.push(i)
// }

// // console.log(random_Arr_836492)

// // console.log(random_Arr_836492.pop())
// random_Arr_836492[13] = 1000;


const prompt = require('prompt-sync')()
function takingArrayInput(){
    var FiveArr = []
    let i = 1;

    while(i <= 5){
        let element = Number(prompt("enter your number"))
        FiveArr.push(element)

        i+=1
    }

    console.log(FiveArr)
    
}

function sumOfArray(){
    let sum = 0

    ar=[1,2,3,4]

    sum = ar.reduce((acc,cur)=> acc+cur , 0)

    console.log(sum);
    
}

const maxElement = (ar = [34,12,45,12,3,67,1,74,2]) =>{
    let maxElement = Number.MIN_SAFE_INTEGER;

    for(let i = 0 ; i< ar.length ; i++){
        if(ar[i] > maxElement){
            maxElement = ar[i]
        }
    }

    process.stdout.write("Max element is : " + maxElement)
}

// maxElement()

const secondMaxElement = (ar = [12,34,45,12,3,67,1,74,2,70]) => {
    
    let firstElement =Math.max(ar[0] , ar[1]);
    let secondElement = Math.min(ar[0] , ar[1]);

    for(let i = 2 ; i < ar.length ; i++){
        if(ar[i] > firstElement){
            secondElement  = firstElement;
            firstElement = ar[i]
        }else if(ar[i] > secondElement && ar[i] < firstElement){
            secondElement = ar[i]
        }
    }

    console.log("second heighest element is " + secondElement)
    console.log("first heighest element is " + firstElement)

}

// secondMaxElement()

const reverseAnArray = (ar = [34,12,45,12,3,67,1,74,2]) =>{
    let newArray =new ar.length()
    for(let i = ar.length-1 ; i>=0 ;i--){
        newArray.push(ar[i])
    }
    console.log(newArray);
}

const reverseAnArrayNoSpace = (ar = [10,20,30,40,50,60]) => {
    let i = 0 ; 
    let j = ar.length - 1
    while((i > j)){
        let temp = ar[i]
        ar[i] = ar[j]
        ar[j] = temp

        i++;
        j--;
    }
    console.log(ar);
}


const zeroesAndOnes = (ar = [0,1,0,1,1,0,0]) => {
    let i = 0;
    let j = 0;

 function swap(){
    let temp = ar[i]
    ar[i] = ar[j]
    ar[j] = temp
 }

 while(i <= ar.length - 1){
    if(ar[i] == 0){
        swap();
        j++;
        i++;
    }
    if(ar[i] == 1){
        i++
    }
 }
console.log(ar);
}

zeroesAndOnes()



// reverseAnArray()
// takingArrayInput()






