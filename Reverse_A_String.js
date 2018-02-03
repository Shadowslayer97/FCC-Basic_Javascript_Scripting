/*Push the characters to a new string array with a reverse for loop*/
function reverseString(str) {
  var len=str.length;
  var rev=[];
  for(var i=len-1;i>=0;i--)
    {
      rev.push(str[i]);
    }

  str=rev.join("");
  return str;
}

console.log(reverseString("hello"));
