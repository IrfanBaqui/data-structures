var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj= Object.create(queueMethods);

  obj.storage = {};
  obj.back = 0;
  obj.front = 0;

  return obj;
};

var queueMethods = {
  size: function() {
    return this.back-this.front;
  },

  enqueue : function(value) {
    this.storage[this.back++] = value;
  },

  dequeue : function() {
    var result;
    if (this.size() > 0) {
      result = this.storage[this.front++];
    }
    return result;
  }
};
