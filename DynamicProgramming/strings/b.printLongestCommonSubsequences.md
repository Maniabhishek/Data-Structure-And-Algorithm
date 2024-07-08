> - Print the longest common subsequence

<img src="https://github.com/Maniabhishek/Data-Structure-And-Algorithm/assets/31520295/972511e2-c8f5-4083-9dd1-b361882a3fb9" width=400 height=400/>
https://github.com/Maniabhishek/Data-Structure-And-Algorithm/assets/31520295/972511e2-c8f5-4083-9dd1-b361882a3fb9

```ts
function PrintLongestCommonSubsequencesTabulation(s1:string, s2: string){
    const dp: number[][] = new Array(s1.length + 1).fill(null).map(()=> new Array(s2.length + 1).fill(0))

    for(let i = 1 ; i <= s1.length; i++){
        for(let j = 1; j <= s2.length; j++){
            if(s1[i-1] === s2[j-1]) {
                dp[i][j] = 1 + dp[i - 1][j - 1]
            }else {
                dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1])
            }
        }
    }

    let i = s1.length
    let j = s2.length
    const subsequenceLength = dp[s1.length][s2.length]
    let subsequence = new Array(subsequenceLength)
    let subsequenceIndex = subsequenceLength - 1

    while(i > 0 && j > 0){
        if(s1[i-1] === s2[j-1]){
            subsequence[subsequenceIndex] = s1[i-1] 
            subsequenceIndex--
            i--;
            j--
        }else if(dp[i-1][j] > dp[i][j-1]){
            i--
        }else {
            j--
        }
    }

    console.log(dp)

    return subsequence.join('')
}

export function CallPrintLongestCommonSubsequencesTabulation(){
    const s1 = 'acd'
    const s2 = 'cde'
    console.log(PrintLongestCommonSubsequencesTabulation(s1, s2))
}

```
