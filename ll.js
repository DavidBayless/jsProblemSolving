var LinkedList = function() {
  this.head = null;
  this.curr = null;
};

LinkedList.prototype.append = function(node) {
  if (this.head === null) {
    this.head = node;
    this.curr = node;
  } else {
    while(this.curr.next !== null) {
      this.curr = this.curr.next;
    }
    this.curr.next = node;
    this.curr = this.head;
  }
};

LinkedList.prototype.remove = function(n) {
  if (this.head !== null) {
    this.curr = this.head;
    var hold = this.curr;
    if (n === 0) {
      this.head = this.head.next;
    } else {
      for (var i = 0; i <= n; i++) {
        if (i === n - 1) {
          hold = this.curr;
          this.curr = this.curr.next;
        } else if (i === n) {
          this.curr = this.curr.next;
          hold.next = this.curr;
        } else {
          this.curr = this.curr.next;
        }
      }
    }
  }
};

var Node = function(value) {
  this.value = value;
  this.next = null;
};

var newNode1 = new Node(1);
var newNode2 = new Node(2);
var newNode3 = new Node(3);
var newNode4 = new Node(4);
var newNode5 = new Node(5);

var myLinked = new LinkedList();

console.log(myLinked);
myLinked.append(newNode1);
myLinked.append(newNode2);
myLinked.append(newNode3);
myLinked.append(newNode4);
myLinked.append(newNode5);
console.log(myLinked);
myLinked.remove(1);
console.log(myLinked);
