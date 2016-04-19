var DoublyLinkedList = function(node) {
  if (node) {
    this.head = node;
    this.tail = node;
    this.length = 1;
  } else {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
};

DoublyLinkedList.prototype.append = function(node) {
  if (this.head === null) {
    this.head = node;
    this.tail = node;
    this.length = 1;
  } else {
    this.tail.next = node;
    this.tail.next.prev = this.tail;
    this.tail = this.tail.next;
    this.tail.next = null;
    this.length++;
  }
};

DoublyLinkedList.prototype.remove = function(n) {
  if (n === 0 && this.length > 1) {
    this.head = this.head.next;
    this.head.prev = null;
    this.length--;
  } else if (n === 0 && this.length === 1) {
    this.head = null;
    this.tail = null;
    this.length--;
  } else if (n === this.length - 1) {
    this.tail = this.tail.prev;
    this.tail.next = null;
    this.length--;
  } else if (n < this.length) {
    var curr = this.head;
    var counter = 0;
    while (counter !== n) {
      curr = curr.next;
      counter++;
    }
    curr.prev.next = curr.next;
    if (curr.next) {
      curr.next.prev = curr.prev;
    }
    this.length--;
  }
};

var Node = function(value) {
  this.value = value;
  this.next = null;
  this.prev = null;
};

var myNode = new Node(0);
var myNewNode = new Node(1);
var myNewestNode = new Node(2);
var myDLOne = new DoublyLinkedList();

console.log(myDLOne);
myDLOne.append(myNode);
myDLOne.append(myNewNode);
myDLOne.append(myNewestNode);
console.log(myDLOne);
myDLOne.remove(2);
console.log(myDLOne);
