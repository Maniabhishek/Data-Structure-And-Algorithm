> same as previous problem with blockers or dead end at some indexes
> x needs to reach from (0, 0) to (m-1, n-1)

```ts
function UniquePath2(m: number, n: number, arr: number[][]){
    if(m >= 0 && n >= 0 && arr[m][n] === -1) return 0
    if(m === 0 && n === 0) return 1
    if(m < 0 || n < 0) return 0

    const up = UniquePath2(m-1, n, arr)

    const left = UniquePath2(m, n - 1, arr)
    return left + up
}

function UniquePath2A(m: number, n: number, arr: number[][]){
    if(m === 0 && n === 0) return 1
    if(m < 0 || n < 0) return 0

    
    let up= 0
    if(m > 0 && arr[m-1][n] !== -1){
        up = UniquePath2A(m-1, n, arr)
    }

    let left = 0
    if(n > 0 && arr[m][n-1] !== -1){
        left = UniquePath2A(m, n - 1, arr)
    }
    return left + up
}

export function CallUniquePath2(){
    const m = 3
    const n = 3
    const arr = [ [ 0, 0, 0 ], [ 0, -1, 0 ], [ 0, 0, 0 ] ]

    const res = UniquePath2A(m-1, n-1, arr)
    console.log(res)
}
```

- using memoization reducing the time complexity
```ts
function UniquePathSpaceOptimization(m: number, n: number, arr: number[][], dp: number[][]){
    if(m >= 0 && n >= 0 && arr[m][n] === -1) return 0
    if(m === 0 && n === 0) return 1
    if(m < 0 || n < 0) return 0

    if(dp[m][n] != -1) return dp[m][n]

    const up = UniquePath2(m-1, n, arr)

    const left = UniquePath2(m, n - 1, arr)
    return dp[m][n] = left + up
}

export function CallUniquePathSpaceOptimization(){
    const m = 3
    const n = 3
    const arr = [ [ 0, 0, 0 ], [ 0, -1, 0 ], [ 0, 0, 0 ] ]
    const dp:number[][] = new Array(m).fill(new Array(n).fill(-1))

    const res = UniquePathSpaceOptimization(m-1,n-1, arr, dp)
    console.log(res)
}
```

-  tabulation
```ts
// using tabulation 
// step:
// write base condition 
// express all the state in loops
// copy all the recurrance and find max

function UniquePathTabulation(m: number, n: number, arr: number[][]){
    const dp: number[][] = new Array(m+1).fill(new Array(n+1).fill(-1))

    dp[0][0] = 1

    for(let i=0; i<=m; i++){
        for(let j=0; j<=n; j++){
            if(i === 0 && j ===0){
                dp[i][j] = 1
            }else {
                let up = 0
                let left = 0
                if(i>0 && arr[i-1][j] !== -1){
                    up = dp[i-1][j]
                } 

                if(j>0 && arr[i][j-1] !== -1){
                    left = dp[i][j-1]
                } 

                dp[i][j] = left + up
            }
        }
    }

    return dp[m][n]
}

export function CallUniquePathTabulation(){
    const m = 3
    const n = 3
    const arr = [ [ 0, 0, 0 ], [ 0, -1, 0 ], [ 0, 0, 0 ] ]

    const res = UniquePathTabulation(m-1, n-1, arr)
    console.log(res)
}


// or
function UniquePathTabulation2(m: number, n: number, arr: number[][]){
    const dp: number[][] = new Array(m+1).fill(new Array(n+1).fill(-1))

    dp[0][0] = 1

    for(let i=0; i<=m; i++){
        for(let j=0; j<=n; j++){
            if(i === 0 && j ===0){
                dp[i][j] = 1
            } else if(arr[i][j] === -1){
                dp[i][j] = 0
            }else {
                let up = 0
                let left = 0
                if(i>0){
                    up = dp[i-1][j]
                } 
                if(j>0){
                    left = dp[i][j-1]
                } 
                dp[i][j] = left + up
            }
        }
    }

    return dp[m][n]
}

export function CallUniquePathTabulation2(){
    const m = 3
    const n = 3
    const arr = [ [ 0, 0, 0 ], [ 0, -1, 0 ], [ 0, 0, 0 ] ]

    const res = UniquePathTabulation2(m-1, n-1, arr)
    console.log(res)
}
```

```ts
function UniquePathTabulationSpaceOptimization(m: number, n: number, arr: number[][]){
    let prev: number[] = new Array(n+1).fill(0)

    for(let i=0; i<=m; i++){
        const curr: number[] = new Array(n+1)
        for(let j=0; j<=n; j++){
            if(i === 0 && j ===0){
                curr[j] = 1
            } else if(arr[i][j] === -1){
                curr[j] = 0
            }else {
                let up = 0
                let left = 0
                up = prev[j]
                if(j>0){
                    left = curr[j-1]
                } 
                curr[j] = left + up
            }
        }
        prev = curr
    }

    return prev[n]
}

export function CallUniquePathTabulationSpaceOptimization(){
    const m = 3
    const n = 3
    const arr = [ [ 0, 0, 0 ], [ 0, -1, 0 ], [ 0, 0, 0 ] ]

    const res = UniquePathTabulationSpaceOptimization(m-1, n-1, arr)
    console.log(res)
}
```

