- Given a non-empty string of lowercase letters and a non-negative integer representing a key, write a function that returns a new string obtained by shifting every letter in the input string by k positions in the alphabet, where k is the key.
- Note that letters should "wrap" around the alphabet; in other words, theletter z shifted by one returns the letter 

- sample input: xyz , 2 
- sample output: zab

```
function ceaserCipherEncryptor(str: string, key: number){
  const newCharArr: string[] = []
  const newKey: number = key%26
  for(const ch of str){
    const newCh = getCharacterAfterShift(ch,newKey)
    newCharArr.push(newCh)
  }
  return newCharArr.join('')
}

function getCharacterAfterShift(char: string, key: number){
  const ascii = char.charCodeAt(0) + key
  return ascii <= 122 ? String.fromCharCode(ascii) : String.fromCharCode(96 + ascii % 122)
}
 ``` 
