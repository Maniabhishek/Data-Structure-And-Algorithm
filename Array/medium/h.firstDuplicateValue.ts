/**
  
  Given an array of integers between 1 and n where n is the length of the array,
  write a function that returns the first integer that appears more than once (when the array is read from left to right).
  
  In other words, out of all the integers that might occur more than once in the
  input array, your function should return the one whose first duplicate value
  has the minimum index.
  
  If no integer appears more than once, your function should return -1

  sample input = [2, 1, 5, 2, 3, 3, 4]
  output = 2
  
*/

function firstDuplicateValue(array: number[]) {
  // Write your code here.
  for(let i = 0; i<array.length; i++){
    const absValue = Math.abs(array[i])
    if(array[absValue-1] < 0) return absValue
    array[absValue-1] *= -1
  }
  return -1;
}


export function firstDuplicateValue(array: number[]) {
  // Write your code here.
  const seen = new Set();
  let res = -1
  for(const num of array){
    if(seen.has(num)) return num
    seen.add(num)
  }
  return -1;
}
