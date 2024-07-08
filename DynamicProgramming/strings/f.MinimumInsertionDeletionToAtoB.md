> - so we need to find the minimum insertion and deletion operation which will be used to convert the string1 to string2

### Explanation 
- since we need to convert one string to another , 1st thing that should come to the mind is what can we not touch
- it is longest common subsequence , if we get this then answer is simple
- s1.length + s2.length - (2 * LongestCommonSubsequence)

- so the entire question boils down to find the longest common subsequence

[code]()
