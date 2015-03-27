var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this.retrieve(k) || [];
  bucket.push( [k,v] );
  this._storage.set(i,bucket);
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  var result;
  if (bucket) {
    _.each(bucket, function (tuple) {
      if (tuple[0] === k) {
        result = tuple[1];
      }
    });
  }
  return result;

};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  if (bucket) {
    _.each(bucket, function (tuple, i) {
      if (tuple[0] === k) {
        tuple[1] = null ;
      }
    });
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
