### You are given an array of positive integers , and k where k denotes number of odd numbers you can take to create subarray , your task is to find total number of subarray with k odd integers even can be of any numbers 

-  we need k odd integers , even dont really make any difference if it's there or not, thus we can treat this problem as the previous one where we can think of odd as 1 and even as 0

```ts
function numberOfNiceSubarray(arr: number[], k: number){
    let l = 0;
    let r = 0;
    let count = 0
    let sum = 0
    while(r < arr.length){
        sum += arr[r]%2

        while(sum > k){
            sum -= arr[l]%2
            l++
        }
        if(sum <= k){
            count += r-l+1
        }
        r++
    }
    return count 
}

export function CallnumberOfNiceSubarray(){
    let arr = [1,5,3,4,2,1,4,5]
    let k = 3
    console.log(numberOfNiceSubarray(arr, k) - numberOfNiceSubarray(arr, k-1))
}

```
