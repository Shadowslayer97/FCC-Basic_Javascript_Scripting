

function repeatStringNumTimes(str, num) {
  // repeat after me
  var strr="";
  if(num>0)
    {
  while(num--)
    strr=strr+str;

    }
  return strr;
}

console.log(repeatStringNumTimes("abc", 8));
