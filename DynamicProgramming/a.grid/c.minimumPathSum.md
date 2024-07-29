> - Ninjaland is country in the shape of a 2-dimensional grid 'GRID', with 'N' rows and 'M' columns. Each point in the grid has some cost associated with it.
> - Find a path from top left i.e., (0,0) to the bottom right i.e., ('N' - 1, 'M' - 1) which minimizes the sum of the cost of all the numbers along the path. You need to tell the minimum sum of that path.

```ts
function minimumPathSum(m:number, n: number, arr:number[][]){
    if(m === 0 && n===0) return arr[m][n]
    if(m <0 || n < 0) return Infinity

    const up = arr[m][n] + minimumPathSum(m-1, n, arr)
    const left = arr[m][n] + minimumPathSum(m, n-1, arr)

    return Math.min(up, left)
}

export function CallMinimumPathSum(){
    const arr: number[][] = [[5,9,6], [11,5,2]]

    const res = minimumPathSum(arr.length - 1, arr[0].length - 1, arr)

    console.log(res)
}
```

- using memoization
```ts
function minimumPathSumMemoization(m:number, n: number, arr:number[][], dp: number[][]){
    if(m === 0 && n===0) return arr[m][n]
    if(m <0 || n < 0) return Infinity

    if(dp[m][n] !== -1) return dp[m][n]

    const up = arr[m][n] + minimumPathSum(m-1, n, arr)
    const left = arr[m][n] + minimumPathSum(m, n-1, arr)

    return dp[m][n] = Math.min(up, left)
}

export function CallMinimumPathSumMemoization(){
    const arr: number[][] = [[5,9,6], [11,5,2]]
    const dp: number[][] = new Array(arr.length).fill(new Array(arr[0].length).fill(-1))
    const res = minimumPathSumMemoization(arr.length - 1, arr[0].length - 1, arr, dp)
    console.log(res)
}
```

- using tabulation 
```ts
function minimumPathSumTabulation(arr: number[][]){
    const rows : number = arr.length
    const cols: number = arr[0].length

    const dp: number[][] = new Array(arr.length).fill(new Array(arr[0].length))
    dp[0][0] = arr[0][0]

    for(let i = 0; i< rows; i++){
        for(let j = 0; j< cols; j++){
            if(i===0 && j===0){
                dp[i][j] = arr[i][j]
            }else {
                let up = Infinity
                if(i > 0){
                    up = arr[i][j] + dp[i-1][j]
                }
                let left = Infinity
                if(j> 0){
                    left = arr[i][j] + dp[i][j-1]
                }
                dp[i][j] = Math.min(up, left)
            }
        }
    }

    return dp[arr.length - 1][arr[0].length - 1]
}

export function CallminimumPathSumTabulation(){
    const arr: number[][] = [[5,9,6], [11,5,2]]
    const res = minimumPathSumTabulation(arr)

    console.log(res)
}
```

- improving space complexity in above tabulation function 
```ts
function minimumPathSumTabulationSpaceOptimization(arr: number[][]){
    const rows : number = arr.length
    const cols: number = arr[0].length

    let prev: number[] = new Array(arr[0].length)
    prev[0] = arr[0][0]

    for(let i = 0; i < rows; i++) {
        const curr: number[] = new Array(arr[0].length)
        for(let j = 0; j< cols; j++){
            if(i===0 && j===0){
                curr[j] = arr[i][j]
            }else {
                let up = Infinity
                if(i > 0){
                    up = arr[i][j] + prev[j]
                }
                let left = Infinity
                if(j> 0){
                    left = arr[i][j] + curr[j-1]
                }
                curr[j] = Math.min(up, left)
            }
        }

        prev = curr
    }

    return prev[arr[0].length - 1]
}

export function CallminimumPathSumTabulationSpaceOptimization(){
    const arr: number[][] = [[5,9,6], [11,5,2]]
    const res = minimumPathSumTabulationSpaceOptimization(arr)

    console.log(res)
}
```
