### Longest Repeating Character
- you are given a string of all capital letters , and k , where k denotes maxmimum number of letters you can change in order to get the longest repeating characters

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


// time complexity of below code is O(N+N)* 26
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
