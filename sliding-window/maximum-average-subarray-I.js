var findMaxAverage = function (nums, k) {
  let currentSum = 0;
  for (let i = 0; i < k; i++) {
    currentSum += nums[i];
  }

  let maxSum = currentSum;

  for (let i = k; i < nums.length; i++) {
    currentSum = currentSum + nums[i] - nums[i - k];
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum / k;
};

maxSubArray([1, 12, -5, -6, 50, 3], 4);
