
  // Given two non-empty arrays of integers, write a function that determines
  // whether the second array is a subsequence of the first one.

  // A subsequence of an array is a set of numbers that aren't necessarily adjacent
  // in the array but that are in the same order as they appear in the array. For
  // instance, the numbers [1, 3, 4] forms a subsequence of [1,2,3,4]
// sample input   [5, 1, 22, 25, 6, -1, 8, 10] ,  [1, 6, -1, 10]   output true

function isValidSubsequence(array: number[], sequence: number[]) {
  let seqIdx: number = 0
  let arrIdx: number = 0
  while( seqIdx < array.length && arrIdx < array.length) {
    if(array[arrIdx] === sequence[seqIdx]){
      seqIdx++
    }
    arrIdx++
  }
  return seqIdx === sequence.length
}
