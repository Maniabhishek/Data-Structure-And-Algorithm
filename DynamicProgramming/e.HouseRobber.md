> mr x is a professional robber planning to rob houses along a street. Each house has a certain amount of money hidden. All houses along this street are arranged in a circle. That means the first house is the neighbour of the last one. Meanwhile adjacent house have a security system connected, and it will automatically contact the police if two adjacent houses were broken into on the same night.
> you are given an array/list of of non-negative integers 'ARR' representing the amount of each house. Your task is to return the maximum amount of money Mr. X can rob tonight without alerting the police


-  this above prbolem is similar to the previous problem , there is only one difference that 1st and last element are adjacent , which means if we are taking last element then we cannot take 1st element and if we are taking 1st element then we cannot take last element.,
-  so if we take 0 to n-1 element and find the max sum of non adjecent sum and max sum of non adjacent element from 1 to n then max of these two will be the result.

```ts
function maxSumNonAdjacent(index: number, arr: number[]){
    if(index === 0) return arr[0]
    if(index < 0) return 0

    const pick = arr[index] + maxSumNonAdjacent(index - 2, arr)
    const not_pick = maxSumNonAdjacent(index - 1, arr)

    return Math.max(pick, not_pick)
}

function HouseRobber(){
    const moneyArr: number[] = [2,3,2]
    const temp1: number[] = []
    const temp2: number[] = []

    for(let i = 0; i < moneyArr.length; i++){
        if(i !== 0) temp1.push(moneyArr[i])
        if(i !== (moneyArr.length - 1)) temp2.push(moneyArr[i])
    }

    const res1 = maxSumNonAdjacent(temp1.length - 1, temp1)
    const res2 = maxSumNonAdjacent(temp2.length - 1, temp2)

    return Math.max(res1, res2)
}

export function CallHouseRobber(){
    const res = HouseRobber()
    console.log(res)
}
```
