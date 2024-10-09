<img src="https://github.com/Maniabhishek/Data-Structure-And-Algorithm/assets/31520295/530886ad-974d-432e-8d40-efd3a6ece67b" width=400 height=400 />
<img src="https://github.com/Maniabhishek/Data-Structure-And-Algorithm/assets/31520295/b6acae28-d55c-48c9-ad84-32b2f94f3f17" width=400 height=400 />

```ts
function MaxSumNonAdjacent(arr: number[], index: number): number{
    if(index === 0) return arr[0]
    if(index < 0) return 0

    let pick = arr[index] + MaxSumNonAdjacent(arr, index - 2)
    let not_pick = MaxSumNonAdjacent(arr, index - 1)

    return Math.max(pick, not_pick)
}

export function CallMaxSumNonAdjacent(){
    const arr: number[] = [2,1,4,9]

    const res = MaxSumNonAdjacent(arr, 3)
    console.log(res)
}
```

```ts
// memoization 
function MaxSumNonAdjacentMemoization(arr: number[], index: number, dp: number[]){
    if(index === 0) return arr[0]
    if(index < 0) return 0

    if(dp[index] !== -1) return dp[index]

    let pick = arr[index] + MaxSumNonAdjacent(arr, index - 2)
    let not_pick = MaxSumNonAdjacent(arr, index - 1)

    return dp[index] = Math.max(pick, not_pick)
}


export function CallMaxSumNonAdjacentMemoization(){
    const arr: number[] = [2,1,4,9,4,5]
    const dp: number[] = new Array(arr.length).fill(-1)

    const res = MaxSumNonAdjacentMemoization(arr, arr.length - 1, dp)
    console.log(res)
}

// tabulation bottom up approach
function MaxSumNonAdjacentTabulation(arr: number[]){
    const dp: number[] = new Array(arr.length).fill(-1)

    dp[0] = arr[0]

    for(let i = 1; i < arr.length; i++){
        let pick = arr[i]
        if((i - 2) >= 0){
            pick = arr[i] + dp[i - 2]
        }

        let not_pick = dp[i - 1]

        dp[i] = Math.max(pick, not_pick)
    }

    console.log(dp)

    return dp[arr.length - 1]
}

export function CallMaxSumNonAdjacentTabulation(){
    const arr: number[] = [2,1,4,9,4,5]
    const res = MaxSumNonAdjacentTabulation(arr)
    console.log(res)
}

// space optimization
function MaxSumNonAdjacentSpaceOptimization(arr: number[]){
    let prev2 = 0
    let prev = arr[0]

    for(let i = 1; i< arr.length; i++){
        let pick = arr[i]
        if(i > 1) {
            pick += prev2
        }
        let not_pick = prev

        let curr = Math.max(pick, not_pick)
        prev2 = prev
        prev = curr
    }

    return prev
}


export function CallMaxSumNonAdjacentSpaceOptimization(){
    const arr: number[] = [2,1,4,9,4,5]
    const res = MaxSumNonAdjacentSpaceOptimization(arr)
    console.log(res)
}
```
