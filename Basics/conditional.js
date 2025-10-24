function checkIfCanVote(age){
    if(isNaN(age)){
        return "Invalid age";
    }

    if(age > 18){
        return "You can vote";
    }else{
        return "You cannot vote";
    }
}

// console.log(checkIfCanVote("10"));

const finalAmount = (amount ,  discountpercentage) => {
    return Math.trunc(amount - (amount *  discountpercentage / 100));
}

const shopOffer = (money) =>{
    if(money >= 5001 && money <= 7000){
        return finalAmount(money , 10);
    }else if(money >= 7001 && money <= 9000){
        return finalAmount(money , 15);
    }else if(money > 9000){
        return finalAmount(money , 20);
    }else{
        return finalAmount(money , 0);
    }
}

// console.log(shopOffer(7002));


// Question 3)
// |     Unit         |      Price         |
// |------------------|--------------------|
// | up to 100        | Rs. 4.2 /unit      |
// | 101 - 200        | Rs. 6 /unit        |
// | 201 - 400        | Rs. 8 /unit        |
// | more than 400    | Rs. 13 /unit       |


const unitConsumption=(units)=>{

    // units = 1400
    let amount = 0;

    if(units > 400){
        amount += (units - 400)*13
        units = 400
        // amount = 300*13 , units = 300
    }
    if(units >= 201 && units <= 400){
        amount += (units - 200) * 8  
        units  = 200
    }
    if(units >= 101 && units <= 200){
        amount += (units - 100) * 6
        units = 100
    }
    if(units <= 100){
        amount += (units)*4.2
    }

    return amount;
}

// Question 4) Denomination
//  4883 inr

 function denomations(amount){
 let denom = {500 : 0 , 200 : 0 , 100 : 0 , 50 : 0 , 20 : 0 , 10 : 0 ,2 : 0 , 1 : 0 ,  name : "sanket"};
 let numberOfNotes = 0;
 if(amount >= 500){
    numberOfNotes = Math.trunc(amount / 500);
    denom[500]  = numberOfNotes
    amount = amount % 500
 }
 if(amount >= 200){
    numberOfNotes =Math.trunc(amount / 200);
    denom[200]  = numberOfNotes
    amount = amount % 200
 }
 if(amount >= 100){
    numberOfNotes = Math.trunc(amount / 100);
    denom[100]  = numberOfNotes
    amount = amount % 100
 }
 if(amount >= 50){
    numberOfNotes = Math.trunc(amount / 50);
    denom[50]  = numberOfNotes
    amount = amount % 50
 }
 if(amount >= 20){
    numberOfNotes = Math.trunc(amount / 20);
    denom[20]  = numberOfNotes
    amount = amount % 20
 }
 if(amount >= 10){
    numberOfNotes = Math.trunc(amount / 10);
    denom[10]  = numberOfNotes
    amount = amount % 10
 }
 if(amount >= 2){
    numberOfNotes = Math.trunc(amount / 2);
    denom[2]  = numberOfNotes
    amount = amount % 2
 }
 if(amount >= 1){
    numberOfNotes = Math.trunc(amount / 1);
    denom[1]  = numberOfNotes
    amount = amount % 1
 }

 return denom
 
}

// console.log(denomations(1257));

// SwitchDay

// let day = 20

// switch(day){
//     case 1:console.log("Monday");
//     break;
//     case 2:console.log("Tuesday");
//     break;
//     case 3:console.log("Wednesday");
//     break;

//     default: console.log("no day found")
// }

let n = 500

const giveFactorial = (n) => {
   
    if(n == null){
        console.log("Cancelled")
    }

    let arr = Array.from({length : n}, (_,i) => i+1)
    let v = arr.reduce((acc, curr) => curr * acc , 1)
    // console.log(v);

    return(v)
}

// giveFactorial(0)


const isPrime = (number) => {
        if(number ==0){
            return false
        }
        if(number == 1 || number == 2) return true;
        if(number % 2 == 0) return false

        for(let i = 3; i <= Math.sqrt(number) ; i = i+2){
            if(number % i == 0) return false
        }
        return true

}  
// console.log(isPrime(4));

const sumOfDigits = (number) => {
    let sum = 0;
    // 123

    while(number !== 0){
        sum+=number%10
        number =Math.floor(number / 10)
    }
    return sum
}


// console.log(sumOfDigits(1234));


const reservedNumber = (number) =>{
    // n= 123
    if(number < 10) return  number;

    let reversedNumber = 0

        while (number > 0){
            reversedNumber = reversedNumber*10 + number%10

            number = Math.floor(number/10)
        }
    

    return reversedNumber;
}

// console.log(reservedNumber(123));

const strongNumber = (number) =>{
    originalNumber = number;
    factorialSUm = 0
    while(number > 0){
        singleDigit = number % 10
        factorialSUm += giveFactorial(singleDigit)
        number = Math.floor(number / 10)
    }
    if(originalNumber == factorialSUm) return true
    return false;
}

console.log(strongNumber(40585));






