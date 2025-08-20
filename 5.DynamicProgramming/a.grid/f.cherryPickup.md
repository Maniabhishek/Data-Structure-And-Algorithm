> - alice and bob wants to collect as many chocolate as they want from 2d Matrix alice start from (0,0) and bob starts from (0,n-1)
> - we need to help them so that they can collect maximum chocolates when they reach at the bottom row, when both reach at same point only one of them can take the chocolates, alice and bob can move 1 step below everytime , (i+1,j)(i+1,j-1)(i+1,j+1)

- so we need to find the maximum number of chocolates when both reach at the bottom , and we have got the fixed starting point ***so we will always start from 0th row and will go all the way to the bottom***
- so what could be the approach, we have to find the maximum , and find all the possible way , so use recursion ,
- base condition here could be when we reach to the bottom row just return the respective number in the indexes
- also handle the out of bound situation , as alice and bob are allowed to move in three direction , left diagonal down , down , right diagonal down

```ts

function cherryPickup(i: number, j1: number, j2: number, arr: number[][]){
    const n = arr[0].length
    const m = arr.length
    if(j1 < 0 || j2 < 0 || j1 > n - 1 || j2 > n - 1) return -1e8
    if(i === m-1) {
        if(j1 === j2){
            return arr[i][j1]
        }else {
            return arr[i][j1] + arr[i][j2]
        }
    }

    let max = 0

    for(let ij1 = -1; ij1 <= 1 ; ij1++){
        for(let ij2 = -1; ij2 <= 1 ; ij2++){
            if(j1 === j2){
                max = Math.max(max, arr[i][j1] + cherryPickup(i+1, j1+ij1, j2+ij2, arr))
            }else {
                max = Math.max(max, arr[i][j1]+ arr[i][j2] + cherryPickup(i+1, j1+ij1, j2+ij2, arr))
            }
        }
    }

    return max
}

export function CallCherryPickUp(){
    const arr: number[][] = [[2,3,1,2], [3,4,2,2], [5,6,3,5]]

    const res = cherryPickup(0, 0, arr[0].length -1, arr)

    console.log(res)
}
```

### using memoization
```ts
function cherryPickUpMemoization(i: number, j1: number, j2: number, arr: number[][], dp: number[][][]){
    const m: number = arr.length
    const n: number = arr[0].length
    if(j1 < 0 || j2 < 0 || j1 > n - 1 || j2 > n - 1) return -1e8
    if(i === m-1) {
        if(j1 === j2){
            return arr[i][j1]
        }else {
            return arr[i][j1] + arr[i][j2]
        }
    }

    if(dp[i][j1][j2] !== -1) return dp[i][j1][j2]

    let max = 0
    for(let ij1 = -1; ij1 <= 1 ; ij1++){
        for(let ij2 = -1; ij2 <= 1 ; ij2++){
            if(j1 === j2){
                max = Math.max(max, arr[i][j1] + cherryPickup(i+1, j1+ij1, j2+ij2, arr))
            }else {
                max = Math.max(max, arr[i][j1]+ arr[i][j2] + cherryPickup(i+1, j1+ij1, j2+ij2, arr))
            }
        }
    }

    return dp[i][j1][j2] = max
}

export function CallCherryPickUpMemoization(){
    const arr: number[][] = [[2,3,1,2], [3,4,2,2], [5,6,3,5]]
    const m = arr.length
    const n = arr[0].length
    const dp: number[][][] = new Array(m).fill(null).map(()=> new Array(n).fill(null).map(() => new Array(n).fill(-1)))
    const res = cherryPickUpMemoization(0, 0, arr[0].length - 1, arr, dp)
    console.log(res)
}
```

### using tabulation
```ts
function cherryPickUpTabulation(arr: number[][], m: number, n: number){
    const dp: number[][][] = new Array(m).fill(null).map(()=> new Array(n).fill(null).map(()=> new Array(n).fill(-1)))

    for(let j1 = 0; j1 < n; j1++){
        for(let j2 = 0; j2 < n; j2++){
            if(j1 === j2){
                dp[m-1][j1][j2] = arr[m-1][j1]
            }else{
                dp[m-1][j1][j2] = arr[m-1][j1] + arr[m-1][j2]
            }
        }
    }

    for(let i = m-2; i>=0; i--){
        for(let j1=0; j1 < n; j1++){
            for(let j2 = 0; j2 < n; j2++){
                let max = 0
                for(let dj1 = -1; dj1 <= 1; dj1++){
                    for(let dj2 = -1; dj2 <= 1; dj2++){
                        let newMax = 0
                        // if(j1 === j2){
                        //     if((j1 + dj1) >= 0 && (j1 + dj1) < n && (j2 + dj2) >= 0 && (j2 + dj2) < n){
                        //         newMax = arr[i][j1] + dp[i+1][j1 + dj1][j2+dj2]
                        //     }else {
                        //         newMax += -1e8
                        //     }
                        // }else{
                        //     if((j1 + dj1) >= 0 && (j1 + dj1) < n && (j2 + dj2) >= 0 && (j2 + dj2) < n){
                        //         newMax = arr[i][j1] + arr[i][j2] + dp[i+1][j1 + dj1][j2+dj2]
                        //     }else {
                        //         newMax += -1e8
                        //     }
                        // }

                        // optimize the above code
                        if(j1 === j2){
                            newMax += arr[i][j1]
                        }else {
                            newMax += arr[i][j1] + arr[i][j2]
                        }

                        if((j1 + dj1) >= 0 && (j1 + dj1) < n && (j2 + dj2) >= 0 && (j2 + dj2) < n){
                            newMax += dp[i+1][j1+dj1][j2+dj2]
                        }else {
                            newMax += -1e8
                        }

                        max = Math.max(max, newMax)
                    }
                }
                dp[i][j1][j2] = max
            }
        }
    }
    return dp[0][0][n-1]
}

export function CallcherryPickUpTabulation(){
    const arr: number[][] = [[2,3,1,2], [3,4,2,2], [5,6,3,5]]
    const res = cherryPickUpTabulation(arr, arr.length,arr[0].length)
    console.log(res)
}
```

```ts
function cherryPickUpTabulationSO(arr: number[][], m: number, n: number){
    let front: number[][] = new Array(n).fill(null).map(()=> new Array(n).fill(-1))

    for(let j1 = 0; j1 < n; j1++){
        for(let j2 = 0; j2 < n; j2++){
            if(j1 === j2){
                front[j1][j2] = arr[m-1][j1]
            }else{
                front[j1][j2] = arr[m-1][j1] + arr[m-1][j2]
            }
        }
    }

    for(let i = m-2; i>=0; i--){
        let curr = new Array(n).fill(null).map(()=> new Array(n).fill(-1))
        for(let j1=0; j1 < n; j1++){
            for(let j2 = 0; j2 < n; j2++){
                let max = 0
                for(let dj1 = -1; dj1 <= 1; dj1++){
                    for(let dj2 = -1; dj2 <= 1; dj2++){
                        let newMax = 0
                        if(dj1 === dj2){
                            newMax += arr[i][j1]
                        }else {
                            newMax += arr[i][j1] + arr[i][j2]
                        }

                        if((j1 + dj1) >= 0 && (j1 + dj1) < n && (j2 + dj2) >= 0 && (j2 + dj2) < n){
                            newMax += front[j1+dj1][j2+dj2]
                        }else {
                            newMax += -1e8
                        }

                        max = Math.max(max, newMax)
                    }
                }
                curr[j1][j2] = max
            }
        }
        front = curr
    }
    return front[0][n-1]
}

export function CallcherryPickUpTabulationSO(){
    const arr: number[][] = [[2,3,1,2], [3,4,2,2], [5,6,3,5]]
    const res = cherryPickUpTabulationSO(arr, arr.length,arr[0].length)
    console.log(res)
}
```
