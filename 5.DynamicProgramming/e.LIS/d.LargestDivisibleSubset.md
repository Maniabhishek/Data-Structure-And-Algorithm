- find the largest divisible subset
- example arr = [1, 16, 7, 8, 4]
- {1, 16, 4, 8} if we sort this out {1, 4, 8, 16}
- 4 is divisible by 1 , and 8 is divisible by 4 if 8 is divisible and 4 is divisible by 1 hence 8 is also divisible by 1, and same for 16 as well


```ts
function LargestDivisbleSubset(arr: number[]){
    // lets take an array with minimum subset of 1 as each invidual element is a subset
    const dp: number[] = new Array(arr.length).fill(1)
    const hash: number[] = new Array(arr.length).fill(null)
    for(let i =0; i < arr.length; i++){
        hash[i] = i
    }
    let max = 0
    let maxIdx = 0
    for(let i = 1; i < arr.length; i++){
        for(let j = 0; j< i; j++){
            if((arr[i] % arr[j] === 0) && (dp[i] < dp[j]+1)){
                dp[i] = 1 + dp[j]
                hash[i] = j
            }
        }
        if(dp[i] > max){
            max = dp[i]
            maxIdx = i
        }
    }

    const subset: number[] = new Array(max)
    let sIdx = subset.length - 1
    subset[sIdx] = arr[maxIdx]
    sIdx--

    while(hash[maxIdx] !== maxIdx){
        maxIdx = hash[maxIdx]
        subset[sIdx] = arr[maxIdx]
        sIdx--
    }
    console.log(subset)
    return max
}

export function Call_LargestDivisbleSubset(){
    const arr: number[] = [1, 16, 4, 8, 7]

    arr.sort((a, b)=> a-b)

    console.log(LargestDivisbleSubset(arr))
}

```
