interface Pairs {
  [key: number]: [number, number][];
}

export function fourNumberSum(array: number[], targetSum: number) {
  // Write your code here.
  const allPairSum: Pairs = {}
  const result: number[][] = []
  for(let i = 2; i < array.length - 1; i++){
    for(let j = 0; j < i-1 ; j++ ){
      const currentSum = array[i-1] + array[j]
      if(!allPairSum[currentSum]){
        allPairSum[currentSum] = [[array[i-1], array[j]]]
      }else {
        allPairSum[currentSum].push([array[i-1], array[j]])
      }
    }

    for (let k = i + 1; k < array.length; k++) {
      const currentSum = array[i] + array[k]
      const difference = targetSum - currentSum
      if(difference in allPairSum){
        for(const pair of allPairSum[difference]){
          result.push(pair.concat([array[i],array[k]]))
        }
      }
    }
  }
  return result;
}
