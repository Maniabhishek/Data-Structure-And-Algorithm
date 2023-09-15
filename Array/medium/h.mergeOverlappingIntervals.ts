export function mergeOverlappingIntervals(array: number[][]) {
  // Write your code here.
  const sortedArray = array.sort((a,b)=>a[0]-b[0])
  let result: number[][] = [sortedArray[0]]
  for(let i = 0 ; i < sortedArray.length; i++){
    const resIdx = result.length - 1;
    if(result[resIdx][1] >= sortedArray[i][0]){
      result[resIdx][1] = Math.max(sortedArray[i][1],result[resIdx][1])
    }else {
      result.push(sortedArray[i])
    }
  }
  return result;
}
