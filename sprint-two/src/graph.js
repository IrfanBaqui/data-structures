var Graph = function(){
  this.nodeList = {};

};

Graph.prototype.addNode = function(node){
  this.nodeList[node] = new GraphNode(node);
};

Graph.prototype.contains = function(node){

  return (_.filter(this.nodeList, function (item) {
    return item.value === node;
  })).length > 0;
};

Graph.prototype.removeNode = function(node){
  var result;
  var keyToDelete;
  _.each(this.nodeList, function (item) {
    if (item.value === node) {
      result = item.value;
      keyToDelete = item.value;
    }
  });
  if (keyToDelete) {
    delete this.nodeList[keyToDelete];
  }
  return result;
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  if (this.nodeList.hasOwnProperty(fromNode) &&
    this.nodeList[fromNode].edges.hasOwnProperty(toNode)) {
    return true;
  }
  return false;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  this.nodeList[fromNode].edges[toNode] = toNode;
  this.nodeList[toNode].edges[fromNode] = fromNode;
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  if (this.nodeList.hasOwnProperty(fromNode) &&
    this.nodeList[fromNode].edges.hasOwnProperty(toNode)) {
    delete this.nodeList[fromNode].edges[toNode];
    delete this.nodeList[toNode].edges[fromNode];
    return true;
  }
  return false;
};

Graph.prototype.forEachNode = function(cb){
  _.each(this.nodeList, function(item) {
    cb(item.value);
  });
};

var GraphNode = function (value) {
  this.value = value;
  this.edges = {};
}

/*
 * Complexity: What is the time complexity of the above functions?
 * .addNode() is constant time
 * .contains() is linear time
 * .removeNode() is linear time
 * .hasEdge() is constant time
 * .addEdge() is constant time
 * .removeEdge() is constant time
 * .forEachNode() is linear time
 */



