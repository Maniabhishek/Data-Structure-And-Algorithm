/*
    Write a function that takes in a non-empty list of non-empty strings and
    returns a list of characters that are common to all strings in the list,
    ignoring multiplicity.
    
    
    Note that the strings are not guaranteed to only contain alphanumeric characters. The list
    you return can be in any order.
   sample input = ['axc', 'dkxc', 'olkexc']
   sample output = ['x', 'c']
*/

interface ChRecord {
  [key:string]: number
}

export function commonCharacters(strings: string[]) {
  // Write your code here.
  const chRecord: ChRecord = {}
  const chArr = strings[0].split('')
  for (let i = 0; i < chArr.length; i++) {
    if(!(chArr[i] in chRecord)){
      chRecord[chArr[i]] = 1
    }
  }
  const commonArr = Object.keys(chRecord)
  console.log("common array ",commonArr)
  for (let i = 1; i < strings.length; i++) {
    const chArray = strings[i].split('')
    console.log(chArray)
    for (const ch of commonArr) {
      if(!(chArray.includes(ch))){
        console.log(ch, chArray)
        chRecord[ch] = -1
      }
    }
  }
  
  const result: any[] = []
  console.log(chRecord)
  for (const ch of commonArr) {
    if(chRecord[ch] > 0){
      result.push(ch)
    }
  }
  return result;
}
// ts O(n*m) n is the length of the array and m is the length of the longest string, space O(c) c is number of unique character across all string
export function commonCharacters(strings: string[]) {
  // Write your code here.

  const chCounts: {[character: string]: number} = {}
  for(const string of strings){
    const uniqueCharacters = new Set(string)
    for(const ch of uniqueCharacters){
      if(!(ch in chCounts)){
        chCounts[ch] = 0
      }
      chCounts[ch]++
    }
  }
const finalCharacter: string[] = []
  for(const [key, val] of Object.entries(chCounts)){
    if(val === strings.length){
      finalCharacter.push(key)
    }
  }
  return finalCharacter;
}

