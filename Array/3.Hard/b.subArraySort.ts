/*

  Write a function that takes in an array of at least two integers and that
  returns an array of the starting and ending indices of the smallest subarray
  in the input array that needs to be sorted in place in order for the entire
  input array to be sorted (in ascending order).

  
  If the input array is already sorted, the function should return
  [-1, -1]

  Sample Input  = [1, 2, 4, 7, 10, 11, 7, 12, 6, 7, 16, 18, 19]
  sample output = [3, 9]
*/


type Range = [number, number];

export function subarraySort(array: number[]): Range {
  // Write your code here.
  let minOutOfOrder = Infinity
  let maxOutOfOrder = -Infinity
  for (let i = 0; i < array.length; i++) {
    if(isOutOfOrder(i, array)){
      minOutOfOrder = Math.min(minOutOfOrder, array[i])
      maxOutOfOrder = Math.max(maxOutOfOrder, array[i])
    }
  }
  if(minOutOfOrder === Infinity) return [-1, -1]
  let leftSubArrIdx = 0
  while(minOutOfOrder >= array[leftSubArrIdx]) {
    leftSubArrIdx++;
  }
  let rightSubIdx = array.length - 1
  while(maxOutOfOrder <= array[rightSubIdx]){
    rightSubIdx--
  }
  return [leftSubArrIdx, rightSubIdx]
}

function isOutOfOrder(index: number, arr: number[]) {
  if(index === 0) return arr[index] > arr[index+1]
  if(index === (arr.length - 1)) return arr[index] < arr[index - 1]

  return arr[index] > arr[index + 1] || arr[index] < arr[index - 1]
}
