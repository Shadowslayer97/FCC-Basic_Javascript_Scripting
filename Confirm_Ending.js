
function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  var ind=str.length - target.length;
  var subs=str.substr(ind);
  if(subs===target)
    return true;
  return false;
}

console.log(confirmEnding("Bastian", "n"));
