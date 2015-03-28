var Stack = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var length = 0;

  // Implement the methods below
  someInstance.push = function(value){
    storage[length++] = value;
  };

  someInstance.pop = function(){
    var result;
    if (length){
      result = storage[--length];
    }
    return result;
  };

  someInstance.size = function(){
    return length;
  };

  return someInstance;
};
