var moveZeroes = function(nums) {

    var noZeroInsert = 0;

   for(var i=0; i<nums.length; i++){
    if(nums[i]!== 0){
        nums[noZeroInsert] = nums[i];
        noZeroInsert ++;
    }
   }
   for (var j = noZeroInsert; j<nums.length ;j ++ ){
    nums[j]= 0
    }
    return nums
 };

moveZeroes([0,1,0,2,3,4])