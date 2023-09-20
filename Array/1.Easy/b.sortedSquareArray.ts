function sortedSquaredArray(array: number[]) {
  // Write your code here.
  let start: number = 0;
  let end: number = array.length - 1;
  let idx: number = array.length - 1;
  let result: number[] = new Array(array.length).fill(0)
  while( start < end) {
    let leftSqaure: number = Math.abs(array[start]) * Math.abs(array[start])
    let rightSquare: number = Math.abs(array[end]) * Math.abs(array[end])
    if(leftSqaure > rightSquare) {
      result[idx] = leftSqaure
      idx--
      start++;
    }else {
      result[idx] = rightSquare
      idx--;
      end--;
    }
  }
  result[idx] = array[start] * array[start] 
  return result;
}
