console.log('Hari Om')

class Stack{
    constructor(){
        this.stack = []
    }

    push(data){
        this.stack.push(data)
    }
    pop(){
        this.stack.pop()
    }

    peek(){
        return this.stack[this.stack.length - 1]
    }

    isEmpty(){
       return this.stack.length === 0 
    }

    size(){
        return this.stack.length
    }

    destoryStack(){
        this.stack = [];
    }
    
    containMethd(value){
        // this.stack.map(val=>{
        //     if(val === value){
        //         return true
        //     }

        //     return false;
        // })
        this.stack.includes(value)
    }

    printStack(){
        let str = ''
        for (let index = 0; index < this.stack.length; index++) {
            str += this.stack[index] + "\n"
            
        }
        return str;
    }

   

}

let myStack = new Stack()

myStack.push(10)
myStack.push(20)
myStack.push(30)
myStack.push(40)
myStack.push(50)

myStack.pop()

const l = myStack.printStack()
console.log(l)