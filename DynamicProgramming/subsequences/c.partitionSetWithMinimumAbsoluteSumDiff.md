> - Partition a set into two subsets such that the difference of subsets sum is minimum
> - You are given an array containing N non negative integers.  your task is to partition this array into two subsets such that the absolute difference between subset sums is minimum.
> - You just need to find the minimum absolute difference considering any valid division of array elements

- For example, for the array : [1, 2, 3], some of the possible divisions are 
- a) {1,2} and {3}
- b) {1,3} and {2}.

### Explanation
- lets say if we find one subset and and it has sum of x , then we need to find the other subset what would be the sum of other subset , it has to be total - x
- so if we are able to find all the subset with sum then if we subtract with other subset part and if we do this for all the subsets , then minimum of all will be answer
- in last problem we have created tabulation , N*total matrix , with last row having the data about whether we can reach a particular total(target) or not

```ts
function subsetSumTarget(arr: number[], idx: number, target: number){
    if(target === 0) return true
    if(idx === 0) return arr[0] === target

    const not_take = subsetSumTarget(arr, idx - 1, target)

    let take = false
    if(target >= arr[idx]){
        take = subsetSumTarget(arr, idx-1, target-arr[idx])
    }

    return take || not_take
}

function subsetSumTargetSumTabulation(arr: number[]){
    const total: number = arr.reduce((a, b)=> a+ b)
    const dp: boolean[][] = new Array(arr.length).fill(null).map(()=> new Array(total + 1).fill(0))
    for(let i=0; i < arr.length; i++){
        dp[i][0] = true
    }

    dp[0][arr[0]] = true

    for(let i = 1; i< arr.length; i++){
        for(let t = 1; t <= total; t++){
            const not_take = dp[i-1][t]
            let take = false
            if(t >= arr[i]){
                take = dp[i-1][t-arr[i]]
            }
            dp[i][t] = take || not_take
        }
    }

    let min = +1e8
    for(let i = 0; i<= total/2; i++){
        if(dp[arr.length-1][i]){
            const subset1  = i
            const subset2 = total - i
            min = Math.min(min, Math.abs(subset1 - subset2))
        }
    }
    return min
}

export function CallsubsetSumTargetSumTabulation(){
    const arr:number[] = [1,2,3,4,6,7]
    const res = subsetSumTargetSumTabulation(arr)
    console.log(res)
}

```
