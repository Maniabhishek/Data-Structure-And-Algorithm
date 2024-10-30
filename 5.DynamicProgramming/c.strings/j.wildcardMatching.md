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
