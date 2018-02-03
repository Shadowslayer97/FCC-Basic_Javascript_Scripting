
function chunkArrayInGroups(arr, size) {
  // Break it up.
  var darr=[];

  for(var i=0;i<arr.length;i=i+size)
    {
      var temp=arr.slice(i,i+size);
      darr.push(temp);

    }

  return darr;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
