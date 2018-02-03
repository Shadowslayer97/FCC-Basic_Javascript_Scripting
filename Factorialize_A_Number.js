
function factorialize(num)
{
  var ans=1;
  if(num==0 || num==1)
    {}

  else
    {
    for(var i=2;i<=num;i++)
      ans=ans*i;

    }
  return ans;
}
console.log(factorialize(0));
