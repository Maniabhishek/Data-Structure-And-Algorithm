> - You are given an array of positive integers and you have to tell how many different ways of selecting the elements from the array are there such that the sum of chosen elements is equal to the target number

### explanation
- since we need to find the total number of ways , or total number of subsets that equals target number , this problem is similar to the previous one
- TS of below solution 2**n, SC: O(N)

#### Thinking about the problem
- express the problem in terms of index which is index and target here
- this is pick and not problem
- and we need to find the total number of ways
- so in base condition as follows
```ts
if(i===0){
 return 1
 return 0
}
```
- we will have something like above
- when index is 0 which means can we get the target we can only if target === arr[0]
- or if target === 0 return 1

```ts
function NumberOfSubsets(arr: number[], target: number, idx: number){
    if(target === 0) return 1
    if(idx === 0) return arr[0] === target ? 1 : 0

    const not_take = NumberOfSubsets(arr, target, idx-1)
    let take = 0
    if(arr[idx] <= target){
        take = NumberOfSubsets(arr, target- arr[idx], idx-1)
    }

    return not_take + take 
}

export function CallNumberOfSubsets(){
    console.log('first')
    const arr: number[] = [1,2,2,3]
    const total = NumberOfSubsets(arr, 3, arr.length-1)
    console.log(total)
}

```

- using memoization
```ts
function NumberOfSubsetsMemoization(arr: number[], target: number, idx: number, dp: number[][]){
    if(target === 0) return 1
    if(idx === 0) return arr[0] === target ? 1 : 0

    if(dp[idx][target]!== -1) return dp[idx][target]

    const not_take = NumberOfSubsets(arr, target, idx-1)
    let take = 0
    if(arr[idx] <= target){
        take = NumberOfSubsets(arr, target- arr[idx], idx-1)
    }

    return dp[idx][target] = not_take + take 
}

export function CallNumberOfSubsetsMemoization(){
    const arr: number[] = [1,2,2,3]
    const target = 3
    const dp: number[][] = new Array(arr.length).fill(null).map(()=> new Array(target + 1).fill(-1))
    const total = NumberOfSubsetsMemoization(arr, 3, arr.length-1, dp)
    console.log(total)
}
```

- using tabulation
```ts
function NumberOfSubsetsTabulation(arr: number[], target: number){
    const dp: number[][] = new Array(arr.length).fill(null).map(()=> new Array(target + 1).fill(0))

    for(let i = 0; i < arr.length; i++){
        dp[i][0] = 1
    }

    dp[0][arr[0]] = 1

    for(let i = 1; i < arr.length; i++){
        for(let t = 1; t <= target; t++){
            const not_take = dp[i-1][t]

            let take = 0
            if(t >= arr[i]){
                take = dp[i-1][target - arr[i]]
            }
            dp[i][t] = take + not_take
        }
    }


    return dp[arr.length - 1][target] 
}

export function CallNumberOfSubsetsTabulation(){
    const arr: number[] = [1,2,2,3]
    const total = NumberOfSubsetsTabulation(arr, 3)
    console.log(total)
}

```

-  we can consider once scenario when array contains 0 , in this situation our code will not give exact count
-  so we can either go with code which will creates all the subsets , and then count below is the code
```ts
function NumberOfSubsets2(arr: number[], target: number, idx: number){
    if(idx === arr.length){
        if(target === 0){
            return 1
        } else {
            return 0
        }
    }

    target -= arr[idx]
    let l = NumberOfSubsets2(arr, target, idx + 1)

    target += arr[idx]
    let r = NumberOfSubsets2(arr, target, idx + 1)

    return l + r
}

export function CallNumberOfSubsets(){
    const arr: number[] = [0,0,1]
    const total = NumberOfSubsets2(arr, 1, 0)
    console.log(total)
}
```

-  or we can just modify the code
```ts
function NumberOfSubsets(arr: number[], target: number, idx: number){
    if(idx === 0) {
        if(target === 0 && arr[0] === 0) return 2
        if(target === 0 || arr[0] === target) return 1
        return 0
    }

    const not_take = NumberOfSubsets(arr, target, idx-1)
    let take = 0
    if(arr[idx] <= target){
        take = NumberOfSubsets(arr, target- arr[idx], idx-1)
    }

    return not_take + take 
}
```
