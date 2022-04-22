export const twoSum = {
  title: "Two Sum",
  url: "https://leetcode.com/problems/two-sum/",
  description:
    "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.",
  solution: `var twoSum = function (nums, target) {
    var increment = 0;
    for (let i = 0; i < nums.length - 1; i++) {
      for (let j = 1 + increment; j < nums.length; j++) {
        if (nums[i] + nums[j] === target) return [i, j];
      }
      increment++;
    }
  };
  
  // Big(O) of O(n^2) is not good enough`,
  walkthrough: "First, I ",
};
