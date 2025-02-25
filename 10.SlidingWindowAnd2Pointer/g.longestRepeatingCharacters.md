### Longest Repeating Character
- you are given a string of all capital letters , and k , where k denotes maxmimum number of letters you can change in order to get the longest repeating characters


<img width=400 height=400 src="https://github.com/user-attachments/assets/dc6b4cff-7b3d-4b16-8cfc-b1205b343afc">

<img width=400 height=400 src="https://github.com/user-attachments/assets/7cde2d2f-2a91-4a72-a3fb-9e3e86939772">

<img width=400 height=400 src="https://github.com/user-attachments/assets/332ddb79-d73d-4055-af7c-95fcc3072776">


```ts
function longestRepeatingCharacter(str: string, k: number){
    let maxLen = 0

    
    for(let i =0; i < str.length; i++){
        const arr = new Array(26).fill(0)
        let maxFreq = 0
        for(let j = i; j < str.length; j++){
            const charAscii = str.charCodeAt(j)
            arr[charAscii%65]++
            maxFreq = Math.max(maxFreq, arr[charAscii%65])

            const currentLen = j-i+1
            const changes = currentLen - maxFreq
            if(changes <= k){
                maxLen = Math.max(maxLen, j-i+1)
            }else {
                break
            }
        }
    }
    return maxLen
}

export function Call_longestRepeatingCharacter(){
    const str = "AABABBA"
    const k = 2
    console.log(longestRepeatingCharacter(str, k))
}
```



```ts
// time complexity of below code is O(N+N)* 26 when we eliminate the left, so no need to eliminate using while loop , just keep incrementing, since you have x length , if you move further then you are decreasing the length which is not going to be your answer so instead of decreasing while changes > k , just increase l by one and because your answer will only lie x+1 , x+ 2...so on
function longestRepeatingCharacter2Pointers(str: string, k: number){
    let l = 0;
    let r = 0;

    const arr = new Array(26).fill(0)
    let maxLen = 0
    let maxFreq = 0
    while(r < str.length){
        const charAscii = str.charCodeAt(r)
        const charIndex = charAscii%65

        arr[charIndex]++

        maxFreq = Math.max(maxFreq, arr[charIndex])

        // current Length - maxFreq
        let changes = (r-l+1) - maxFreq
        if(changes > k){
            const lascii = str.charCodeAt(l)
            const lcharIndex = lascii % 65
            arr[lcharIndex]--
            l++
            // let currentLength = r-l+1
            // let maxFreq = 0
            // for(let i = 0; i < 26; i++){
            //     maxFreq = Math.max(maxFreq, arr[i])
            // }
            // changes = currentLength - maxFreq
        }

        if(changes <= k){
            maxLen = Math.max(maxLen, r-l+1)
        }
        r++
    }
    return maxLen
}

export function call_longestRepeatingCharacter2Pointers(){
    let str = "AABABBA"
    let k = 2
    str = "AABABBBBA"
    console.log(longestRepeatingCharacter2Pointers(str, k))
}

```
