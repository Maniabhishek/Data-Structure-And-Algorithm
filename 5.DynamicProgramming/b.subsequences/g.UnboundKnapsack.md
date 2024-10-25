- now this problem is simplar to knapsack but the only difference here is that , there is infinite supply of each weight
- lets take an example
- wt: [2,4,6]
- val:[5,6,10] and bag size of 10
- so we need to maximize the value suc that we dont exceed the bag size limit

```
//TC exponential, SC: O(targetWt)
function UnboundKnapsack(weight: number[], val: number[], idx: number, targetWt: number){
    if(idx === 0){
        if(targetWt >= weight[0]) return Math.floor(targetWt/weight[0]) * val[0]
        else return 0
    }

    const not_take = UnboundKnapsack(weight, val, idx - 1, targetWt)
    let take = -Infinity
    if(targetWt >= weight[idx]){
        take = val[idx] + UnboundKnapsack(weight, val, idx, targetWt - weight[idx])
    }

    return Math.max(take, not_take)
}

export function CallUnboundKnapsack(){
    const weight: number[] = [2,4,6]
    const val: number[] = [5,11,13]
    const targetWeight: number = 10

    console.log(UnboundKnapsack(weight, val, weight.length - 1, targetWeight))
}

function UnboundKnapsackMemoization(weight: number[], val: number[], idx: number, targetWt: number, dp: number[][]){
    if(idx === 0){
        if(targetWt >= weight[0]) return Math.floor(targetWt/weight[0]) * val[0]
        else return 0
    }

    if(dp[idx][targetWt] !== -1) return dp[idx][targetWt]

    const not_take = UnboundKnapsack(weight, val, idx - 1, targetWt)
    let take = -Infinity
    if(targetWt >= weight[idx]){
        take = val[idx] + UnboundKnapsack(weight, val, idx, targetWt - weight[idx])
    }

    return dp[idx][targetWt] = Math.max(take, not_take)
}

export function CallUnboundKnapsackMemoization(){
    const weight: number[] = [2,4,6]
    const val: number[] = [5,11,13]
    const targetWeight: number = 10
    const dp: number[][] = new Array(weight.length).fill(null).map(()=> new Array(targetWeight + 1).fill(-1))

    console.log(UnboundKnapsackMemoization(weight, val, weight.length - 1, targetWeight, dp))
}

function UnboundKnapsackTabulation(weight: number[], val: number[], targetWt: number){
    const dp: number[][] = new Array(weight.length).fill(null).map(()=> new Array(targetWt + 1).fill(0))

    for(let t = 0; t <= targetWt; t++){
        if(t >= weight[0]) dp[0][t] = Math.floor(t/weight[0]) * val[0]
    }

    for(let i = 1; i < weight.length; i++){
        for(let tw = 0; tw <= targetWt; tw++){
            const not_take = dp[i-1][tw]
            let take = -Infinity
            if(tw >= weight[i]){
                take = val[i] + dp[i][tw-weight[i]]
            }

            dp[i][tw] = Math.max(take, not_take)
        }
    }
    return dp[weight.length - 1][targetWt]
}

export function CallUnboundKnapsackTabulation(){
    const weight: number[] = [2,4,6]
    const val: number[] = [5,11,13]
    const targetWeight: number = 10

    console.log(UnboundKnapsackTabulation(weight, val, targetWeight))
}

function UnboundKnapsackTabulation_SO(weight: number[], val: number[], targetWt: number){
    let prev: number[] = new Array(targetWt + 1).fill(0)

    for(let t = 0; t <= targetWt; t++){
        if(t >= weight[0]) prev[t] = Math.floor(t/weight[0]) * val[0]
    }

    for(let i = 1; i < weight.length; i++){
        const curr: number[] = new Array(targetWt + 1).fill(0)
        for(let tw = 0; tw <= targetWt; tw++){
            const not_take = prev[tw]
            let take = -Infinity
            if(tw >= weight[i]){
                take = val[i] + curr[tw-weight[i]]
            }

            curr[tw] = Math.max(take, not_take)
        }
        prev = curr
    }
    return prev[targetWt]
}

export function CallUnboundKnapsackTabulation_SO(){
    const weight: number[] = [2,4,6]
    const val: number[] = [5,11,13]
    const targetWeight: number = 10

    console.log(UnboundKnapsackTabulation_SO(weight, val, targetWeight))
}

```
