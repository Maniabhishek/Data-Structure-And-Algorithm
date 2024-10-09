> -  sudoku solver


```ts
function SudokuSolver(board: string[][]): boolean{
    for(let i=0; i < board.length; i++){
        for(let j = 0; j < board.length; j++){
            if(board[i][j] === "."){
                for(let k = 0; i < 9; i++){
                    if(valid(board, i, j, k.toString())){
                        board[i][j] = k.toString()
                        if(SudokuSolver(board) === true){
                            return true
                        }else {
                            board[i][j] = '.'
                        }
                    }
                }

                return false
            }
        }
    }
    return true
}

function valid(board: string[][], row: number, col: number, ch: string): boolean{
    for(let i = 0; i < 9; i++){
        if(board[row][i] === ch){
            return false
        }

        if(board[i][col] === ch){
            return false
        }

        if(board[3 * (row/3) + i/3][3*(col/3) + i%3] === ch){
            return false
        }
    }
    return true
}
```
