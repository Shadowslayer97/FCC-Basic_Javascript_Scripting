
function palindrome(str) {
  // Good luck!
  var validstr=str.toLowerCase().replace(/[\W_]/g, '');



  for(var j=0;j<(validstr.length-1)/2;j++)
    if(validstr.charAt(j)!==validstr.charAt(validstr.length-1-j))
      return false;

  return true;
}



console.log(palindrome("eye"));
