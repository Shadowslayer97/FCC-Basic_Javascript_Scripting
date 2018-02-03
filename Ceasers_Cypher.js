
function rot13(str) { // LBH QVQ VG!
  var ans="";
  for(var i=0;i<str.length;i++)
    {
      if(str.charCodeAt(i)<65)
        {
          ans+=str[i];
        }
      else
        {
        var charr=str.charCodeAt(i) - 13;
           if(charr<65)
             charr=str.charCodeAt(i)+13;
        ans+=String.fromCharCode(charr);
        }
    }

  return ans;
}

// Change the inputs below to test
console.log(rot13("SERR PBQR PNZC"));
