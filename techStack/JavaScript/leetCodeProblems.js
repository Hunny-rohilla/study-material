// problem 1: Shuffle String - Easy - https://leetcode.com/problems/shuffle-string/
// You are given a string s and an integer array indices of the same length. The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.
// Input: s = "codeleet", indices = [4,5,6,7,0,2,1,3]
// Output: "leetcode"
// Explanation: As shown, "codeleet" becomes "leetcode" after shuffling.

// solution:
var restoreString = function (s, indices) {
  let copyString = JSON.parse(JSON.stringify(indices));
  for (let i = 0; i < copyString.length; i++) {
    copyString[indices[i]] = s[i];
  }

  return copyString.join("");
};

// -------------------------------------------------------------------------------------------
// problem 2: Easy	https://leetcode.com/problems/happy-number/
// Write an algorithm to determine if a number n is happy.

// A happy number is a number defined by the following process:

// Starting with any positive integer, replace the number by the sum of the squares of its digits.
// Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
// Those numbers for which this process ends in 1 are happy.
// Return true if n is a happy number, and false if not.

// Example 1:
// Input: n = 19
// Output: true
// Explanation:
// 12 + 92 = 82
// 82 + 22 = 68
// 62 + 82 = 100
// 12 + 02 + 02 = 1

// solution:
var isHappy = function (n) {
  let num = n;
  let map = {};
  while (true) {
    if (map[num]) {
      return false;
    } else {
      map[num] = true;
    }

    let arr = [];
    while (num > 0) {
      arr.push(num % 10);
      num = Math.floor(num / 10);
    }
    num = arr.reduce((acc, val) => {
      return acc + val * val;
    }, 0);
    if (num == 1) {
      return true;
    }
  }
};

// -------------------------------------------------------------------------------------------

// problem 3: Easy	https://leetcode.com/problems/two-sum/
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Example:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// solution:
var twoSum = function (nums, target) {
  const numIndicesMap = {};

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (complement in numIndicesMap) {
      return [numIndicesMap[complement], i];
    }
    numIndicesMap[nums[i]] = i;
  }
};

// -------------------------------------------------------------------------------------------

// Problem 4: Longest Common Prefix	Easy	https://leetcode.com/problems/longest-common-prefix/
// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

// Example:
// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// solution:
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) {
    return "";
  }
  strs.sort();

  const firstStr = strs[0];
  const lastStr = strs[strs.length - 1];
  let commonPrefix = "";

  for (let i = 0; i < firstStr.length; i++) {
    if (firstStr[i] === lastStr[i]) {
      commonPrefix += firstStr[i];
    } else {
      break;
    }
  }

  return commonPrefix;
};

// -------------------------------------------------------------------------------------------

// problem 5: Majority Element	Easy	https://leetcode.com/problems/majority-element/
// Given an array nums of size n, return the majority element.
// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Example:
// Input: nums = [3,2,3]
// Output: 3

// Solution:
var majorityElement = function (nums) {
  const n = nums.length;
  const count = Math.floor(n / 2);
  const map = {};
  nums.forEach((val) => {
    if (map[val]) {
      ++map[val];
    } else {
      map[val] = 1;
    }
  });
  for (const e in map) {
    if (map[e] > count) {
      return e;
    }
  }
};
// -------------------------------------------------------------------------------------------

// problem 6: Binary Gap	Easy	https://leetcode.com/problems/binary-gap/
// Given a positive integer n, find and return the longest distance between any two adjacent 1's in the binary representation of n. If there are no two adjacent 1's, return 0.
// Two 1's are adjacent if there are only 0's separating them (possibly no 0's). The distance between two 1's is the absolute difference between their bit positions. For example, the two 1's in "1001" have a distance of 3.

// Example:
// Input: n = 22
// Output: 2
// Explanation: 22 in binary is "10110".
// The first adjacent pair of 1's is "10110" with a distance of 2.
// The second adjacent pair of 1's is "10110" with a distance of 1.
// The answer is the largest of these two distances, which is 2.
// Note that "10110" is not a valid pair since there is a 1 separating the two 1's underlined.

// Solution:
var binaryGap = function (n) {
  const binary = n.toString(2).split("");
  const map = new Map();
  let currentIndex = 0;
  let flag = false;
  binary.forEach((v, i) => {
    if (v == 1 && !flag) {
      flag = true;
      currentIndex = i;
    }
    if (v == 1 && flag) {
      if (map.has("1")) {
        if (map.get("1") < i - currentIndex) {
          map.set("1", i - currentIndex);
        }
      } else {
        map.set("1", i - currentIndex);
      }
      currentIndex = i;
    }
  });
  if (map.has("1")) {
    return map.get("1");
  } else {
    return 0;
  }
};

// -------------------------------------------------------------------------------------------

// Problem 7: Backspace String Compare	Easy	https://leetcode.com/problems/backspace-string-compare/
// Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.
// Note that after backspacing an empty text, the text will continue empty.

// Example:
// Input: s = "ab#c", t = "ad#c"
// Output: true
// Explanation: Both s and t become "ac".

// Solution:
var backspaceCompare = function (s, t) {
  const arr1 = s.split("");
  const arr2 = t.split("");
  const stack = [];
  const stack2 = [];
  arr1.forEach((v, i) => {
    if (v == "#") {
      stack.pop();
    } else {
      stack.push(v);
    }
  });
  arr2.forEach((v, i) => {
    if (v == "#") {
      stack2.pop();
    } else {
      stack2.push(v);
    }
  });
  if (stack.join("") == stack2.join("")) {
    return true;
  } else {
    return false;
  }
};

// -------------------------------------------------------------------------------------------

// Problem 8: Valid Parentheses	Easy	https://leetcode.com/problems/valid-parentheses/
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Example:
// Input: s = "()"
// Output: true

// Solution:
var isValid = function (s) {
  let arr1 = s.split("");
  let pattern = ["()", "{}", "[]"];
  let stack = [];
  for (let i = 0; i < arr1.length; i++) {
    let s = "";
    if (arr1[i] == "(" || arr1[i] == "{" || arr1[i] == "[") {
      stack.push(arr1[i]);
    }
    if (arr1[i] == ")" || arr1[i] == "}" || arr1[i] == "]") {
      let output = stack.pop();
      s = output + arr1[i];
      if (!pattern.includes(s)) {
        return false;
      }
    }
  }

  if (stack.length) {
    return false;
  } else {
    return true;
  }
};

// -------------------------------------------------------------------------------------------

// Problem: 9 Symmetric Tree	Easy	https://leetcode.com/problems/symmetric-tree/
// Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

// Example:
// Input: root = [1,2,2,3,4,4,3]
// Output: true

// solution:
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

function isMirror(left, right) {
  if (!left && !right) {
    return true; // Both subtrees are empty, considered symmetric
  }

  if (!left || !right || left.val !== right.val) {
    return false; // One subtree is empty or values don't match, not symmetric
  }

  // Recursively check the subtrees
  return isMirror(left.left, right.right) && isMirror(left.right, right.left);
}

var isSymmetric = function (root) {
  if (!root) {
    return true; // An empty tree is symmetric
  }

  return isMirror(root.left, root.right);
};

// -------------------------------------------------------------------------------------------

// Problem:10 Sum Of Square Numbers	Easy	https://leetcode.com/problems/sum-of-square-numbers/
// Given a non-negative integer c, decide whether there're two integers a and b such that a2 + b2 = c.

// Example :
// Input: c = 5
// Output: true
// Explanation: 1 * 1 + 2 * 2 = 5

// Solution:
var judgeSquareSum = function (c) {
  let low = 0;
  let high = Math.ceil(Math.sqrt(c));

  while (low <= high) {
    const sum = low ** 2 + high ** 2;
    const mid = Math.floor(low + (high - low) / 2);
    if (c > sum) {
      low = c > mid ** 2 + high ** 2 ? mid + 1 : low + 1;
    } else if (c < sum) {
      high = c < mid ** 2 + low ** 2 ? mid - 1 : high - 1;
    } else {
      return true;
    }
  }

  return false;
};

// -------------------------------------------------------------------------------------------

// Problem:11 Same Tree	Easy	https://leetcode.com/problems/same-tree/
// Given the roots of two binary trees p and q, write a function to check if they are the same or not.
// Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.
// Input: p = [1,2,3], q = [1,2,3]
// Output: true

// Solution:
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

function isSame(p, q) {
  if (!p && !q) {
    return true;
  }
  if (!p || !q || p.val != q.val) {
    return false;
  }

  return isSame(p.left, q.left) && isSame(p.right, q.right);
}

var isSameTree = function (p, q) {
  return isSame(p, q);
};

// -------------------------------------------------------------------------------------------

// Problem:12 Reverse String II	Easy	https://leetcode.com/problems/reverse-string-ii/
// Given a string s and an integer k, reverse the first k characters for every 2k characters counting from the start of the string.
// If there are fewer than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and leave the other as original.

// Example:
// Input: s = "abcdefg", k = 2
// Output: "bacdfeg"

// Solution:
var reverseStr = function (s, k) {
  let finalString = "";
  for (let i = 0; i < s.length; i += 2 * k) {
    let ss = s.slice(i, i + 2 * k);
    if (ss.length <= k) {
      finalString = finalString.concat(ss.split("").reverse().join(""));
    } else {
      let ts = ss.slice(0, k);
      let fs = ss.slice(k, ss.length);
      finalString = finalString.concat(ts.split("").reverse().join("") + fs);
    }
  }

  return finalString;
};

// -------------------------------------------------------------------------------------------

// Problem: 13 Min Stack	Easy	https://leetcode.com/problems/min-stack/
// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.
// Implement the MinStack class:
// MinStack() initializes the stack object.
// void push(int val) pushes the element val onto the stack.
// void pop() removes the element on the top of the stack.
// int top() gets the top element of the stack.
// int getMin() retrieves the minimum element in the stack.
// You must implement a solution with O(1) time complexity for each function.

// Example:
// Input
// ["MinStack","push","push","push","getMin","pop","top","getMin"]
// [[],[-2],[0],[-3],[],[],[],[]]

// Solution:
var MinStack = function () {
  this.arr = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  if (this.arr.length) {
    let minval = this.arr[this.arr.length - 1].min;
    minval < val
      ? this.arr.push({ val, min: minval })
      : this.arr.push({ val, min: val });
  } else {
    this.arr.push({ val, min: val });
  }

  return null;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  if (this.arr.length) {
    this.arr.length = this.arr.length - 1;
  }
  return null;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  if (this.arr.length) {
    return this.arr[this.arr.length - 1].val;
  }
  return null;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.arr[this.arr.length - 1].min;
};

// -------------------------------------------------------------------------------------------
