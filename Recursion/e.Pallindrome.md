> this is similary to reverse array problem
```js
function Pallindrome(str, i){
  if(i > str.length/2) return true
  if(str[i] !== str[str.length-1-i]) return false
  return Pallindrome(str, i + 1)
}

console.log(Pallindrome("ABCCBA",0))
```
