var BinaryTree = function() {
  this.root = null;
  this.data = [];
};

var Node = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

BinaryTree.prototype.contains = function(value, node) {
  if (node) {
    if (node.value === value) {
      return true;
    } else {
      var contained;
      if (node.left) {
        contained = this.contains(value, node.left);
      }
      if (node.right && !contained) {
        contained = this.contains(value, node.right);
      }
      if (contained) {
        return contained;
      } else {
        return false;
      }
    }
  } else {
    return this.contains(value, this.root);
  }
};

BinaryTree.prototype.size = function(node) {
  if (node) {
    if (node.left === null && node.right === null) {
      return 1;
    } else {
      return this.size(node.left) + this.size(node.right) + 1;
    }
  } else if (node !== null) {
    return this.size(this.root);
  } else {
    return 0;
  }
};

BinaryTree.prototype.add = function(value, node) {
  if (!this.root) {
    this.root = new Node(value);
  } else if (node) {
    if (value < node.value && node.left === null) {
      node.left = new Node(value);
    } else if (value > node.value && node.right === null) {
      node.right = new Node(value);
    } else if (value < node.value) {
      this.add(value, node.left);
    } else if (value > node.value) {
      this.add(value, node.right);
    }
  } else {
    this.add(value, this.root);
  }
};

BinaryTree.prototype.breadthFirstSearch = function() {
  var queue = [this.root];
  var found = [];
  while (queue.length > 0) {
    found.push(queue[0].value);
    if (queue[0].left) {
      queue.push(queue[0].left);
    }
    if (queue[0].right) {
      queue.push(queue[0].right);
    }
    queue.shift();
  }
  return found;
};

BinaryTree.prototype.depthPreOrder = function(node) {
  if (node) {
    this.data.push(node.value);
    if (node.left) {
      this.depthPreOrder(node.left);
    }
    if (node.right) {
      this.depthPreOrder(node.right);
    }
    return this.data;
  } else {
    this.data = [];
    this.depthPreOrder(this.root);
    return this.data;
  }
};

var leftRightChild = {value: 4, left: null, right: null};
var leftChild = {value: 3, left: null, right: leftRightChild};
var rightChild = {value: 7, left: null, right: null};
var myTree = new BinaryTree();
myTree.root = {value: 5, left: leftChild, right: rightChild};
// console.log(myTree.size());
// console.log(myTree.breadthFirstSearch());
myTree.add(8);
myTree.add(6);
myTree.add(1);
// console.log(myTree.size());
console.log(myTree.breadthFirstSearch());
console.log(myTree.depthPreOrder());
