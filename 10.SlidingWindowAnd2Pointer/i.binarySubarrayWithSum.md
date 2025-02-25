### we are given an array of 1 and 0's , with target , our task is to find the number of subarray that sums to target

<img width=400 height=400 src="https://github.com/user-attachments/assets/3af012fd-53ed-4286-8b8f-13f094c2be39">

<img width=400 height=400 src="https://github.com/user-attachments/assets/65557269-ac1c-41bf-9c0d-a45ff9e431d1">

```ts
function binarySubarrayWithSum(arr: number[], target: number){
    if(target < 0 ) return 0
    let l = 0;
    let r = 0;
    
    let count = 0
    let sum = 0
    while(r < arr.length){
        sum += arr[r]

        while(sum > target){
            sum -= arr[l]
            l = l+1
        }

        if(sum <= target){
            count += r-l+1
        }
        r++
    }
    return count 
}

export function Call_binarySubarrayWithSum(){
    let arr = [1,0,0,1,0,1]
    let target = 2

    // doing so because we are calculating <= target and calculating target - 1 will give us target-1 values, hence substracting will give us exact target sum subarray
    console.log(binarySubarrayWithSum(arr, target) - binarySubarrayWithSum(arr, target-1))
}

```

