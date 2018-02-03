
function bouncer(arr) {
  // Don't show a false ID to this bouncer.

 var aarr=arr.filter(function(val)
                {

    return val !== false && val!==null && val!==0 && val!=="" && val !== undefined && val===val;
  }
                );
  return aarr;
}

console.log(bouncer([7, "ate", "", false, 9,null,0]));
