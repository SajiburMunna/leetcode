var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let maxWater = 0;

  while (left < right) {
    let currentHeight = Math.min(height[left], height[right]);
    let currentArea = currentHeight * (right - left);
    maxWater = Math.max(currentArea, maxWater);
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxWater;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))
