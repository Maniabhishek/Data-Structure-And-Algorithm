### WildCard Matching
- We are given two strings ‘S1’ and ‘S2’. String S1 can have the following two special characters:
    - '?' can be matched to a single character of s2
    - '*' can be matched to any sequence of characters of s2. (sequence can be of length zero or more)
- we need to check whether strings s1 and s2 match or not

- Example:
- '?ay' ray - matches
- '**abcd' 'abcd' - matches

- how to approach this problem , as we have been solving string problem based on matching and not matching
- again we solve it in the same way represent the problem in terms of index
- at every index (do all stuffs) in this case if character matches or in string we found ? then we can say it matched and do (i-1, j-1), if it is * then it can match that character then i, j-1 or it doesnt consider * as  empty "" , then i-1, j
- and for base condition what could it be , since we need to return true or false it matched or not , then if both indexes reaches -ve at the same point it means string is matche d return true , if i is exhausted and j still has some value then it won't match ,  and if i has some value with j ehausted then string will only match if all the characters are *
  
```ts
// TC : exponential SC: O(N+M)
function WildCardMatching(s1: string, s2: string, i: number, j: number){
    if(i < 0 && j < 0) return true
    if(i < 0 && j >= 0) return false
    if(j < 0 && i >=0){
        for(let k = 0; k <= i; k++){
            if(s1[k] !== '*') return false
        }
        return true
    }

    if(s1[i] === s2[j] || s1[i] === '?'){
        return WildCardMatching(s1, s2, i-1, j-1)
    }

    if(s1[i] === "*"){
        return WildCardMatching(s1, s2, i-1, j) || WildCardMatching(s1, s2, i, j-1)
    }
    return false
}

export function CallWildCardMatching(){
    const s1 = "a*de?g"
    const s2 = "abcdef"

    console.log(WildCardMatching(s1, s2, s1.length, s2.length))
}

function WildCardMatchingMemoization(s1: string, s2: string, i: number, j: number, dp: boolean[][]| number[][]) {
    if(i < 0 && j < 0) return true
    if(i < 0 && j >= 0) return false
    if(j < 0 && i >=0){
        for(let k = 0; k <= i; k++){
            if(s1[k] !== '*') return false
        }
        return true
    }

    if(dp[i][j] !== -1) return dp[i][j]

    if(s1[i] === s2[j] || s1[i] === '?'){
        return dp[i][j] = WildCardMatching(s1, s2, i-1, j-1)
    }

    if(s1[i] === "*"){
        return dp[i][j] = (WildCardMatching(s1, s2, i-1, j) || WildCardMatching(s1, s2, i, j-1))
    }
    return dp[i][j] = false
}

export function CallWildCardMatchingMemoization(){
    const s1 = "a*def"
    const s2 = "abcdef"

    const dp = new Array(s1.length).fill(null).map(()=> new Array(s2.length).fill(-1))
    console.log(WildCardMatchingMemoization(s1, s2, s1.length-1, s2.length-1, dp))
}

function WildCardMatchingTabulation(s1: string, s2: string){
    const dp = new Array(s1.length + 1).fill(null).map(()=> new Array(s2.length + 1).fill(0))

    dp[0][0] = true
    for(let j = 1; j <= s2.length; j++){
        dp[0][j] = false
    }

    for(let i = 1; i <= s1.length; i++){
        let flag = true
        for(let k = 1; k<= i; k++){
            if(s1[k-1] !== '*'){
                flag = false
                break
            }
        }
        dp[i][0] = flag
    }

    for(let i = 1; i <= s1.length; i++){
        for(let j = 1; j <= s2.length; j++){
            if(s1[i-1] === s2[j-1] || s1[i-1] === '?'){
                dp[i][j] = dp[i-1][j-1]
            }else if(s1[i-1] === '*') {
                dp[i][j] = dp[i-1][j] || dp[i][j-1]
            }else {
                dp[i][j] = false
            }
        }
    }

    return dp[s1.length][s2.length]
}

export function CallWildCardMatchingTabulation(){
    const s1 = "a*defg"
    const s2 = "abcdef"
    console.log(WildCardMatchingTabulation(s1, s2))
}

```
