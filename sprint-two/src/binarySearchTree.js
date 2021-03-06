var BinarySearchTree = function(value){
  var obj = Object.create(BinarySearchTree.prototype);

  obj.value = value;
  obj.left = null;
  obj.right = null;

  return obj;
};

BinarySearchTree.prototype.insert = function(value) {
  var treeNode = BinarySearchTree(value);
  if (value < this.value) {
    if (this.left) {
      this.left.insert(value);
    } else {
      this.left = treeNode;
    }
  }
  if (value > this.value) {
    if (this.right) {
      this.right.insert(value);
    } else {
      this.right = treeNode;
    }
  }
};

BinarySearchTree.prototype.contains = function(value) {
  if (value === this.value) {
    return true;
  }

  if (value < this.value) {
    if (this.left) {
      return this.left.contains(value);
    }
  }

  if (value > this.value) {
    if (this.right) {
      return this.right.contains(value);
    }
  }

  return false;
};

BinarySearchTree.prototype.depthFirstLog = function(callback) {
  callback(this.value);
  this.left && this.left.depthFirstLog(callback);
  this.right && this.right.depthFirstLog(callback);
};

/*
 * Complexity: What is the time complexity of the above functions?
 * .insert() has logarithmic time complexity - O(log n)
 * .contains() has logarithmic time complexity - O(log n)
 * .depthFirstLog() has linear time complexity - O(n)
 */
