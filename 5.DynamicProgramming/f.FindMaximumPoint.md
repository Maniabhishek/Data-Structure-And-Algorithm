> Person X is planning this 'N' days-long training schedule. Each day, he can perform any one of these three activities. (Running, fighting practice, or Learning New Moves). Each activity has same merit points on each day. As Ninja has to improve all this skills. He can't do the same activity in two consecutive days. Can you help Ninja find out the maximum merit points Ninja can earn?
> You are given a 2D array of size N*3 points with the points corresponding to each day and activity. Your task is to calculate the maximum number of merit points Ninja can earn.

<img src="https://github.com/Maniabhishek/Data-Structure-And-Algorithm/assets/31520295/ee24b6c1-0e13-498e-ae90-72f055b33320" width=400 height=400>
<img src="https://github.com/Maniabhishek/Data-Structure-And-Algorithm/assets/31520295/b4799b4f-33c9-4e0d-94cd-921982bdaefc" width=400 height=400>




```ts
function FindMaxForNinja(days: number, last: number, arr: number[][]){
    if(days === 0) {
        let max = 0;
        for(let i = 0; i < 3; i++){
            if(i !== last){
                max = Math.max(arr[days][i], max)
            }
        }
        return max
    }

    let max = 0;
    for(let i = 0; i < 3; i++){
        if(i !== last){
            let points = arr[days][i] + FindMaxForNinja(days - 1, i, arr)
            max = Math.max(points, max)
        }
    }

    return max
}

export function CallFindMaxPointsForNinja(){
    const arr: number[][] = [[5, 10, 6], [20,100, 30], [40, 20, 30]]

    const res = FindMaxForNinja(arr.length - 1, 3, arr)

    console.log(res)
}
```
-  TC O(N*4)*3 , space complexity O(N) is stack space + O(N*4)
-  memoization what we changing or what are the states (there are 4 states, 0,1,2,3) , days and last values are changing then stores values for that 

```ts
function FindMaxForNinjaMemoization(days: number, last: number, arr: number[][], dp: number[][]){
    if(days === 0) {
        let max = 0;
        for(let i = 0; i < 3; i++){
            if(i !== last){
                max = Math.max(arr[days][i], max)
            }
        }
        return max
    }

    if(dp[days][last] !== -1) return dp[days][last]

    let max = 0;
    for(let i = 0; i < 3; i++){
        if(i !== last){
            let points = arr[days][i] + FindMaxForNinja(days - 1, i, arr)
            max = Math.max(points, max)
        }
    }

    return dp[days][last] = max
}

export function CallFindMaxForNinjaMemoization(){
    const arr: number[][] = [[5, 10, 6], [20,100, 30], [40, 20, 30]]
    const dp: number[][] = new Array(arr.length).fill(new Array(4).fill(-1))

    const res = FindMaxForNinjaMemoization(arr.length - 1, arr.length, arr, dp)
    console.log(res)
}
```

- lets improve space complexity by removing stack space

```ts
//  space complexity O(N) is stack space + O(N*4) lets optimize and remove O(N) stack space
function FindMaxPointForNinjaTabulation(arr: number[][], dp: number[][]){
    dp[0][0] = Math.max(arr[0][1], arr[0][2])
    dp[0][1] = Math.max(arr[0][0], arr[0][2])
    dp[0][2] = Math.max(arr[0][0], arr[0][1])
    dp[0][3] = Math.max(arr[0][0], Math.max(arr[0][1], arr[0][2]))

    for(let days = 1; days < 3; days++){
        for(let last = 0; last< 4; last++){
            dp[days][last] = 0;
            for(let task = 0; task < 3; task++){
                if(task !== last){
                    // bottom up
                    let points = arr[days][task] + dp[days-1][task]
                    dp[days][last] = Math.max(dp[days][last], points)
                }
            }
        }
    }

    return dp[arr.length - 1][3]
}

export function CallFindMaxPointForNinjaTabulation(){
    const arr: number[][] = [[5, 10, 6], [20,100, 30], [40, 20, 30]]
    const dp: number[][] = new Array(arr.length).fill(new Array(4).fill(-1))

    const res = FindMaxPointForNinjaTabulation(arr, dp)
    console.log(res)
}
```

- can we do space optimization yes as we are using previous data , whenever you see  -1  -2, then there is always scope for space optimization
- space complexity O(N) is stack space + O(N*4) lets optimize and remove O(N) stack space
  
```ts
function FindMaxPointForNinjaTabulationSpaceOptimized(arr: number[][], prev: number[]){
    prev[0] = Math.max(arr[0][1], arr[0][2])
    prev[1] = Math.max(arr[0][0], arr[0][2])
    prev[2] = Math.max(arr[0][0], arr[0][1])
    prev[3] = Math.max(arr[0][0], Math.max(arr[0][1], arr[0][2]))

    for(let days = 1; days < 3; days++){
        const temp: number[] = []
        for(let last = 0; last< 4; last++){
            temp[last] = 0;
            for(let task = 0; task < 3; task++){
                if(task !== last){
                    // bottom up
                    let points = arr[days][task] + prev[task]
                    temp[last] = Math.max(temp[last], points)
                }
            }
        }
        prev = temp
    }

    return prev[3]
}

export function CallFindMaxPointForNinjaTabulationSpaceOptimized(){
    const arr: number[][] = [[5, 10, 6], [20,100, 30], [40, 20, 30]]
    const dp: number[] = new Array(4).fill(-1)

    const res = FindMaxPointForNinjaTabulationSpaceOptimized(arr, dp)
    console.log(res)
}
```
