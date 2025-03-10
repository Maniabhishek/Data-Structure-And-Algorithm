### given an array of integers and k your task is to find the max sum by picking k element from array in continguous way

<img width=400 height=400 src="https://github.com/user-attachments/assets/f96fed30-d4b6-4ee1-bb31-3aea5eff7f23">

```ts
function subArraySum(arr: number[], k: number){
    let sum = 0;
    for(let i = 0; i < k; i++){
        sum += arr[i]
    }

    let l = 0; 
    let r  = k - 1;
    let maxSum = sum
    while(r < arr.length-1){
        sum -= arr[l]
        l++
        r++
        sum += arr[r]

        if(sum > maxSum){
            maxSum = sum
        }
    }
    return maxSum
}

export function CallsubArraySumWithKWindow(){
    let arr = [1,2,3,4,5,1,2,3,4,5]
    console.log(subArraySum(arr, 4))
}
```



### give an array with integers , and total , your task is to find a subarray with max length where sum of all the subarray element is <= total

<img width=400 height=400 src="https://github.com/user-attachments/assets/76b4402d-cd87-4d91-b218-a1f4e99f6f61">
<img width=400 height=400 src="https://github.com/user-attachments/assets/a9b0f3ae-d81c-4d41-a501-2667f3750735">

```ts
function maxSubArray(arr: number[], total: number){
    let l = 0, r = 0, maxLength = 0, sum = 0;

    while(r < arr.length){
        sum += arr[r]

        while(sum > total){
            sum -= arr[l]
            l++
        }

        if(sum <= total){
            maxLength = Math.max(r-l+1, maxLength)
        }
        r++
    }
    return maxLength
}

export function CallmaxSubArrayWithLessOrEqualToTarget(){
    let arr = [1,3,4,4,6,7,8,9,1,2,12]
    let total = 12

    console.log(maxSubArray(arr, total))
}
```
