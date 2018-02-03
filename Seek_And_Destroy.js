
function destroyer(arr) {
  // Remove all the values
  var agslen=arguments.length;

  var argarr=Array.prototype.slice.call(arguments);
  var array=arr.filter(function(val){
     return !argarr.includes(val);
  });

  return array;

}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
