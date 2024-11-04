### Longest String Chain

- E.g., words: ["a","b", "ba", "bca", "bda", "bdca"] , string chain could be [a,ba, bca] [b, ba, bca] , here in this case the longest will be [a,ba, bca, bdca]
- string chain is formed only if it is addition of one character remaining others will be same
- so at every next element will have one extra character
- can we use this [lis](https://github.com/Maniabhishek/Data-Structure-And-Algorithm/blob/main/5.DynamicProgramming/e.LIS/b.longestIncresingSubsequence.md) solution here
- let's take an array with 1's at all the places 
- as we see b length is equal to a no insertion so we won't increase so array remains lis: [1,1,1,1,1,1]
- move to ba , ba has greater length  than a ,thus there is one insertion so lis: [1,1,2,1,1,1],
- move to bca, compare from 0th to 2nd element, bca is greater than a but not insertion then : [1,1,2,2,1,1] bca is greater than b, [1,1,2,1,1,1], bca is greater than ba 1 + 2 [1,1,2,3,1,1]
- move bda it will remain same
- for bdaca if we compare we will see array becomes: [1,1,2,3,3,4]
- hence the length of the longest string chain will be [a,ba,bca,bdca]
- in case of simple array of number we were just checking if arr[i] is greater than arr[j], but here we can just add one compare function to check if by addition of one char in jth string produce arr[i]

```ts
function longestStringChain(arr: string[]){
    let lis: number[] = new Array(arr.length).fill(1)
    let hash: number[] = new Array(arr.length).fill(0)
    let max = -Infinity
    let maxIdx = 0
    for(let i = 1; i < arr.length; i++){
        hash[i] = i
        for(let j = 0; j < i; j++){
            if(compare(arr[j], arr[i]) && 1+ lis[j]>lis[i]){
                lis[i] = 1+ lis[j]
                hash[i] = j
            }   
        }
        if(lis[i] > max){
            max = lis[i]
            maxIdx = i
        }
    }

    let stringChain = []
    stringChain.push(arr[maxIdx])
    while(hash[maxIdx] !== maxIdx){
        maxIdx = hash[maxIdx]
        stringChain.push(arr[maxIdx])
    }
    console.log(stringChain.reverse())
    console.log(max)
}

function compare(sj: string, si: string): boolean{
    let j = 0;
    let i = 0
    console.log(sj, si)
    if(sj.length+1 !== si.length) return false
    while(i < si.length){
        if(sj[j] !== si[i]){
            i++
        }else {
            i++
            j++
        }
    }

    return sj.length === j && si.length === i
}


export function Call_longestStringChain(){
    let s = ['a','bdc', 'bc', 'bcd', 'bcde']
    longestStringChain(s)
}
// above solution is finding the subsequence what if we need to find the subset just sort the array based on length you will get it 
// ['xc', 'pcxbcf', 'xb', 'cxbc', 'pcxbc']

export function Call_longestStringChainSubset(){
    const arr = ['xbc', 'pcxbcf', 'xb', 'cxbc', 'pcxbc']

    arr.sort((a,b)=> a.length-b.length)

    console.log(arr)
    longestStringChain(arr)
}

```
