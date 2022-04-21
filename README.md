# Leetcode

My leetcode challenges!

# 1. Two sum

https://leetcode.com/problems/two-sum/

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

So:

1. If input: nums = [2,7,11,15], target = 9
2. Then we need to output: [0,1] => 7+2= 9

## Solution 1:

```javascript
var twoSum = function (nums, target) {
  var increment = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = 1 + increment; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) return [i, j];
    }
    increment++;
  }
};
```

Problem: Big O(n^2). Figuring a Big O(n) by adding space complexity?
