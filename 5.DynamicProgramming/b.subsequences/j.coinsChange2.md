- We are given an array Arr with N distinct coins and a target. We have an infinite supply of each coin denomination. We need to find the number of ways we sum up the coin values to give us the target. 
- e.g., [1,2,3,4] target= 4 , e.g., total number of ways , {1,1,1,1}, {1,3}, {2,2}, {4}
```ts

function coinsChange(coins: number[], target: number, idx: number){
    if(idx === 0){
        if(target % coins[idx] === 0){
            return 1
        }else {
            return 0
        }
    }

    const not_take = coinsChange(coins, target, idx-1)
    let take = 0
    if(target >= coins[idx]) {
        take = 1 + coinsChange(coins, target - coins[idx], idx)
    }

    return take + not_take
}

export function Call_CoinsChange(){
    const coins = coinsChange([2,3,5,6], 18, 3)
    console.log(coins)
}
```
