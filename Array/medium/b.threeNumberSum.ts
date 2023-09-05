// O(n2) and O(n)

type Triplet = [number, number, number];

export function threeNumberSum(array: number[], targetSum: number): Triplet[] {
  // Write your code here.
  array = array.sort((a,b)=>(a-b))
  let result: Triplet[] = []
  for(let i = 0; i < array.length - 2 ; i++){
    let left = i + 1;
    let right = array.length - 1;
    while(left < right){
      let currentSum = array[i] + array[left] + array[right]
      if(currentSum === targetSum){
        result.push([array[i], array[left], array[right]])
        left++
        right--
      }else if(currentSum > targetSum){
        right--
      }else {
        left++
      }
    }
  }
  return result;
}
