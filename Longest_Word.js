
function findLongestWord(str) {
  var newstr=str.split(' ');
  str=newstr[0].length;
  for(var i=1;i<newstr.length;i++)
   {
     if(newstr[i].length>str)
       str=newstr[i].length;
   }
  return str;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
