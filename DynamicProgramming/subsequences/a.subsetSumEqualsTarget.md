> - Subset Sum equals to target
> - you are given an array of N positive integers and an integers 'K' your task is to check if there exists a subset in array with a sum equals to 'K' return true if exist else false

for eg., [1,2,3,4] k=4, ans true as [1,3] sums to 4

![Uploading image.jpeg…]()


```ts
function subsetSumEqualsToTarget(arr: number[], target: number, idx: number){
    if(idx === arr.length){
        if(target === 0){
            return true
        } else {
            return false
        }
    }

    target -= arr[idx]
    if(subsetSumEqualsToTarget(arr, target, idx + 1) === true){
        return true
    }

    target += arr[idx]
    if(subsetSumEqualsToTarget(arr, target, idx + 1) === true){
        return true
    }
    return false
}

export function CallsubsetSumEqualsToTarget(){
    const arr: number[] = [1,2,3,4]
    const res = subsetSumEqualsToTarget(arr, 10, 0)
    console.log(res)
}
```

```ts
function subsetSumEqualsToTarget_2(idx: number, target: number, arr: number[]){
    if(target === 0) return true
    if(idx === 0) return arr[idx] === target

    const not_take = subsetSumEqualsToTarget_2(idx - 1, target, arr)

    let take = false
    // we will take only if target is greater than or equal to arr[idx]
    if(target >= arr[idx]){
        take = subsetSumEqualsToTarget_2(idx - 1, target - arr[idx], arr)
    }

    return take || not_take
}

export function CallsubsetSumEqualsToTarget_2(){
    const arr: number[] = [1,2,3,4]
    const res = subsetSumEqualsToTarget_2(arr.length - 1, 10, arr)
    console.log(res)
}
```
- as we see variable are idx and target , so create dp array of size dp[array length][target+1] 
- since we have overlapping problems as we can clearly see in recursion tree we can memoize it 
```ts
function subsetSumEqualsToTargetMemoization(idx: number, target: number, arr: number[], dp:number[][]){

    if(target === 0) return true
    if(idx === 0) return arr[idx] === target

    if(dp[idx][target] !== -1) return dp[idx][target]

    const not_take = subsetSumEqualsToTargetMemoization(idx - 1, target, arr, dp)

    let take = false
    // we will take only if target is greater than or equal to arr[idx]
    if(target >= arr[idx]) {
        take = subsetSumEqualsToTargetMemoization(idx - 1, target - arr[idx], arr, dp)
    }

    return dp[idx][target] = take || not_take
}


export function CallSubsetSumEqualsToTargetMemoization() {
    const arr: number[] = [1,2,3,4]
    const target = 4
    const dp: number[][] = new Array(arr.length).fill(null).map(()=> new Array(target+1).fill(-1))

    const res = subsetSumEqualsToTargetMemoization(arr.length - 1, target, arr, dp)

    console.log(res)
}
```
- for writing tabulation just check the recurrence solution above 
- if(target === 0) whenever target is 0 return true , for what index target is 0 , (0,1,2,3,.....n-1)
-  next base condition for any target when it is equal to arr[idx] return true
```ts
function subsetSumToTargetTabulation(arr: number[], target: number){
    const dp: boolean[][] = new Array(arr.length).fill(null).map(()=> new Array(target+1).fill(-1))

    for(let i = 0; i < arr.length; i++){
        dp[i][0] = true
    }

    // dp[0][arr[0]] = true

    for(let t = 1; t <= target; t++){
        if(arr[0] === t){
            dp[0][t] = true
        }else{
            dp[0][t] = false
        }
    }

    for(let i = 1; i < arr.length; i++){
        for(let t = 1; t <=target; t++){
            const not_take = dp[i-1][t]
            let take = false
            if(t >= arr[i]){
                take = dp[i-1][t-arr[i]]
            }
            dp[i][t] = take || not_take
        }
    }

    return dp[arr.length-1][target]
}

export function CallsubsetSumToTargetTabulation(){
    const arr: number[] = [1,2,3,4]
    const res = subsetSumToTargetTabulation(arr,5)
    console.log(res)
}

```

- space optimization
```ts
function subsetSumToTargetTabulationSO(arr: number[], target: number){
    let prev: boolean[] = new Array(target+1).fill(-1)

    for(let i = 0; i < arr.length; i++){
        prev[0] = true
    }

    // dp[0][arr[0]] = true

    for(let t = 1; t <= target; t++){
        if(arr[0] === t){
            prev[t] = true
        }else{
            prev[t] = false
        }
    }

    for(let i = 1; i < arr.length; i++){
        const curr: boolean[] = new Array(target+1).fill(-1)
        for(let t = 1; t <=target; t++){
            const not_take = prev[t]
            let take = false
            if(t >= arr[i]){
                take = prev[t-arr[i]]
            }
            curr[t] = take || not_take
        }
        prev = curr
    }

    return prev[target]
}

export function CallsubsetSumToTargetTabulationSO(){
    const arr: number[] = [1,2,3,4]
    const res = subsetSumToTargetTabulationSO(arr,10)
    console.log(res)
}
```
