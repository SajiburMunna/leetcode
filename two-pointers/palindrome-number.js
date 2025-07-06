var isPalindrome = function (x) {
  if (x < 0) return false;
 
  var left = 0;
  let toArray = x.toString().split("");
  var right = toArray.length - 1;

  if(toArray.length === 1){
    return true
  }

  while (left < right) {
    if (toArray[left] !== toArray[right]) {
         return false
    } else {
         left++;
        right--
     }
     }
    return true;
};

console.log(isPalindrome(1000021));
