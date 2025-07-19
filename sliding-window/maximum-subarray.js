var maxSubArray = function (nums, k = 4) {
  let maxSum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i <= k - 1) {
      maxSum = maxSum + nums[i];
    }
    if (i > k - 1) {
      let sum = maxSum - nums[i - k] + nums[i];
      if (sum > maxSum) {
        maxSum = sum;
      }
    }
  }
  return maxSum;
};

maxSubArray([1, 12, -5, -6, 50, 3]);
