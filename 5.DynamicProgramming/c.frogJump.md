> - there is a frog on the 1st step of an N stairs long staircase. The frog wants to reach the Nth stair. HEIGHT[i] is the height of the [i + 1]th stair. If frog jumps from the ith jth stairs , the energy lost in the jump is given by |HEIGHT[i-1]-HEIGHT[j-1]|. Frog can jump either to (i+1)th stair or to (i+2)th stair. Your task is to find the minimum total energy used by the frog to reach from 1st stair to Nth stair

- let's see an example:
> - energy array [10, 20,30, 10] 10->20 and then 20 to 10 will give result as 20 (total energy lost)

<img src="https://github.com/Maniabhishek/Data-Structure-And-Algorithm/assets/31520295/963bbfc0-64a2-47d8-b57f-0f1dab19e971" width=400 height=400>
<img src="https://github.com/Maniabhishek/Data-Structure-And-Algorithm/assets/31520295/af986820-7229-4e43-8681-04166e9ec61e" width=400 height=400>
<img src="https://github.com/Maniabhishek/Data-Structure-And-Algorithm/assets/31520295/42c25044-1a91-409a-b65a-d1372a2fce13" width=400 height=400>

```ts
function FrogJump(n: number, energy: number[]): number{
    if(n === 0){
        return 0
    }

    let left: number = FrogJump(n - 1, energy) + Math.abs(energy[n] - energy[n-1])
    let right: number = Infinity

    if(n > 1){
        right = FrogJump(n-2, energy) + Math.abs(energy[n] - energy[n - 2])
    }

    return Math.min(left, right)
}

export function CallFrogJump(){
    // frog is at 1st stair and wants to reach at 5th stair
    let n = 6

    const energy = [30, 10, 60, 10, 60, 50]

    const res: number = FrogJump(n-1, energy)
    console.log(res)
}

```

```ts
// let's convert this to a memoization solution
function FrogJumpMemoize(n: number, energy: number[], dp: number[]): number{
    if(n === 0){
        return 0
    }

    if(dp[n] !== -1){
        return dp[n]
    }

    let left: number = FrogJump(n - 1, energy) + Math.abs(energy[n] - energy[n-1])
    let right: number = Infinity

    if(n > 1){
        right = FrogJump(n-2, energy) + Math.abs(energy[n] - energy[n - 2])
    }

    // dp[n] = Math.min(left, right)

    return dp[n] = Math.min(left, right)
}

export function CallFrogJumpMemoize(){
    // frog is at 1st stair and wants to reach at 5th stair
    let n = 6

    const energy = [30, 10, 60, 10, 60, 50]
    const dp: number[] = new Array(6).fill(-1)

    const res: number = FrogJumpMemoize(n-1, energy, dp)
    console.log(res)
}
```

// lets write the above program using tabulation
```ts
function FrogJumpTabulation(n: number, energy: number[], dp: number[]){
    dp[0] = 0

    for(let i = 1; i <= n; i++ ){
        let left = dp[i-1] + Math.abs(energy[i]-energy[i-1])
        let right = Infinity
        if(i > 1) {
            right = dp[i-2] + Math.abs(energy[i] - energy[i-2])
        }

        dp[i] = Math.min(left, right)
    }

    console.log(dp)
    return dp[n]
}

export function CallFrogJumpTabulation(){
    // frog is at 1st stair and wants to reach at 5th stair
    let n = 6

    const energy = [30, 10, 60, 10, 60, 50]
    const dp: number[] = new Array(6).fill(-1)
    console.log(dp)
    // passing n - 1 , because i am considering index , so assume frog is jumping from 0 to 5 which is equivalent to 1 to 6
    const res: number = FrogJumpTabulation(n-1, energy, dp)
    console.log(res)
}
```
> - now with tabulation form we have certainly reduced the time complexity as stack space is reduced
> - lets try to reduce the space complexity
> - whenever you see if we are trying to find the i - 1 and i - 2 values then we can always improve the space complexity
> - if we see we have dp[0] = 0 , for any other values we need i-1 and i-2 values , thus prev2 and prev , where prev will keep becoming prev2 and current num will keep becoming prev
> - and using this techinique qe can reduce the space complexity


```ts
function FrogJumpSpaceOptimized(n: number, energy: number[]){
    let prev = 0
    let prev2 = 0

    for(let i = 1; i <=n; i++){
        let left = prev + Math.abs(energy[i] - energy[i-1])
        let right = Infinity
        if(i > 1){
            right = prev2 + Math.abs(energy[i] - energy[i-2])
        }

        let curi = Math.min(left, right)
        prev2 = prev
        prev = curi
    }

    return prev
}

export function CallFrogJumpSpaceOptimized(){
    // frog is at 1st stair and wants to reach at 5th stair
    let n = 6

    const energy = [30, 10, 60, 10, 60, 50]
    // passing n - 1 , because i am considering index , so assume frog is jumping from 0 to 5 which is equivalent to 1 to 6

    const res = FrogJumpSpaceOptimized(n-1, energy)
    console.log(res)
}
```
