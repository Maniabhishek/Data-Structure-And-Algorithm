export function spiralTraverse(array: number[][]) {
  // Write your code here.
  const result: number[] = []
  spiralFill(array, 0, 0, array.length - 1, array[0].length-1, result)
  return result;
}

function spiralFill(array: number[][], startrow: number, startcol: number, endRow: number, endCol: number, result: number[]) {
  if(startrow > endRow || startcol > endCol) return 
  for(let col = startcol; col <= endCol; col++ ){
    result.push(array[startrow][col])
  }

  for(let row = startrow+1; row <= endRow; row++){
    result.push(array[row][endCol])
  }

  for(let col = endCol - 1; col >= startcol; col--){
    if(startrow === endRow) break
    result.push(array[endRow][col])
  }

  for(let row = endRow - 1; row >= startrow+1 ; row --){
    if(startcol === endCol) break
    result.push(array[row][startcol])
  }
  spiralFill(array, startrow+1, startcol+1, endRow-1, endCol-1, result)
}
