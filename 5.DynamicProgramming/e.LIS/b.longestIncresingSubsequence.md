- longest increasing subsequence
- this is an algorithmic approach
- where we first started with an intuition, that each element in itself is a subsequence of length 1
- create one array to keep a count at each index
- for each element we started comparing with each of its previous elements
- [10, 9, 2, 5, 3, 7, 101, 18] initially all the elements will have count of 1 at each index, comparing 9 with 10 9 is smaller , move to next element 2 and comapre with each elements on its left starting from 0
- 10 < 2 false 9 < 2 false count remains 1 for 2, next 5 10 < 5 , 9 < 5 false, 2 < 5 true then 1+1(count at 2 index) > count at 4th index for element 5

```ts
// SC: O(N) TC: O(n^2)
function longestIncreasingSubsequence(arr: number[]){
    const count = new Array(arr.length).fill(1)
    const hash = new Array(arr.length).fill(0)

    let max = 0
    let maxIndex = -1
    for(let i = 1; i < arr.length; i++){
        hash[i] = i
        for(let j = 0; j < i; j++){
            if(arr[j]< arr[i] && 1 + count[j] > count[i]){
                count[i] = 1 + count[j]
                hash[i] = j
            }
        }

        if(count[i] > max){
            max = count[i]
            maxIndex = i
        }
    }

    let seq = []
    seq.push(arr[maxIndex])
    while(hash[maxIndex] !== maxIndex){
        maxIndex = hash[maxIndex]
        seq.push(arr[maxIndex])
    }

    console.log(seq.reverse())
    console.log(max)
}

export function Call_longestIncreasingSubsequence(){
    let arr = [10, 9, 2, 5, 3, 7, 101, 18]
    // arr = [1,2,3,4,5,0]
    longestIncreasingSubsequence(arr)
}

```
