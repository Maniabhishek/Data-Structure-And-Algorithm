export function twoNumberSum(array: number[], targetSum: number) {
  // Write your code here.
  let seen: Record<number, boolean> = {}
  let result: number[] = []
  for( let num of array){
    let remaining: number = targetSum - num
    if(seen[remaining] === true){
      result.push(num)
      result.push(remaining)
    }else {
      seen[num] = true
      continue
    }
  }
  return result;
}
