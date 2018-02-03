
function mutation(arr) {
  var str1=arr[0].toLowerCase();
  var str2=arr[1].toLowerCase();

  var ans=[];
  for(var i=0;i<str2.length;i++)
    {
      var temp=str1.indexOf(str2.charAt(i));
      if(temp===-1)
        return false;
    }

  return true;
}

console.log(mutation(["hello", "Hello"]));
