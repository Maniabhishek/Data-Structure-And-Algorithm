### Longest Substring With At Most K Distinct Characters

- this question is similar to the previous one

```ts
function longestSubstring(str: string, k: number){
    let l = 0; 
    let r = 0;

    const distinctMap = {}
    let maxLen = 0
    while(r < str.length){
        if(!distinctMap[str[r]]){
            distinctMap[str[r]] = 0
        }
        distinctMap[str[r]]++

        if(Object.keys(distinctMap).length > k){
            distinctMap[str[l]]--
            if(distinctMap[str[l]] === 0){
                delete distinctMap[str[l]]
            }
            l++
        }

        if(Object.keys(distinctMap).length <= k){
            maxLen = Math.max(maxLen, r-l+1)
        }
        r++
    }
    return maxLen
}


export function Call_longestSubstring(){
    const s = 'aaabbccd'
    const k = 2
    console.log(longestSubstring(s, k))
}
```
