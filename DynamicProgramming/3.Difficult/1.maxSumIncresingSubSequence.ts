/*
  Write a function that takes in a non-empty array of integers and returns the
  greatest sum that can be generated from a strictly-increasing subsequence in
  the array as well as an array of the numbers in that subsequence.

  
  A subsequence of an array is a set of numbers that aren't necessarily adjacent
  in the array but that are in the same order as they appear in the array. For
  instance, the numbers [1, 3, 4]  form a subsequence of the array [1, 2, 3, 4]
  , and so do the numbers [2, 4]. Note
  that a single number in an array and the array itself are both valid
  subsequences of the array.

  You can assume that there will only be one increasing subsequence with the
  greatest sum.

  sample Input :  = [10, 70, 20, 30, 50, 11, 30]
  sample output: = [110, [10, 20, 30, 50]] 

 time: O(n2) space: O(n)
*/



export function maxSumIncreasingSubsequence(array: number[]): [number, number[]] {
  // Write your code here.
  const sequences: number[] = new Array(array.length)
  const sums:number[] = array.map(num => num)
  let maxSumIdx = 0;
  for(let i = 0; i < array.length; i++){
    const currentNum = array[i]
    for(let j = 0 ; j < i; j++){
      let otherNum = array[j]
      if(otherNum < currentNum && currentNum + sums[j] >= sums[i]) {
        sums[i] = currentNum + sums[j]
        sequences[i] = j
      }
    }
    if(sums[i] >= sums[maxSumIdx]){
      maxSumIdx = i;
    }
  }
  return [sums[maxSumIdx], buildSequence(array, sequences, maxSumIdx)];
}


function buildSequence(array: number[], sequence:number[], idx: number): number[] {
  const arr: number[] = [];
  while(idx != null){
    arr.unshift(array[idx]);
    idx = sequence[idx]
  }
  return arr
}
