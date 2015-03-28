var DoublyLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var node = Node(value);
    if ( !list.head ) {
      list.head = node;
    } else {
      var temp = list.tail;
      list.tail = node;
      node.previous = temp;
      temp.next = node;
    }

    list.tail = node;

  };

  list.removeHead = function(){
    var result;
    if ( list.head ) {
      result = list.head;
      if (list.head.next) {
        list.head = list.head.next;
      } else {
        list.head = null;
        list.tail = null;
      }
    }
    return result.value;
  };

  list.contains = function(target){
    var referenceNode = list.head;

    while (referenceNode) {
      if (referenceNode.value === target) {
        return true;
      }
      referenceNode = referenceNode.next;
    }
    return false;
  };
  list.addToHead = function() {};

  list.removeTail = function() {};

  return list;


};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;
  node.previous = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 *
 * .addToTail() is constant time
 * .removeHead() is constant time
 * .contains() is linear time
 */
