> -  this os n queen problem , where n queen should should be placed in n*n chess board , and each queen should not kill each other 

<img src="https://github.com/Maniabhishek/Data-Structure-And-Algorithm/assets/31520295/f5c338d0-f0ce-4511-ade3-2e53fcbc1ac8" width="400" height="400"/>


```ts
export function nQueen(n: number){
    const arr: string[][] = []
    for(let i = 0; i < n; i ++){
        const subArr: string[] = new Array(n).fill('.')
        arr.push([...subArr])
    }

    const res: string[][][] = []
    nQueenSolver(arr, res, 0)

    console.log(res)
}

function nQueenSolver(arr: string[][], res: string[][][], col: number){
    if(col === arr.length){
        console.log(arr)
        const newArr = JSON.parse(JSON.stringify(arr))
        res.push(newArr)
        return
    }

    for(let row = 0; row < arr.length; row++){
        if(isSafe(arr, row, col)){
            arr[row][col] = 'Q'
            nQueenSolver(arr, res, col + 1)
            arr[row][col] = '.'
        }
    }
}

export function isSafe(board: string[][], row: number, col: number):boolean{
    //check if Q on left side
    for(let i = 0; i < col ; i++){
        if(board[row][i] === 'Q'){
            return false
        }
    }

    //check upper diagonal on left side
    for(let i = row - 1, j = col - 1; i >= 0 && j >= 0 ; i--, j-- ){
        if(board[i][j] === 'Q'){
            return false
        }
    }

    //check lower diagonal on left side
    for(let i = row, j = col; i < board.length && j >=0 ; i++ , j--){
        if(board[i][j] === 'Q'){
            return false
        }
    }
    return true
}
```
