- we need to cut the rod in such a way that can get the maximum price , target length has been given , with price array , each index have price value for (idx+1)length 
- let'e take an example if we have 5 length target and we have price list of length 5 then we can cut in 1,2,3,4,5 , these many lengths , so we can think of at each indexes as collecting rod of (index+1)length at each index

```ts
function RodCutting(price: number[], targetLength: number, idx: number){
    if(idx === 0){
        return targetLength * price[0]
    }

    const not_take = RodCutting(price, targetLength, idx - 1)
    let take = -Infinity
    const currentRodLengthCur = idx+1
    if(targetLength >= currentRodLengthCur){
        take = price[idx] + RodCutting(price, targetLength - currentRodLengthCur, idx)
    }

    return Math.max(not_take, take)
}

export function CallRodCutting(){
    const price: number[] = [2,5,7,8,10]
    const targetLength : number = 5
    console.log(RodCutting(price, targetLength, price.length - 1))
}

function RodCuttingMemoization(price: number[], targetLength: number, idx: number, dp: number[][]){
    if(idx === 0){
        return targetLength * price[0]
    }

    if(dp[idx][targetLength] !== -1) return dp[idx][targetLength]

    const not_take = RodCuttingMemoization(price, targetLength, idx - 1, dp)
    let take = -Infinity
    const currentRodLengthCur = idx+1
    if(targetLength >= currentRodLengthCur){
        take = price[idx] + RodCuttingMemoization(price, targetLength - currentRodLengthCur, idx, dp)
    }

    return dp[idx][targetLength] = Math.max(not_take, take)
}

export function CallRodCuttingMemoization(){
    const price: number[] = [2,5,7,8,10]
    const targetLength : number = 5
    const dp: number[][] = new Array(price.length).fill(null).map(()=> new Array(targetLength + 1).fill(-1))
    console.log(RodCuttingMemoization(price, targetLength, price.length - 1, dp))
}

function RodCuttingTabulation(price: number[], targetLength: number){
    const dp: number[][] = new Array(price.length).fill(null).map(()=> new Array(targetLength + 1).fill(0))

    for(let t = 0; t <= targetLength; t++){
        dp[0][t] = t * price[0]
    }

    for(let i = 1; i < price.length; i++){
        for(let t = 0; t <= targetLength ; t++){
            const not_take = dp[i-1][t]
            let take = -Infinity
            const currentRodLength = i + 1
            if(t >= currentRodLength){
                take = price[i] + dp[i][t-currentRodLength]
            }
            dp[i][t] = Math.max(not_take, take)
        }
    }
    return dp[price.length - 1][targetLength]
}

export function CallRodCuttingTabulation(){
    const price: number[] = [2,5,7,8,10]
    const targetLength : number = 5
    console.log(RodCuttingTabulation(price, targetLength))
}

function RodCuttingTabulation_SO(price: number[], targetLength: number){
    let prev: number[] = new Array(targetLength + 1).fill(0)

    for(let t = 0; t <= targetLength; t++){
        prev[t] = t * price[0]
    }

    for(let i = 1; i < price.length; i++){
        const curr: number[] = new Array(targetLength + 1).fill(0)
        for(let t = 0; t <= targetLength ; t++){
            const not_take = prev[t]
            let take = -Infinity
            const currentRodLength = i + 1
            if(t >= currentRodLength){
                take = price[i] + curr[t-currentRodLength]
            }
            curr[t] = Math.max(not_take, take)
        }
        prev = curr
    }
    return prev[targetLength]
}

export function CallRodCuttingTabulation_SO(){
    const price: number[] = [2,5,7,8,10]
    const targetLength : number = 5
    console.log(RodCuttingTabulation_SO(price, targetLength))
}

```
