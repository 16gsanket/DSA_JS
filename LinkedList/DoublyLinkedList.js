class Node{
    constructor( data,next = null , prev = null){
        this.next = next;
        this.data = data;
        this.prev = prev;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
    }
}

DoublyLinkedList.prototype.insertAtBegining = function(data){
    const newNode = new Node(data , this.head);

    if(this.head !== null){
        this.head.prev = newNode;
    }

    this.head = newNode;

    if(this.tail === null){
        this.tail = newNode;
    }
}

DoublyLinkedList.prototype.insertAtEnd = function(data){
    const newNode = new Node(data, null , this.tail);

    if(this.tail !== null){
        this.tail.next = newNode
    }

    this.tail = newNode;

    if(!this.head){
        this.head = newNode;
    }

}


const newDLL = new DoublyLinkedList;

newDLL.insertAtBegining(10)
newDLL.insertAtEnd(20)
// newDLL.insertAtEnd(30)

console.log(newDLL)