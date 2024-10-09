```
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
```

- all the brute , better , optimal approach is similar to 3SUM 
- in case of 4 SUM 
```ts
function FourSum(arr: number[]){
    arr.sort((a,b)=> a-b)
    const res = []
    for(let i = 0; i < arr.length; i++){
        if(i > 0 && arr[i] === arr[i-1]) continue
        for(let j = i+1; j < arr.length ; j++){
            if(j !== i+1 && arr[j] === arr[j-1] ) continue
            let left = j+1
            let right = arr.length-1
            while(left < right){
                let sum = arr[i] + arr[j] + arr[left] + arr[right]
                if(sum === 0) {
                    res.push([arr[i], arr[j], arr[left], arr[right]])
                    let currentLeft = arr[left]
                    left++
                    while(currentLeft === arr[left]){
                        left++
                    }

                    let currentRight = arr[right]
                    right--
                    while(currentRight === arr[right]){
                        right--
                    }
                }else if (sum < 0){
                    let currentLeft = arr[left]
                    left++
                    while(currentLeft === arr[left]){
                        left++
                    }
                }else {
                    let currentRight = arr[right]
                    right--
                    while(currentRight === arr[right]){
                        right--
                    }
                }
            }
        }
        
    }
    console.log(res)
}


export function Call_Four_Sum(){
    FourSum([-1,-1,-1,-1,-2,-2,-3,-3,-3,-4,-4,-4,1,1,1,1,2,3,4,2,3,4,2,1,2,3])
}
```
