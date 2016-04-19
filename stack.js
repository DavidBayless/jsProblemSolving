var Stack = function(){
  this.data = [];
};
Stack.prototype.pop = function(){
  return this.data.pop();
};
Stack.prototype.push = function(item){
  this.data.push(item);
};
Stack.prototype.peek = function(){
  return this.data[this.data.length - 1];
};
Stack.prototype.isEmpty = function(){
  return this.data.length <= 0;
};

var myStack = new Stack();
console.log(myStack.isEmpty());
myStack.push('blue');
myStack.push('green');
myStack.push('yellow');
console.log(myStack.peek());
console.log(myStack.isEmpty());
myStack.pop();
console.log(myStack.peek());

var Queue = function() {
  this.data = [];
}
Queue.prototype.add = function(item) {
  return this.data.push(item);
}
Queue.prototype.remove = function() {
  return this.data.shift();
}
Queue.prototype.peek = function(){
  return this.data[0];
};
Queue.prototype.isEmpty = function(){
  return this.data.length <= 0;
};

var myQueue= new Queue();
console.log(myQueue.isEmpty());
myQueue.add('blue');
myQueue.add('green');
myQueue.add('yellow');
console.log(myQueue.peek());
console.log(myQueue.isEmpty());
myQueue.remove();
console.log(myQueue.peek());
