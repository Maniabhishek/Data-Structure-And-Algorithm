/*
  write a function that takes in array of strings and returns the groups of anagrams
  anagram:  cinema and iceman are anagrams together
  sample input : = ["yo", "act", "flop", "tac", "foo", "cat", "oy", "olfp"]
  sample output : = [["yo", "oy"], ["flop", "olfp"], ["act", "tac", "cat"], ["foo"]]

  TC: O(W*N*log(N)) , SC: O(WN)  W is the number of the words and N is the length of largest length of the word
*/

export function groupAnagrams(words: string[]) {
  // Write your code here.
  const anagramArray: {[key:string]: string[]} = {}
  for(const word of words){
    const key = word.split("").sort().join("")
    if(!(key in anagramArray)) anagramArray[key] = []
    anagramArray[key].push(word)
  }
  return Object.values(anagramArray);
}
