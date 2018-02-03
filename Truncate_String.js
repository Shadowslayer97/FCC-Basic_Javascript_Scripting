
function truncateString(str, num) {
  // Clear out that junk in your trunk
  var ans=str;
  if(num<=3)
    ans=str.slice(0,num) + "...";
  else if(num>3 && num<str.length)
    ans=str.slice(0,num-3) + "...";
  return ans;
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 11));
