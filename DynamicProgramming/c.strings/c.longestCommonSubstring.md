> - find the longest common substring

### Explanation
- can we use the same code as previous for longest common subsequences
- in previous scenario we had a logic, at given index when strings or char are not matching then we check one index lesser on either of the string
- in this case we dont want this , as we need longest substring
- so we can just use the tabulation code where ever or which ever index it finds the same string , then add 1 to dp[i-1][j-1] and the maximum number in the matrix will be the answer

```ts
function LongestCommonSubstring(s1: string, s2: string){
    const dp: number[][] = new Array(s1.length+1).fill(null).map(()=> new Array(s2.length + 1).fill(0))
    let max = -Infinity
    for(let i=1; i <= s1.length; i++){
        for(let j = 1; j <= s2.length; j++){
            if(s1[i-1]=== s2[j-1]){
                dp[i][j] = 1 + dp[i-1][j-1]
                max = Math.max(dp[i][j], max)
            }else {
                dp[i][j] = 0
            }
        }
    }

    console.log(dp)
    return max
}

export function CallLongestCommonSubstring(){
    const s1 = 'abcde'
    const s2 = 'bcdef'

    console.log(LongestCommonSubstring(s1, s2))
}
```
