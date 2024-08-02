> - when we have variable starting and ending point
> - from 1st row from any column , we need to reach final row in any column
> - allowed movement up, left diagonal , right diagonal

- if we fix ending or starting row let's if we start from final row 0 column then we always have to reach to 0th column , so we need to find the same from each column

```ts
function MinPathumBothVariable(i: number, j: number, arr: number[][]){
    if( j < 0 || j >= arr[0].length) return -Infinity
    if(i === 0 ) return arr[0][j]

    const up = arr[i][j] + MinPathumBothVariable(i-1, j, arr)
    const rd = arr[i][j] + MinPathumBothVariable(i-1, j-1, arr)
    const ld = arr[i][j] + MinPathumBothVariable(i-1, j+1, arr)

    return Math.max(up, Math.max(rd, ld))
}

export function CallMinPathumBothVariable(){
    const arr: number[][] = [[1, 2, 10, 4], [100, 3, 2, 1], [1, 1, 20, 2], [1, 2, 2, 1]]

    let max = -Infinity

    for(let i = 0; i < arr[0].length; i++){
        const newMax = MinPathumBothVariable(arr.length - 1, i, arr)

        max = Math.max(max, newMax)
    }
    console.log(max)
}
```

- using memoization
```ts
function MinPathBothVariableMemoization(i: number, j: number, arr: number[][], dp: number[][]){
    if( j < 0 || j >= arr[0].length) return -Infinity
    if(i === 0 ) return arr[0][j]

    if(dp[i][j] !== -1) return dp[i][j]

    const up = arr[i][j] + MinPathBothVariableMemoization(i-1, j, arr, dp)
    const rd = arr[i][j] + MinPathBothVariableMemoization(i-1, j-1, arr, dp)
    const ld = arr[i][j] + MinPathBothVariableMemoization(i-1, j+1, arr, dp)

    return dp[i][j] = Math.max(up, Math.max(rd, ld))
}

export function CallMinPathBothVariableMemoization(){
    const arr: number[][] = [[1, 2, 10, 4], [100, 3, 2, 1], [1, 1, 20, 2], [1, 2, 2, 1]]
    
    let dp: number[][] = new Array(arr.length).fill(null).map(()=> new Array(arr[0].length).fill(-1))

    console.log(dp)

    let max = -Infinity

    // dp = [[-1,-1,-1,-1], [-1,-1,-1,-1], [-1,-1,-1,-1], [-1,-1,-1,-1]]
    for(let i = 0; i < arr[0].length; i++){
        const newMax = MinPathBothVariableMemoization(arr.length - 1, i, arr, dp)

        max = Math.max(max, newMax)
    }
    console.log(max)
}
```

```ts
function MinPathBothVariableTabulation(arr: number[][]){
    const m = arr.length
    const n = arr[0].length

    const dp: number[][] = new Array(m).fill(null).map(() => new Array(n).fill(0))

    for(let k = 0; k < n; k++){
        dp[0][k] = arr[0][k]
    }
    for(let i = 1; i < m; i++){
        for(let j = 0; j < n; j++){
            const down = arr[i][j] + dp[i-1][j]
            let upRightDiagonal = -Infinity
            // j+1 < n
            if(j+1 < n){
                upRightDiagonal = arr[i][j] + dp[i-1][j+1]
            }
            let upLeftDiagonal = -Infinity
            //here j-1 >= 0
            if(j > 0 ){
                upLeftDiagonal = arr[i][j] + dp[i-1][j-1]
            }

            dp[i][j] = Math.max(upRightDiagonal, Math.max(down, upLeftDiagonal))
        }
    }
    
    let max = dp[m-1][0]
    for(let i = 1; i < n; i++){
        max = Math.max(max, dp[m-1][i])
    }

    return max
}

export function CallMinPathBothVariableTabulation(){
    const arr: number[][] = [[1, 2, 10, 4], [100, 3, 2, 1], [1, 1, 20, 2], [1, 2, 2, 1]]
    const res = MinPathBothVariableTabulation(arr)
    console.log(res)
}
```

```ts
function MinPathBothVariableTabulationSO(arr: number[][]) {
    const m = arr.length
    const n = arr[0].length

    let prev: number[] = [0,0,0,0]
    
    for(let k = 0; k < n; k++){
        prev[k] = arr[0][k]
    }
    for(let i = 1; i < m; i++){
        const curr: number[] = [0,0,0,0]
        for(let j = 0; j < n; j++){
            const down = arr[i][j] + prev[j]
            let upRightDiagonal = -1e8
            // j+1 < n
            if(j+1 < n){
                upRightDiagonal = arr[i][j] + prev[j+1]
            }
            let upLeftDiagonal = -1e8
            //here j-1 >= 0
            if(j > 0 ){
                upLeftDiagonal = arr[i][j] + prev[j-1]
            }

            curr[j] = Math.max(upRightDiagonal, Math.max(down, upLeftDiagonal))
        }
        prev = curr
    }
    
    let max = prev[0]
    for(let i = 1; i < n; i++){
        max = Math.max(max, prev[i])
    }

    return max
}

export function CallMinPathBothVariableTabulationSO(){
    const arr: number[][] = [[1, 2, 10, 4], [100, 3, 2, 1], [1, 1, 20, 2], [1, 2, 2, 1]]
    const res = MinPathBothVariableTabulationSO(arr)
    console.log(res)
}
```
