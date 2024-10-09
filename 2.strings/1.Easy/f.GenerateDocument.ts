/*
  You're given a string of available characters and a string representing a
  document that you need to generate. Write a function that determines if you
  can generate the document using the available characters. If you can generate
  the document, your function should return true otherwise it should return false.

  
  You're only able to generate the document if the frequency of unique
  characters in the characters string is greater than or equal to the frequency
  of unique characters in the document string. For example, if you're given
  characters = "abcabc" and document = "aabbccc" you cannot generate the document because you're missing one c.

  
  The document that you need to create may contain any characters, including
  special characters, capital letters, numbers, and spaces.
*/

export function generateDocument(characters: string, document: string) {
  // Write your code here.
  const charCount:{[key:string]: number} = {}
  for(const ch of characters){
    if(!(ch in charCount)){
      charCount[ch] = 0
    }
    charCount[ch] += 1
  }

  for(const d of document){
    if(!(d in charCount) || charCount[d] === 0) return false
    charCount[d]--
  }
  return true;
}
