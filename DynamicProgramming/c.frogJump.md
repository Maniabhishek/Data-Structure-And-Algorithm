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
