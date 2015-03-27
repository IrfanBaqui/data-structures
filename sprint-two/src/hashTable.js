var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);

  this._size = 0;
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i) || [];
  bucket.push( [k,v] );
  this._storage.set(i,bucket);
  this._size++;

  // After adding, check if capacity is at 75%
  // If so, rehash
  if (this._size / this._limit >= .75) {
    this.rehash();
  }
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

HashTable.prototype.rehash = function() {
  // Double the size of this._limit
  this._limit *= 2;
  this._size = 0;

  // Create a new instance of LimitedArray with the new size
  var oldStorage = this._storage;
  this._storage = LimitedArray(this._limit);

  var that = this;

  // Iterate through each of the buckets in the
  // old LimitedArray instance
  oldStorage.each(function(bucket) {
    // For each bucket, iterate through the tuples
    _.each(bucket, function(tuple) {
      // For each tuple, generate new index with the key
      // Insert key-value pair in new instance of LimitedArray
      // debugger;
      that.insert(tuple[0], tuple[1]);
    });
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 * .insert() has constant time complexity - O(1)
 * .retrieve() has constant time complexity - O(1)
 * .remove() has constant time complexity - O(1)
 */
