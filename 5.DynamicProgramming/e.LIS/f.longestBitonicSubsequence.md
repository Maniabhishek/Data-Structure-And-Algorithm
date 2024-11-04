### Longest Bitnoic Subsequence

- eg., [1,11,2,10,4,5,2,1] , in this case there are many bitonic subsequence, for example , [1,2,1], [1, 11,2,1].... [1,2,10,4,2,1] is the longest one
- in the prevoious problem we created dp using two for loops comparing i with jth element, if ith element was greater and 1+dp[j] > dp[i] then we kept on updating dp[i]
- we did it for increasing subsequence
- in case of bitonic what is it if we see [1,2,1] it increasing from left and increasing again if we see it from right end that is from from index 3 , similary for [1,2,10,4,2,1]
- so if we find the increasing subsequence from both the sides
- dp1: [1,2,2,3,3,4,2,1] dp2: [1,5,2,4,3,3,2,1]
- what is dp[i] it means the longest increasing subsequence till i
- so if we add both dps dp1 and dp2 , for each index by substracting 1 as there will be one common element in both sides , and max value in that array will be result

```ts
function longestBitonicSubsequence(arr: number[]){
    let dp1 = new Array(arr.length)
    let dp2 = new Array(arr.length)

    for(let i = 0; i < arr.length; i++){
        dp1[i] = 1
        for(let j = 0; j<i; j++){
            if(arr[i] > arr[j] && 1+dp1[j] > dp1[i]){
                dp1[i] = 1 + dp1[j]
            }
        }
    }

    for(let i = arr.length-1; i >= 0; i--){
        dp2[i] = 1
        for(let j = arr.length-1; j>i; j--){
            if(arr[i] > arr[j] && 1+dp2[j] > dp2[i]){
                dp2[i] = 1 + dp2[j]
            }
        }
    }

    let max = -Infinity
    const dp = new Array(arr.length)
    for(let i = 0; i < arr.length; i++){
        dp[i] = dp1[i] + dp2[i] - 1
        if(dp[i] > max) max = dp[i]
    }

    console.log(dp)
    return max
}

export function Call_longestBitnoicSubsequence(){
    const arr = [1,11,2,10,4,5,2,1]

    console.log(longestBitonicSubsequence(arr))
}
```
