> - In a matrix M*N you need you need to find total number of unique way to reach from 0,0 to M-1 M-1, from top left cell to bottom right cell
> - you are only allowed to move right and down at each step


<img src="https://github.com/Maniabhishek/Data-Structure-And-Algorithm/assets/31520295/4351b278-8328-4770-bff4-e093f85a2792" width=400 height=400>
<img src="https://github.com/Maniabhishek/Data-Structure-And-Algorithm/assets/31520295/74997cad-0a49-46ff-91d6-0abeb50dbddb" width=400 height=400>
<img src="https://github.com/Maniabhishek/Data-Structure-And-Algorithm/assets/31520295/014f4fe9-eeae-4efe-a58a-3a5c739c1d7b" width=400 height=400>
<img src="https://github.com/Maniabhishek/Data-Structure-And-Algorithm/assets/31520295/3a161a01-adc2-41ce-b29b-7979b976c9e7" width=400 height=400>

- TC of the below soulution - for every index we have 2 moves 2,2,2,2,2.. which means 2^m*n  and SC is O(m-1, n-1)
```ts

function GridUniquePaths(i: number, j: number) :number{
    if(i === 0 && j === 0 ){
        return 1
    }
    if(i < 0 || j < 0){
        return 0
    }

    
    let up = GridUniquePaths(i - 1, j)
    let left = GridUniquePaths(i, j - 1)
    return up +  left
}

export function CallGridUniquePaths(){
    const m = 3
    const n = 3
    const res = GridUniquePaths(m-1, n-1)
    console.log(res)
}

```

- using memoization 
```ts
function GridUniquePathsMemoization(i: number, j: number, dp: number[][]) :number{
    if(i === 0 && j === 0 ){
        return 1
    }
    if(i < 0 || j < 0){
        return 0
    }

    if(dp[i][j]!== -1) return dp[i][j]
    
    let up = GridUniquePaths(i - 1, j)
    let left = GridUniquePaths(i, j - 1)

    return dp[i][j] = up +  left
}

export function CallGridUniquePathsMemoization(){
    const m = 3
    const n = 3
    const dp: number[][] = new Array(m).fill(new Array(n).fill(-1))
    const res = GridUniquePathsMemoization(m-1, n-1, dp)
    console.log(res)
}
```
> steps to convert memoization to tabulation
> - Declare base condition
> - express all the states in loops
> - copy the recurrance and write
- using tabulation bottom up starting from 0  - optimize the code 
```ts
function GridUniquePathTabulation(row: number,col: number, dp: number[][]){
    dp[0][0] = 1

    for(let i = 0; i <= row ; i++){
        for(let j=0; j<=col; j++){
            
            if(i===0 && j===0) {
                dp[i][j] = 1
            }else {
                let up = 0
                let left = 0
                if(i> 0) up = dp[i-1][j]
                if(j>0) left = dp[i][j-1]
    
                dp[i][j] = up + left
            }
        }
    }

    return dp[row][col]
}

export function CallGridUniquePathsTabulation(){
    const m = 3
    const n = 3
    const dp: number[][] = new Array(m).fill(new Array(n).fill(-1))
    const res = GridUniquePathTabulation(m-1, n-1, dp)
    console.log(res)
}

```
