
function getIndexToIns(arr, num) {
   arr.push(num);
  arr.sort(function(a,b){return a-b;});
  var ans=arr.indexOf(num,0);
  return ans;
}

console.log(getIndexToIns([3, 10, 5], 3));
