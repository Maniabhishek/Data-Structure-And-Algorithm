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

function runLengthEncoding(str: string){
    let prev = str[0]
    let res = ""
    let count = 1
    for(let i = 1; i < str.length; i++){
        if(str[i] === prev && count < 9) {
            count++
        }else {
            res += count+prev
            prev = str[i]
            count = 1;
        }
    }
    res += count+prev
    return res
}

export function CallrunLengthEncoding(){
    const s = "AAAAAAAAAAA"
    console.log(runLengthEncoding(s))
}

