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
  for (fromNode in this.nodeList[toNode].edges) {
    //TODO
  }
};

Graph.prototype.addEdge = function(fromNode, toNode){
  this.nodeList[fromNode].edges[toNode] = toNode;
  this.nodeList[toNode].edges[fromNode] = fromNode;
};

Graph.prototype.removeEdge = function(fromNode, toNode){
};

Graph.prototype.forEachNode = function(cb){
};

var GraphNode = function (value) {
  this.value = value;
  this.edges = {};
}

/*
 * Complexity: What is the time complexity of the above functions?
 */



