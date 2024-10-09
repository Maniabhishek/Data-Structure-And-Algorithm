/*
  Write a function that takes in a string , return the character that is non repeating
*/

export function firstNonRepeatingCharacter(string: string) {
  // Write your code here.
  const charFreq: {[key: string]: number} = {}
  for(const ch of string){
    if(!(ch in charFreq)) charFreq[ch] = 0
    charFreq[ch] += 1
  }

  for (let i = 0; i < string.length; i++) {
    if(charFreq[string[i]] === 1) return i
  }
  return -1;
}
