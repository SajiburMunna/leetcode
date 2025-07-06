var removeDuplicates = function(nums) {

    var insetIndex = 1;

     for ( var i = 1; i < nums.length; i++){
        if(nums[i]!== nums[insetIndex-1]){
              nums[insetIndex]= nums[i]
              insetIndex++;
        }
     }
 return insetIndex;    
};

removeDuplicates([0,0,0,1,3,4,5,5,6,6])