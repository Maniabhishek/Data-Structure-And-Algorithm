### Minimum insertion to make a string pallindrome , find the number of insertion
- how can we get make a string pallindrome, if we reverse the same string attach to the end of original, then the whole string bounds to be the pallindrome
- but we need to find the minimum insertion, let's see what is the part of string we cannot touch, it the longest pallindrome, and how can we find it we already saw that in the   previous function, which gave the longest common subsequence, so if we have a string and we need to find the longest pallindrome subsequence then , we can just reverse the give string and longest common subsequence will be longest pallindrome subsequence
- once we got the longest pallindrome
- keep the palindrome as it is , and remaining letter will be total number of insertion
- for example abcaa , let's say aaa is longest pallindrome subsequence, then pending letter are bc, we will see one a will be inserted in 1st position, aabcaa, now if we insert b at 4th index then aabcbaa
- below code can be improved using memoization, tabulation as done in previous problems

> - for example abcaa , in this aaa is the longest pallindrome or aba or aca,
> - let's take aaa as longest pallindrome
> - abcaa if we take aaa then which character is pending it is bc so only if we place bc properly then we can make this pallindrome with only two insertion, abcacba , this is a pallindrome

```ts
// this function will give me the longest common subsequence
function MinimumStringToPallindrome(s1: string, s2: string, i: number, j: number){
    if(i < 0 || j < 0){
        return 0
    }

    if(s1[i] === s2[j]) {
        return 1 + MinimumStringToPallindrome(s1, s2, i - 1, j - 1)
    }

    return Math.max(MinimumStringToPallindrome(s1, s2, i - 1, j), MinimumStringToPallindrome(s1, s2, i, j - 1))
}

export function CallMinimumStringToPallindrome(){
    const s1 = 'abcaa'
    const s2 = s1.split('').reverse().join()

    const longestPallindromeLength = MinimumStringToPallindrome(s1,s2, s1.length - 1, s2.length-1)
    console.log(s1.length - longestPallindromeLength)
}
```

