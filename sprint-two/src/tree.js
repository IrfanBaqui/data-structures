var Tree = function(value){
  var newTree = {};
  _.extend(newTree, treeMethods);
  newTree.value = value;

  // your code here
  newTree.children = [];

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  this.children.push(Tree(value));
};

treeMethods.contains = function(target){
  var result = false;

  if (this.value === target) {
    return true;
  }

  for (var tree = 0; tree < this.children.length; tree++) {
    result = result || this.children[tree].contains(target);
    if (result) {
      break;
    }
  }

  return result;
};


/*
 * Complexity: What is the time complexity of the above functions?
 * .addChild() is constant time
 * .contains() is linear time
 */
