### longest substring without repeating character


<img width=400 height=400 src="https://github.com/user-attachments/assets/887bc098-9881-4c1d-9c46-a0ecfad9c50a">


```ts
function longestSubstring(str: string){
    let l = 0;
    let r  = 0;

    let hash = {}

    let maxLen = 0
    while(r < str.length){
        if(hash[str[r]] >= l){
            l = hash[str[r]] + 1
        }
        hash[str[r]] = r
        maxLen = Math.max(maxLen, r-l+1)
        r++
    }
    return maxLen
}

export function calllongestSubstringTwoPointers(){
    let str = "cadbzabcd"
    console.log(longestSubstring2(str))
}   

// we can also use array for hashing instead of map
function longestSubstring2(str: string){
    let l = 0;
    let r = 0;

    let hash = new Array(256).fill(-1)

    let maxLen = 0
    while(r < str.length){
        let asciiVal = str.charCodeAt(r)
        if(hash[asciiVal] !== -1) {
            if(hash[asciiVal] >= l){
                l = hash[asciiVal] + 1
            }
        }
        maxLen = Math.max(maxLen, r-l+1)
        hash[asciiVal] = r
        r++
    }
    return maxLen
}
```
