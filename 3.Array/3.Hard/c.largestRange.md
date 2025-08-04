
Largest length:
  
  Write a function that takes in an array of integers and returns an array of
  length 2 representing the largest range of integers contained in that array.
  
  The first number in the output array should be the first number in the range,
  while the second number should be the last number in the range.

  
  A range of numbers is defined as a set of numbers that come right after each
  other in the set of real integers. For instance, the output array = [2, 6]
represent the range of {2, 3, 4, 5, 6}, which
  is a range of length 5. Note that numbers don't need to be sorted or adjacent
  in the input array in order to form a range.
  sample input:
  array =  = [1, 11, 3, 0, 15, 5, 2, 4, 10, 7, 12, 6]
  sample output:
  [0, 7]
time coplexity: O(n) space complexity: O(n)

> - another solution r.longestConsecutiveSequence

```ts
export function largestRange(array: number[]):[number, number]{
  let largestRange:[number, number] = [-1, -1]
  let largestLength = 0
  let nums: {[key: number]: boolean} = {}
  
  for(const num of array){
    nums[num] = false
  }

  for(const num of array){
    if(nums[num]) continue
    let currentLongestLength = 1
    nums[num] = true
    let left = num - 1
    let right = num + 1
    while(left in nums){
      nums[left] = true
      currentLongestLength++
      left--
    }
    while(right in nums){
      nums[right] = true
      currentLongestLength++
      right++
  }
  if(currentLongestLength > largestLength){
    largestLength = currentLongestLength
    largestRange = [left + 1, right - 1]
    }
  }
  return largestRange
}
```
