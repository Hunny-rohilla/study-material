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

// Problem: 14 Maximun Subarray	Easy	https://leetcode.com/problems/maximum-subarray
// Given an integer array nums, find the subarray with the largest sum, and return its sum.

// Example :
// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.

// Solution:
var maxSubArray = function (nums) {
  if (!nums.length) return 0;
  if (nums.length == 1) return nums[0];
  let msf = -987654329876543;
  let maxTill = 0;
  for (let i = 0; i < nums.length; i++) {
    maxTill = maxTill + nums[i];
    msf = msf > maxTill ? msf : maxTill;
    if (maxTill < 0) {
      maxTill = 0;
    }
  }
  return msf;
};

// -------------------------------------------------------------------------------------------

// Problem 15: Number of Segments in a String	Easy	https://leetcode.com/problems/number-of-segments-in-a-string/
// Given a string s, return the number of segments in the string.
// A segment is defined to be a contiguous sequence of non-space characters.

// Example:
// Input: s = "Hello, my name is John"
// Output: 5
// Explanation: The five segments are ["Hello,", "my", "name", "is", "John"]

// Solution:
var countSegments = function (s) {
  const arr = s.trim().split(" ");
  const sum = arr.reduce((acc, val) => (val.trim().length ? ++acc : acc), 0);
  return sum;
};

// -------------------------------------------------------------------------------------------

// Problem 16: Flood Fill	Easy	https://leetcode.com/problems/flood-fill/
// An image is represented by an m x n integer grid image where image[i][j] represents the pixel value of the image.
// You are also given three integers sr, sc, and color. You should perform a flood fill on the image starting from the pixel image[sr][sc].

// Input: image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2
// Output: [[2,2,2],[2,2,0],[2,0,1]]
// Explanation: From the center of the image with position (sr, sc) = (1, 1) (i.e., the red pixel), all pixels connected by a path of the same color as the starting pixel (i.e., the blue pixels) are colored with the new color.
// Note the bottom corner is not colored 2, because it is not 4-directionally connected to the starting pixel.

// Solution:
function recursion(image, sr, sc, color, target) {
  if (image[sr][sc] == color) {
    return image;
  }
  if (image[sr][sc] == target) {
    image[sr][sc] = color;
  }
  let cordinate = [
    [sr - 1, sc],
    [sr + 1, sc],
    [sr, sc - 1],
    [sr, sc + 1],
  ];

  for (let i = 0; i < cordinate.length; i++) {
    if (
      cordinate[i][0] < 0 ||
      cordinate[i][1] < 0 ||
      cordinate[i][0] >= image.length ||
      cordinate[i][1] >= image[0].length
    ) {
      continue;
    }
    if (image[cordinate[i][0]][cordinate[i][1]] == target) {
      recursion(image, cordinate[i][0], cordinate[i][1], color, target);
    }
  }
}

var floodFill = function (image, sr, sc, color) {
  const target = image[sr][sc];
  recursion(image, sr, sc, color, target);

  return image;
};

// -------------------------------------------------------------------------------------------

// Problem: 17 K Closest Points to Origin	Medium	https://leetcode.com/problems/k-closest-points-to-origin/
// Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane and an integer k, return the k closest points to the origin (0, 0).
// The distance between two points on the X-Y plane is the Euclidean distance (i.e., √(x1 - x2)2 + (y1 - y2)2).
// You may return the answer in any order. The answer is guaranteed to be unique (except for the order that it is in).

// Solution:
var kClosest = function (points, k) {
  let dis = [];
  let copyDis = [];
  let res = [];
  for (let item of points) {
    const val = Math.sqrt(item[0] ** 2 + item[1] ** 2);
    dis.push(val);
    copyDis.push(val);
  }
  copyDis.sort((a, b) => a - b);
  for (let i = 0; i < k; i++) {
    let index = dis.indexOf(copyDis[i]);
    res.push(points[index]);
    dis[index] = null;
  }

  return res;
};

// -------------------------------------------------------------------------------------------

// Problem: 18 Gas Station	Medium	https://leetcode.com/problems/gas-station/description/
// There are n gas stations along a circular route, where the amount of gas at the ith station is gas[i].
// You have a car with an unlimited gas tank and it costs cost[i] of gas to travel from the ith station to its next (i + 1)th station. You begin the journey with an empty tank at one of the gas stations.
// Given two integer arrays gas and cost, return the starting gas station's index if you can travel around the circuit once in the clockwise direction, otherwise return -1. If there exists a solution, it is guaranteed to be unique

// Example:
// Input: gas = [1,2,3,4,5], cost = [3,4,5,1,2]
// Output: 3
// Explanation:
// Start at station 3 (index 3) and fill up with 4 unit of gas. Your tank = 0 + 4 = 4
// Travel to station 4. Your tank = 4 - 1 + 5 = 8
// Travel to station 0. Your tank = 8 - 2 + 1 = 7
// Travel to station 1. Your tank = 7 - 3 + 2 = 6
// Travel to station 2. Your tank = 6 - 4 + 3 = 5
// Travel to station 3. The cost is 5. Your gas is just enough to travel back to station 3.
// Therefore, return 3 as the starting index.

// Solution:
var canCompleteCircuit = function (gas, cost) {
  let curr = 0;
  let index = 0;
  let sum = 0;
  for (let i = 0; i < gas.length; i++) {
    let val = gas[i] - cost[i];
    sum += val;
    curr += val;
    if (curr < 0) {
      index = i + 1;
      curr = 0;
    }
  }

  if (sum < 0) {
    return -1;
  }

  return index;
};

// -------------------------------------------------------------------------------------------

// Problem: 19 Top K Frequent Elements	Medium	https://leetcode.com/problems/top-k-frequent-elements/
// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

// Example:
// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]

// Solution:
var topKFrequent = function (nums, k) {
  let arr = [];
  nums.sort((a, b) => a - b);
  let ele = nums[0];
  let map = {};
  map[ele] = 1;
  for (let i = 1; i < nums.length; i++) {
    if (map[nums[i]]) {
      ++map[nums[i]];
    } else {
      map[nums[i]] = 1;
    }
  }

  for (let key in map) {
    arr.push([key, map[key]]);
  }
  arr.sort((a, b) => b[1] - a[1]);

  let result = [];
  for (let j = 0; j < k; j++) {
    result.push(arr[j][0]);
  }

  return result;
};

// -------------------------------------------------------------------------------------------

// Problem: 20 Minimize Maximum Pair Sum in Array	Medium	https://leetcode.com/problems/minimize-maximum-pair-sum-in-array/

// The pair sum of a pair (a,b) is equal to a + b. The maximum pair sum is the largest pair sum in a list of pairs.
// For example, if we have pairs (1,5), (2,3), and (4,4), the maximum pair sum would be max(1+5, 2+3, 4+4) = max(6, 5, 8) = 8.
// Given an array nums of even length n, pair up the elements of nums into n / 2 pairs such that:
// Each element of nums is in exactly one pair, and
// The maximum pair sum is minimized.
// Return the minimized maximum pair sum after optimally pairing up the elements.

// Example :
// Input: nums = [3,5,2,3]
// Output: 7
// Explanation: The elements can be paired up into pairs (3,3) and (5,2).
// The maximum pair sum is max(3+3, 5+2) = max(6, 7) = 7.

// Solution:
var minPairSum = function (nums) {
  nums.sort((a, b) => a - b);
  let max = 0;
  for (let i = 0; i < nums.length / 2; i++) {
    if (max < nums[i] + nums[nums.length - i - 1]) {
      max = nums[i] + nums[nums.length - i - 1];
    }
  }
  return max;
};

// -------------------------------------------------------------------------------------------

// Problem: 21 Reverse Integer	Medium	https://leetcode.com/problems/reverse-integer/
// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

// Example:
// Input: x = 123
// Output: 321

// Solution:
var reverse = function (x) {
  let n = Math.abs(x);
  let result = 0;
  while (n !== 0) {
    result = result * 10 + (n % 10);
    n = Math.floor(n / 10);
  }

  return result.toString(2).length > 31 ? 0 : x < 0 ? -result : result;
};

// -------------------------------------------------------------------------------------------

// Problem: 22 Find Subarrays With Equal Sum	Medium	https://leetcode.com/problems/find-subarrays-with-equal-sum/
// Given a 0-indexed integer array nums, determine whether there exist two subarrays of length 2 with equal sum. Note that the two subarrays must begin at different indices.
// Return true if these subarrays exist, and false otherwise.
// A subarray is a contiguous non-empty sequence of elements within an array.

// Example:
// Input: nums = [4,2,4]
// Output: true
// Explanation: The subarrays with elements [4,2] and [2,4] have the same sum of 6.

// Solution:
var findSubarrays = function (nums) {
  let arr = [];
  for (let i = 0; i < nums.length - 1; i++) {
    let sum = nums[i] + nums[i + 1];
    if (arr.includes(sum)) {
      return true;
    }
    arr.push(sum);
  }
  return false;
};

// -------------------------------------------------------------------------------------------

// Problem: 23 Time Needed to Rearrange a Binary String	Medium	https://leetcode.com/problems/time-needed-to-rearrange-a-binary-string/
// You are given a binary string s. In one second, all occurrences of "01" are simultaneously replaced with "10". This process repeats until no occurrences of "01" exist.
// Return the number of seconds needed to complete this process.

// Example :
// Input: s = "0110101"
// Output: 4
// Explanation:
// After one second, s becomes "1011010".
// After another second, s becomes "1101100".
// After the third second, s becomes "1110100".
// After the fourth second, s becomes "1111000".
// No occurrence of "01" exists any longer, and the process needed 4 seconds to complete,
// so we return 4.

// Solution:
var secondsToRemoveOccurrences = function (s) {
  let count = 0;
  while (s.includes("01")) {
    s = s.replace(new RegExp("01", "g"), "10");
    count++;
  }
  return count;
};

const secondsToRemoveOccurrences = function (s) {
  const n = s.length;
  let zeros = 0;
  let seconds = 0;
  for (let i = 0; i < n; ++i) {
    zeros += s.charAt(i) == "0" ? 1 : 0;
    if (s.charAt(i) == "1" && zeros > 0) {
      seconds = Math.max(seconds + 1, zeros);
    }
  }
  return seconds;
};

// -------------------------------------------------------------------------------------------

// Problem: 24 Next Permutation	Medium	https://leetcode.com/problems/next-permutation/
// A permutation of an array of integers is an arrangement of its members into a sequence or linear order.
// For example, for arr = [1,2,3], the following are all the permutations of arr: [1,2,3], [1,3,2], [2, 1, 3], [2, 3, 1], [3,1,2], [3,2,1].
// The next permutation of an array of integers is the next lexicographically greater permutation of its integer. More formally, if all the permutations of the array are sorted in one container according to their lexicographical order, then the next permutation of that array is the permutation that follows it in the sorted container. If such arrangement is not possible, the array must be rearranged as the lowest possible order (i.e., sorted in ascending order).
// For example, the next permutation of arr = [1,2,3] is [1,3,2].
// Similarly, the next permutation of arr = [2,3,1] is [3,1,2].
// While the next permutation of arr = [3,2,1] is [1,2,3] because [3,2,1] does not have a lexicographical larger rearrangement.
// Given an array of integers nums, find the next permutation of nums.
// The replacement must be in place and use only constant extra memory.

// Example 1
// Input: nums = [1,2,3]
// Output: [1,3,2]

// Solution:
function reverseArray(arr, start) {
  let end = arr.length - 1;
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
}
var nextPermutation = function (nums) {
  let i = nums.length - 2;
  while (i >= 0 && nums[i] >= nums[i + 1]) {
    i--;
  }

  if (i >= 0) {
    let j = nums.length - 1;
    while (nums[j] <= nums[i]) {
      j--;
    }
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }

  reverseArray(nums, i + 1);
};

// -------------------------------------------------------------------------------------------

// Problem: 25 Maximum Sum of an Hourglass	Medium	https://leetcode.com/problems/maximum-sum-of-an-hourglass/

// You are given an m x n integer matrix grid.
// We define an hourglass as a part of the matrix with the following form:
// Return the maximum sum of the elements of an hourglass.
// Note that an hourglass cannot be rotated and must be entirely contained within the matrix.

// Example 1:
// Input: grid = [[6,2,1,3],[4,2,1,5],[9,2,8,7],[4,1,2,9]]
// Output: 30
// Explanation: The cells shown above represent the hourglass with the maximum sum: 6 + 2 + 1 + 2 + 9 + 2 + 8 = 30.

// Solution:
var maxSum = function (grid) {
  const row = grid.length;
  const col = grid[0].length;
  let sum = 0;
  let maxSoFar = 0;
  for (let i = 0; i < row - 2; i++) {
    for (let j = 1; j < col - 1; j++) {
      sum =
        grid[i][j - 1] +
        grid[i][j] +
        grid[i][j + 1] +
        grid[i + 1][j] +
        grid[i + 2][j - 1] +
        grid[i + 2][j] +
        grid[i + 2][j + 1];
      maxSoFar = Math.max(maxSoFar, sum);
    }
  }

  return maxSoFar;
};

// -------------------------------------------------------------------------------------------

// Problem: 26