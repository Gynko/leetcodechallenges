# Challenges <!-- omit in toc -->

# Table of content <!-- omit in toc -->

- [1. Two sum](#1-two-sum)
  - [1.1. Problem](#11-problem)
  - [1.2. Solution](#12-solution)
- [2. Add Two numbers](#2-add-two-numbers)
  - [2.1. Problem](#21-problem)
  - [2.2. Solving process](#22-solving-process)
  - [Solution](#solution)

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

## 2. Add Two numbers

### 2.1. Problem

https://leetcode.com/problems/add-two-numbers/

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

### 2.2. Solving process

First, I read again about linked lists, how they work in JS

The first method I am thinking of is to traverse both linked lists and make them numbers, add them, and then transforming this number into a linked list.

Example:
LL1 = 8 => 5
LL2 = 9 => 5
58 + 59 = 107

Expected result:
LL3 = 7 => 0 => 1

The second method I can think of is to:

1. get the first digits of each LL (8 and 9 in example, which are known as the head elements in a LL)
2. add them
3. if the sum is < 10, create the result LL with the resulting digit
4. if the sum is >= 10, append the last digit to the result LL and memorize the rest 1 (in our example 8 + 9 = 17, so we append 7 and memorize the rest 1)
5. iterate with second digits of each LL and add the rest 1 (here 5 + 5 + 1 = 11, add 1 to the result LL, memorize rest 1).
6. We have to continue as long as one of the LL to add contains a digit OR as long as there is a rest
   Switch to coding

### Solution

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
