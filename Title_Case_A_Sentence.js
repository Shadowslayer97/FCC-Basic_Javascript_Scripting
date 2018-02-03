
function titleCase(str) {
  var nnewstr=str.split();
  var newstr=nnewstr[0];
  str='';
  for(var i=0;i<newstr.length;i++)
    {

      if(i==0)
        {
          temp=newstr.charAt(i).toUpperCase();
        }
       else if(newstr[i]==' ')
         {
           temp=newstr.charAt(i+1).toUpperCase();
           str=str+' ';
           i++;
         }
      else{
        var temp=newstr.charAt(i).toLowerCase();
      }


      str=str+temp;

    }

  return str;
}

console.log(titleCase("sHoRt AnD sToUt"));
