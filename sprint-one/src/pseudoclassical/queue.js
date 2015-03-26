var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.front = 0;
  this.back = 0;
};

Queue.prototype.size = function() {
  return this.back - this.front;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.back++] = value;
};

Queue.prototype.dequeue = function() {
  var result;
  if (this.size() > 0) {
    result = this.storage[this.front++];
  }
  return result;
};
