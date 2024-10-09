> - given two strings , we need to find the longest common subseqeunces in both the strings
> - for example if we have s1 = 'acd' and s2 = 'cde' then longest common subsequences string is 'cd'

### Explanation 
> - if we find all the subsequence in both the strings and then check which one is longest in both , then this is not the optimised solution its time complexity will be exponential
> - so what we can do is take the indexes for both the strings and check on each index if it is common or not , if common then we count 1 and move to next index in both the strings
> - and if it doesn't matches then simply we will check for both index in both the string which means shift 1 index once for 1st string and then for 2nd string , whichever gives the maximum result will be answer

```ts
 //TC : O(2^n * 2^m) SC: O(N + M)
function LongestCommonSubsequences(s1:string, s2: string, idx1: number, idx2: number){
    if(idx1 < 0 || idx2 < 0){
        return 0
    }

    if(s1[idx1] === s2[idx2]) return 1 + LongestCommonSubsequences(s1,s2,idx1-1, idx2-1)

    return Math.max(LongestCommonSubsequences(s1, s2, idx1-1, idx2), LongestCommonSubsequences(s1, s2, idx1, idx2-1))
}

export function CallLongestCommonSubsequences(){
    const s1 = 'acd'
    const s2 = 'cde'

    console.log(LongestCommonSubsequences(s1,s2, s1.length - 1, s2.length-1))
}


// tc O(N*M) SC -> O(N*M) + O(N + M)
function LongestCommonSubsequencesMemoization(s1:string, s2: string, idx1: number, idx2: number, dp: number[][]){
    if(idx1 < 0 || idx2 < 0){
        return 0
    }

    if(dp[idx1][idx2] !== -1) return dp[idx1][idx2]

    if(s1[idx1] === s2[idx2]) return dp[idx1][idx2] = 1 + LongestCommonSubsequencesMemoization(s1, s2, idx1 - 1, idx2 - 1, dp)

    return dp[idx1][idx2] = Math.max(LongestCommonSubsequencesMemoization(s1, s2, idx1 - 1, idx2, dp), LongestCommonSubsequencesMemoization(s1, s2, idx1, idx2 - 1, dp))
}

export function CallLongestCommonSubsequencesMemoization(){
    const s1 = 'acd'
    const s2 = 'cde'

    const dp: number[][] = new Array(s1.length).fill(null).map(()=> new Array(s2.length).fill(-1))

    console.log(LongestCommonSubsequencesMemoization(s1, s2, s1.length - 1, s2.length - 1, dp))
}

// since in above code the base condition is when inex hits -ve , so we cannot have base condition in case of tabulation as -ve so just shift the idex by 1
function LongestCommonSubsequencesTabulation(s1:string, s2: string){
    const dp: number[][] = new Array(s1.length + 1).fill(null).map(()=> new Array(s2.length + 1).fill(0))

    for(let i = 1 ; i <= s1.length; i++){
        for(let j = 1; j <= s2.length; j++){
            if(s1[i] === s2[j]) {
                dp[i][j] = 1 + dp[i - 1][j - 1]
            }else {
                dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1])
            }
        }
    }

    return dp[s1.length][s2.length]
}

export function CallLongestCommonSubsequencesTabulation(){
    const s1 = 'acd'
    const s2 = 'cde'

    console.log(LongestCommonSubsequencesTabulation(s1, s2))
}

function LongestCommonSubsequencesTabulation_SO(s1:string, s2: string){
    let prev: number[] = new Array(s2.length + 1).fill(0)

    for(let i = 1 ; i <= s1.length; i++){
        const curr: number[] = new Array(s2.length + 1).fill(0)
        for(let j = 1; j <= s2.length; j++){
            if(s1[i] === s2[j]) {
                curr[j] = 1 + prev[j - 1]
            }else {
                curr[j] = Math.max(prev[j], curr[j-1])
            }
        }
        prev = curr
    }

    return prev[s2.length]
}

export function CallLongestCommonSubsequencesTabulation_SO(){
    const s1 = 'acd'
    const s2 = 'cde'

    console.log(LongestCommonSubsequencesTabulation_SO(s1, s2))
}

>   ```
