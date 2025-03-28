console.log("hari om");

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
}

LinkedList.prototype.insertAtBegining = function (data) {
  const newNode = new Node(data);
  this.head = newNode;
};

LinkedList.prototype.insertAtEnd = function (data) {
  const newNode = new Node(data);
  if (!this.head) {
    this.head = newNode;
    return;
  }

  let last = this.head;

  while (last.next) {
    last = last.next;
  }

  last.next = newNode;
};
LinkedList.prototype.insertAfterPrev = function (data, prevNode) {
  if (!prevNode) {
    this.insertAtBegining(data);
    return;
  }
  const newNode = new Node(data, prevNode.next);
  prevNode.next = newNode;
};

LinkedList.prototype.deleteFirstNode = function () {
  if (!head) {
    console.log("no node in Linked List");
    return;
  }
  if (this.head.next) this.head = this.head.next;

  if (!this.head.next) this.head = null;
};

LinkedList.prototype.deleteLastNode = function () {
  if (!this.head) {
    console.log("LL Empty");
  } else if (this.head.next == null) {
    this.head = null;
  } else {
    let Slast = this.head;
    while (Slast.next.next) {
      Slast = Slast.next;
    }
    Slast.next = null;
  }
};

LinkedList.prototype.deleteByValue = function (value) {
  if(!this.head){
    console.log("List is Empty")
    return
  }

  if(this.head.data === value){
    this.head = null;
    return  
  }

  let current = this.head
  while(current.next !== null){
    if(current.next.data === value){
      current.next = current.next.next
      return
    }
    current = current.next;
  }

  console.log("no node found with key : ", value)


};

// SEARCH OPERATION

LinkedList.prototype.searchByValue = function(key){
  if(!this.head){
    console.log("Linkedist is empty")
    return
  }
  let position = 2

  if(this.head.data === key){
    console.log("Key Found in LinkedList at position" , position)
  }

  let current = this.head;
  while(current.next !== null){
    if(current.next.data === key){
        console.log("value found at position : ", position)
        return
    }
    current = current.next;
    position++;
  }

  console.log(current.data)


  console.log('key not in linked list')
}

// TRAVERSAL

LinkedList.prototype.traverse = function(){

  let arr_data = []
  if(!this.head){
    return arr_data
  }

  let current  = this.head;
  

  while(current){
    arr_data.push(current.data)
    current = current.next;
  }

  return arr_data
}

LinkedList.prototype.reverseLinkedList = function(){
  let current = this.head;
  let prev = null;   
  let next = null ;

  while(current){
    console.log('current in the value : ' , current.data);
    next = current.next;   //shifting the next to the current.next
    current.next = prev ;   // pointing the next of the current to the previous node
    prev = current;
    current = next;
  }

  this.head = prev;
}





let newLL = new LinkedList();

newLL.insertAtBegining(10);
newLL.insertAtEnd(20)
newLL.insertAtEnd(30)
newLL.insertAtEnd(40)



// newLL.searchByValue(30)
const arr = newLL.traverse()
arr ? console.log(arr.join(' -> ')) : console.log(arr)

newLL.reverseLinkedList()

const arr1 = newLL.traverse()
arr ? console.log(arr1.join(' -> ')) : console.log(arr1)

