# Challenges <!-- omit in toc -->

# Table of content <!-- omit in toc -->

- [1. Two sum](#1-two-sum)
  - [1.1. Problem](#11-problem)
  - [1.2. Solution](#12-solution)
- [2. Longest substring without repeating characters](#2-longest-substring-without-repeating-characters)
  - [2.1. Problem](#21-problem)
  - [2.2. Solution](#22-solution)

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

## 2. Longest substring without repeating characters

### 2.1. Problem

https://leetcode.com/problems/longest-substring-without-repeating-characters/

Given a string s, find the length of the longest substring without repeating characters.

### 2.2. Solution

```javascript
var lengthOfLongestSubstring = function (s) {
  let iterator = 0;
  let strLength = 0;
  let maxLength = 0;
  let storedUniqueChars = {};
  let arr = s.split("");
  while (iterator < arr.length) {
    if (storedUniqueChars.hasOwnProperty(arr[iterator])) {
      let foundIndex = storedUniqueChars[arr[iterator]];
      storedUniqueChars = {};
      storedUniqueChars[arr[foundIndex + 1]] = foundIndex + 1;
      strLength = 1;
      iterator = foundIndex + 2;
    } else {
      storedUniqueChars[arr[iterator]] = iterator;
      strLength++;
      if (strLength >= maxLength) maxLength = strLength;
      iterator++;
    }
  }
  return maxLength;
};
```
