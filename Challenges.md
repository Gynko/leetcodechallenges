# Challenges <!-- omit in toc -->

# Table of content <!-- omit in toc -->

- [1. Two sum](#1-two-sum)
  - [1.1. Problem](#11-problem)
  - [1.2. Solution](#12-solution)
- [2. Longest substring without repeating characters](#2-longest-substring-without-repeating-characters)
  - [2.1. Problem](#21-problem)
  - [2.2. Solution](#22-solution)
- [3. ZigZag conversion](#3-zigzag-conversion)
  - [3.1. Problem](#31-problem)
  - [3.2. Process](#32-process)
  - [3.3. Solution](#33-solution)

## 1. Two sum

### 1.1. Problem

difficulty: easy

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

difficulty: medium

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

## 3. ZigZag conversion

### 3.1. Problem

https://leetcode.com/problems/zigzag-conversion/

### 3.2. Process

Doing it by hand to try to understand the pattern

4. Create one array per row
5. Add one element to each array, one after the other until they all got filled
6. Then add one element to each array, but starting in reverse from the penultimate array.
7. Iterate until no more elements to fill
8. Join all arrays

### 3.3. Solution

```javascript
var convert = function (s, numRows) {
  let array = Array(numRows).fill("");
  let counter = 0;
  let reversed = 0;

  for (let i = 0; i < s.length; i++) {
    if (numRows === 1) {
      array[i] = s[i];
    }
    if (numRows !== 1) {
      if (counter < numRows) {
        array[counter] = array[counter] + s[i];
        counter++;
      }
      if (counter === numRows - 1) {
        array.reverse();
        reversed++;
        counter = 0;
      }
    }
  }
  if (reversed % 2 === 1) array.reverse();
  return array.join("");
};
```
