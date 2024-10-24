> - Given an array ‘ARR’, partition it into two subsets (possibly empty) such that their union is the original array. Let the sum of the elements of these two subsets be ‘S1’ and ‘S2’.
> - Given a difference ‘D’, count the number of partitions in which ‘S1’ is greater than or equal to ‘S2’ and the difference between ‘S1’ and ‘S2’ is equal to ‘D’. Since the answer may be too large, return it modulo ‘10^9 + 7’.
> - If ‘Pi_Sj’ denotes the Subset ‘j’ for Partition ‘i’. Then, two partitions P1 and P2 are considered different if:
> - P1_S1 != P2_S2 i.e, at least one of the elements of P1_S1 is different from P2_S2.
> - P1_S1 == P2_S2, but the indices set represented by P1_S1 is not equal to the indices set of P2_S2. Here, the indices set of P1_S1 is formed by taking the indices of the elements from which the subset is formed.


### explanation 
- we need to find the count of all the partition subsets where s1 - s2 = d,
- what is s2 , it is nothing but total-s1
- now replace s2 with total-s1 , it becomes s1-(total-s1) = d
- i.e., 2s1 = total + d <=> s1 = (total + d)/2
- so we need to find all the subset that that is equal to (total + d)/2

```ts
const mod = 1e9 + 7

// this is only going to work when arr doesn't contain any 0's
function CountPartitions(arr: number[], diff: number, idx: number, sum: number, total: number){
    if(sum === (total+diff)/2) {
        return 1
    }
    if(idx === 0 ){
        if((arr[0] + sum) === (total + diff)/2) return 1
        else return 0
    }

    const not_take = CountPartitions(arr, diff, idx - 1, sum, total)

    const take = CountPartitions(arr, diff, idx - 1, sum+arr[idx], total)

    return not_take + take
}

export function CallCountPartitions(){
    const arr: number[] = [1,0,8,5,1,4]
    const total = arr.reduce((a,b)=> a+b)
    const diff = 17
    if(total-diff < 0 || (total - diff)%2) return false
    const res = CountPartitions(arr, 17, 3, 0, total)
    console.log(res)
}

function CountPartitions2(arr: number[], idx: number, target: number, dp: number[][]){
    if(idx === 0){
        if(target === 0 && arr[0] === 0) return 2
        if(arr[0] === target || target === 0) return 1
        return 0
    }

    if(dp[idx][target]!== -1) return dp[idx][target]

    const not_take = CountPartitions2(arr, idx-1, target, dp)

    let take = 0
    if(target >= arr[idx]){
        take = CountPartitions2(arr, idx-1, target-arr[idx], dp)
    }
    return dp[idx][target] = (take + not_take)%mod
}

export function CallCountPartitions2(){
    const arr: number[] = [1,0, 8,5,1,4]
    const total = arr.reduce((a,b)=> a+b)
    const diff = 17
    const target = (total-diff)/2
    if((total-diff) < 0 || (total-diff)%2) return 0
    const dp: number[][] = new Array(arr.length).fill(null).map(()=> new Array(target + 1).fill(-1))
    const res = CountPartitions2(arr, arr.length-1, target, dp)
    console.log(res)
}

function CountPartitionsTabulation(arr: number[], target: number){
    const dp: number[][] = new Array(arr.length).fill(null).map(()=> new Array(target + 1).fill(-1))
    if(arr[0] === 0){
        dp[0][0] = 2
    }else {
        dp[0][0] = 1
    }

    // arr[0] <= target -> what if at arr[0] value is greater than target then we can never acheive 
    if(arr[0]!== 0 && arr[0] <= target) dp[0][arr[0]] = 1

    for(let i = 1; i<arr.length; i++){
        for(let t= 0; t <= target ; t++){
            const not_take = dp[i-1][t]

            let take = 0
            if(t >= arr[i]){
                take = dp[i-1][t-arr[i]]
            }
            dp[i][t] = take + not_take
        }
    }

    return dp[arr.length-1][target]
}

export function CallCountPartitionsTabulation(){
    const arr: number[] = [1,0,8,5,1,4]
    const total = arr.reduce((a,b)=> a+b)
    const diff = 17
    const target = (total-diff)/2
    if((total-diff) < 0 || (total-diff)%2) return 0
    const res = CountPartitionsTabulation(arr, target)
    console.log(res)
}

function CountPartitionTabulationSO(arr: number[], target: number) {
    let dp: number[] = new Array(target + 1).fill(0)
    if(arr[0] === 0){
        dp[0] = 2
    }else {
        dp[0] = 1
    }

    // arr[0] <= target -> what if at arr[0] value is greater than target then we can never acheive target with arr[0] it has to be lesser than target and arr[0] != 0 as this condition would return 2 which is handled in the previous situation
    if(arr[0]!== 0 && arr[0] <= target) dp[arr[0]] = 1

    for(let i = 1; i<arr.length; i++){
        const curr: number[] = new Array(target + 1).fill(0)
        for(let t= 0; t <= target ; t++){
            const not_take = dp[t]

            let take = 0
            if(t >= arr[i]){
                take = dp[t-arr[i]]
            }
            curr[t] = take + not_take
        }
        dp = curr
    }

    return dp[target]
}

export function CallCountPartitionsTabulationSO(){
    const arr: number[] = [1,0,8,5,1,4]
    const total = arr.reduce((a,b)=> a+b)
    const diff = 17
    const target = (total-diff)/2
    if((total-diff) < 0 || (total-diff)%2) return 0
    const res = CountPartitionTabulationSO(arr, target)
    console.log(res)
}

```
