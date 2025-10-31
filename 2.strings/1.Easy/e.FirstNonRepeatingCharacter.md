- Write a function that takes in a string , return the character that is non repeating

```ts
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
```

- we can also have the below code
```
function firstNonRepeatingChar(str) {
  const freq = new Array(256).fill(0); // Constant size → O(1) space

  // First pass: count frequency
  for (let i = 0; i < str.length; i++) {
    freq[str.charCodeAt(i)]++;
  }

  // Second pass: find first non-repeating
  for (let i = 0; i < str.length; i++) {
    if (freq[str.charCodeAt(i)] === 1) {
      return str[i];
    }
  }

  return null;
}

```
