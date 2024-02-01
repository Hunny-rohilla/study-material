// problem 1: Shuffle String - Easy - https://leetcode.com/problems/shuffle-string/
// You are given a string s and an integer array indices of the same length. The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.
// Input: s = "codeleet", indices = [4,5,6,7,0,2,1,3]
// Output: "leetcode"
// Explanation: As shown, "codeleet" becomes "leetcode" after shuffling.

// solution:
var restoreString = function(s, indices) {
    let copyString = JSON.parse(JSON.stringify(indices));
    for(let i=0; i < copyString.length; i++ ) {
        copyString[indices[i]] = s[i];
    }

    return copyString.join('');
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
var isHappy = function(n) {
    let num = n; 
    let map = {};
    while (true) {
        if(map[num]) {
            return false;
        } else {
            map[num] = true;
        }

        let arr=[];
        while(num > 0) {
            arr.push(num%10);
            num = Math.floor(num/10);
        }
        num = arr.reduce((acc,val) => {
            return acc + val*val;
        },0);
        if(num == 1) {
           return true;
        }
    }
};

// -------------------------------------------------------------------------------------------

// problem 3: Easy	https://leetcode.com/problems/two-sum/
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// solution:
var twoSum = function(nums, target) {
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
