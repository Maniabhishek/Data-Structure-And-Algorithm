/**
 * Semordnilap:
  Write a function that takes in a list of unique strings and returns a list of
  semordnilap pairs.
  
  A semordnilap pair is defined as a set of different strings where the reverse
  of one word is the same as the forward version of the other. For example the
  words "diaper" and "repaid" are a semordnilap pair, as are the words
  "palindromes" and "semordnilap".
	
  The order of the returned pairs and the order of the strings within each pair
  does not matter.
	sample input
	words = ["diaper", "abc", "test", "cba", "repaid"]
	Sample Output
	[["diaper", "repaid"], ["abc", "cba"]]
 */
// solution 1
interface StringCount {
  [key: string]: any;
}
function semordnilap(words: string[]) {
  let stringCount: StringCount = {}
  let result:[string,string][] = [];
  for(const word of words){
    const sortedWord = [...word].sort().join("");
    if(!(sortedWord in stringCount)) stringCount[sortedWord] = [];
    stringCount[sortedWord].push(word);
  }
  for(const word in stringCount){
    if(stringCount[word].length === 2){
      result.push(stringCount[word]);
    }
  }
  return result;
}

//solution 2
function semordnilap2(words: string[]){
  const wordSet = new Set(words);
  let result : [string,string][] = [];

  for(const word of words){
    const reverse = word.split("").reverse().join("");
    if(wordSet.has(reverse) && reverse !== word){
      result.push([word, reverse]);
      wordSet.delete(word);
      wordSet.delete(reverse);
    }
  }
  return result;
}