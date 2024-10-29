### Distinct Subsequences

- given a string s1 = "babgbag" s2 = "bag", we need to count all the subsequences in s1 that matches s2
- so how to solve it , so if we start matching index by index we will find bag in s1, but we need to find all the subsequences, thus let's first char b matches with first char b of s2, but there will be scenario i want b at 2nd index because that can form bag as well
- express the problem in terms of index, since if we have two strings then (i,j)
- explore all possibilities (what are the possibilities 1st is when string matches we either consider that string and substract the index (i-1,j-1), or we dont consider that char but we will explore other, then (i-1, j), other condition is when string doesn't matches then (i-1, j)
- Return summation of all possibilities
- Base Case, needs to return 1 or 0 as we need to count all the ways, so what will be the base condition when you exhausted j this means j < 0, then return 1 another is when j is still at some index, and i is exhausted then return 0
- TC: O(i*j)
- SC: O(i+j) Auxiliary stack space

```ts
function distinctSubsequences(s1: string, s2: string, i:number, j: number){
    if(j < 0) {
        return 1
    }

    if(i < 0) {
        return 0
    }

    let count = 0
    if(s1[i] === s2[j]){
        count = distinctSubsequences(s1, s2, i-1, j-1) + distinctSubsequences(s1, s2, i-1, j)
    }else {
        count = distinctSubsequences(s1, s2, i-1, j)
    }
    return count
}

export function Call_distinctSubsequences(){
    const s1 = "babgbag"
    const s2 = "bag"
    console.log(distinctSubsequences(s1, s2, s1.length - 1, s2.length-1))
}
```
