var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {};
  _.extend(obj, stackMethods);
  obj.storage = {};
  obj.length = 0;
  return obj;
};

var stackMethods = {
  push: function(value) {
    this.storage[this.length++] = value;
  },

  pop: function() {
    var result;
    if (this.length > 0) {
      result = this.storage[--this.length];
    }
    return result;
  },

  size: function() {
    return this.length;
  }
};
