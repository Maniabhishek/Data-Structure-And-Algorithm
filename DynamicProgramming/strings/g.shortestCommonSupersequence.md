> - find the shortest common supersquence which will contain subsequence of both strings

### Explanation
- lets see an example s1=brute s2=groot longest common subsequence is rt so the length will s1.length + s2.length - rt.length
- once we create the tabulation, we can easily find the sequence

```ts
function shortestSupersequence(s1: string, s2: string){
    const dp: number[][] = new Array(s1.length + 1).fill(null).map(()=> new Array(s2.length + 1).fill(0))

    for(let i = 1; i <= s1.length; i++){
        for(let j = 1; j <= s2.length; j++){
            if(s1[i-1] === s2[j-1]){
                dp[i][j] = 1 + dp[i-1][j-1]
            }else {
                dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1])
            }
        }
    }

    let shortestCommonSupersequenceLength = s1.length + s2.length - dp[s1.length][s2.length]

    console.log(shortestCommonSupersequenceLength)
    let i = s1.length
    let j = s2.length

    let res = ''
    while(i > 0  && j > 0){
        if(s1[i-1] === s2[j-1]) {
            res += s1[i-1]

            i--;
            j--;
        }else if(dp[i-1][j] > dp[i][j-1]){
            res += s1[i-1]
            i--
        }else {
            res += s2[j-1]
            j--
        }
    }

    if(i > 0){
        const leftS1 = s1.substring(0, i).split("").reverse().join("")
        res += leftS1
    }

    if(j > 0){
        const leftS2 = s2.substring(0, j).split("").reverse().join("")
        res += leftS2
    }

    return res.split("").reverse().join("")
}

export function CallShortestSupersequence(){
    const s1 = 'brute'
    const s2 = 'groot'
    console.log(shortestSupersequence(s1, s2))
}

```
