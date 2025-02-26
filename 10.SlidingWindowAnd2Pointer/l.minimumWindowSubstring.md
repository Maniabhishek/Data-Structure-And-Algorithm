### You are given a string and a target string , your task is to find a minimum length substring from given string which should contains all the character from target string if target string is abc then all three should be there , if abbc is target then b has to appear twice in substring , it can be in any order

-  example : string: "ddaaabbca" target: "abc"
-  o/p : bca

![image](https://github.com/user-attachments/assets/aba4bce9-15f0-4414-bbf5-27b85c15ea7c)

![image](https://github.com/user-attachments/assets/71610ad2-c7a7-4161-bb11-ec64153d9942)


```js
function minimumWindowSubstring2Pointers(str: string, substr: string){
    let substrMap = {}
    for(let i = 0; i < substr.length; i++){
        if(!substrMap[substr[i]]){
            substrMap[substr[i]] = 0
        }
        substrMap[substr[i]]++ 
    }

    let l = 0;
    let r = 0;

    let count = 0
    let minLength = Infinity
    let minIdx = -1
    while(r < str.length){
        if(!substrMap[str[r]]){
            substrMap[str[r]] = 0
        }
        if(substrMap[str[r]] > 0) count++
        substrMap[str[r]]--

        while(count === substr.length){
            minLength = Math.min(minLength, r-l+1)
            minIdx = l
            substrMap[str[l]]++
            if(substrMap[str[l]] > 0) count--
            l++
        }

        r++
    }

    return str.substring(minIdx, minIdx + minLength )
}

export function CallminimumWindowSubstring2Pointers(){
    let str = "ddaaabbca"
    let target = "abc"

    console.log(minimumWindowSubstring2Pointers(str, target))
}

```
