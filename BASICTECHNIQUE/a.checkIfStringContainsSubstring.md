### lets say we are given a string "aaabbccdaffd" and another target string "abc" how to check if the string contains all the characters from target string

- well naive way we can just use brute force approach to achieve it
> better approach by using map where we can store all chars {a:1, b: 1, c:1} then iterate through string if character found in map then decrease the value , or not found the start with -1 and keep decreasing , the element which is part of target string will have count greater than 0 at first in that case increment counter , when counter reaches length of target string then it means all chars from target string are present in given string

```ts
function substringCheck(string: string, target: string){
    let map = {}
    for(let i = 0; i < target.length; i++){
        if(!map[target[i]]){
            map[target[i]] = 0
        }
        map[target[i]]++
    }

    let count = 0
    for(let i = 0; i < string.length; i++){
        if(!map[string[i]]) map[string[i]] = 0
        if(map[string[i]]>0) count++
        map[string[i]]--
        if(count === target.length) {
            return true
        }
    }
    return false
}
``` 
