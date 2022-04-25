# Challenges <!-- omit in toc -->

# Table of content <!-- omit in toc -->

- [1. Two sum](#1-two-sum)
  - [1.1. Problem](#11-problem)
  - [1.2. Solution](#12-solution)

## 1. Two sum

### 1.1. Problem

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

### 1.2. Solution

First solution, big O(n^2)

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

Second solution, time complexity big O(N), space complexity big O(N)

```javascript
var twoSum = function (nums, target) {
  let mapPropertiesToObject = {};
  for (let i = 0; i < nums.length; i++) {
    mapPropertiesToObject[nums[i]] = i;
  }
  for (let i = 0; i < nums.length - 1; i++) {
    let numberToSearch = target - nums[i];
    if (
      mapPropertiesToObject[numberToSearch] !== undefined &&
      mapPropertiesToObject[numberToSearch] !== i
    ) {
      return [i, mapPropertiesToObject[numberToSearch]];
    }
  }
};
```
