> - with n rows matrix, and ith row has i+1 elements , for example 0th row has 1 element , row 1 has 2 element, row 2 has 3 element
> - find the min path sum from 0,0 to last row any column , this mean fixed starting point and variable ending point

- how to solve
- if we start from 0,0 and if we end up in the last row, so the base condition can be when i === n-1
- first we have to represent the problem in terms of index
- then for all the index we will do all the stuffs for that index
- then find min or max

- find minimum path sum to reach bottom row from top row
```ts
function MinPathTriangle(i: number, j: number, path: number[][]): number{
    if(i === (path.length-1)) return path[i][j]

    const l = path[i][j] + MinPathTriangle(i+1, j, path)
    const r = path[i][j] + MinPathTriangle(i+1, j+1, path)

    return Math.min(l,r)
}

export function CallMinPathTriangle(){
    const arr: number[][] = [[1], [2,3], [3,6,7], [8,9,6,1]]
    const res = MinPathTriangle(0, 0, arr)
    console.log(res)
}
```

```ts
function MinPathTriangleMemoization(i: number, j: number, triangle: number[][], dp: number[][], n: number): number {
    if(i === (n-1)) return triangle[n-1][j]
    if(dp[i][j] !== -1) return dp[i][j]
    const down: number = triangle[i][j] + MinPathTriangleMemoization(i+1, j, triangle, dp, n)
    const diagonal: number = triangle[i][j] + MinPathTriangleMemoization(i+1, j+1, triangle, dp, n)
    dp[i][j] = Math.min(down, diagonal)
    return dp[i][j]
}

export function CallMinPathTriangleMemoization(){
    const arr: number[][] = [[1], [2,3], [3,6,7], [8,9,6,1]]
    const n = arr.length
    let dp: number[][] = new Array(n).fill(new Array(n).fill(-1))
    console.log(dp)
    dp = [[-1,-1,-1,-1], [-1,-1,-1,-1], [-1,-1,-1,-1], [-1,-1,-1,-1]]
    console.log(dp)
    const res = MinPathTriangleMemoization(0, 0, arr, dp, n)
    console.log(res)
}
```

```ts
function MinPathTriangleTabulation(triangle: number[][], n){
    const dp: number[][] = new Array(n).fill(null).map(()=> new Array(n).fill(0))

    // what is going to be the base condition i === n - 1 , for this it is going to have four different values hence we will try with all the values 

    for(let k = 0; k < n ; k++){
        dp[n-1][k] = triangle[n-1][k]
        for(let i = n-2; i >= 0; i--){
            for(let j = i; j >= 0; j--) {
                const up = triangle[i][j] + dp[i+1][j]
                const upDiagonal = triangle[i][j] + dp[i+1][j+1]
                dp[i][j] = Math.min(up, upDiagonal)
            }
        }
    }

    return dp[0][0]
}

export function CallMinPathTriangleTabulation(){
    const arr: number[][] = [[1], [2,3], [3,6,7], [8,9,6,1]]
    const res = MinPathTriangleTabulation(arr, 4)
    console.log(res)
}
```

```ts
function MinPathTriangleTabulationSO(triangle: number[][], n){
    let prev: number[] = new Array(n).fill(0)

    // what is going to be the base condition i === n - 1 , for this it is going to have four different values hence we will try with all the values 

    for(let k = 0; k < n ; k++){
        prev[k] = triangle[n-1][k]
    }
        for(let i = n-2; i >= 0; i--){
            const curr: number[] = new Array(n).fill(0)
            for(let j = i; j >= 0; j--) {
                const up = triangle[i][j] + prev[j]
                const upDiagonal = triangle[i][j] + prev[j+1]
                curr[j] = Math.min(up, upDiagonal)
            }
            prev = curr
        }

    return prev[0]
}

export function CallMinPathTriangleTabulationSO(){
    const arr: number[][] = [[1], [2,3], [3,6,7], [8,9,6,1]]
    const res = MinPathTriangleTabulationSO(arr, arr.length)
    console.log(res)
}
```
