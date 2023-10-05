/**
  sample input:  = "AAAAAAAAAAAAABBCCCCDD"
  sample output: = "9A4A2B4C2D"

  if more than consecutive charaacter occurs , for example AAAAAAAAAAA 11A this is wrong as it can also be decoded as 1A
  it shoul be 9A2A
*/

export function runLengthEncoding(string: string) {
  // Write your code here.
  let i = 1;
  let count = 1
  let result = ""
  if( string.length === 1) {
    return `${count}${string}`
  }
  while( i < string.length ){
    if(string[i] === string[i-1] && count < 9){
      count++
    }else {
      result += `${count}${string[i-1]}`
      count = 1
    }
    i++
  }
  result += `${count}${string[i-1]}`
  return result;
}
