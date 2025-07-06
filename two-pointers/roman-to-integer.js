var romanToInt = function(s) {
 const val = {
   I: 1,
   V: 5,
   X: 10,
   L: 50,
   C: 100,
   D: 500,
   M: 1000,
 };

 var sum = 0;

 for (let i=0 ; i<s.length; i++ ){
    let current = val[s[i]]
    let next = val[s[i+1]]

    if(current < next){
        sum = sum - current
    }else {
        sum = sum + current
    }
  }
  return sum;
 };

romanToInt("LVIII")
