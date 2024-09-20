```ts
// find lnegth of the longest subarray that equals given sum 
// example: [9,0,0,2,3,1,1,1,1,4,3,2] 8 is the answer
// brute force way we will loop through first time and inside this we will start another pointer from next till the end of array, and keep check the length of subarray that sums to given number
// which will have O(N2) time complexity
// so let's try to improve it
// now the below solution will use map , we will traverse through the array , and keep taking the sum and we will check if remaining is stored in map then we got one subarray right, then we will check if greate than max then sotre it
// if not then simply store that sum in map , so the idea here is storing all the sum in map so at every index when we go we are now know the previous pending value index thus current subarray length will always be known

function longestSubarrayWithSumK(arr: number[], k: number){
    let longestLength = 0
    let arrMap = {0: -1}
    let sum = 0
    for(let i = 0; i < arr.length; i++){
        sum += arr[i]
        if(arrMap[sum-k] != null ){
            longestLength = Math.max(longestLength, i-arrMap[sum-k])
        }
        // add only if not exist , this is important in case if we have 0's
        if(arrMap[sum] == null){
            arrMap[sum] = i
        }
    }
    return longestLength
}

// so we have O(N) and for map we will have TC O(log(N)) for ordered map , but for unorderd map assuming if there is lot of collision then it will take O(N) thus TC : O(Nlog(N)) or O(N^2)
// SC: O(N)

// lets try to improve the above solution by taking two pointers 
// we take the sum and check whether the sum is greater the target, then we will keep moving the left pointer until sum is lesser than target now the moment sum is lesseer than or equal to target we stop , and if equal then update the maxLen, and we move right pointer and add sum and keep doing it until right exhaust the length value
function longestSubArrayTwoPointer(arr: number[], k: number){
    let left = 0;
    let right = 0;
    let sum = arr[0]
    let maxLen = 0;

    while(right < arr.length){
        // move left pointer to right until sum is smaller or equal 
        while(left < right && sum > k){
            sum -= arr[left]
            left++
        }
        if(sum == k){
            maxLen = Math.max(maxLen, right-left+1)
        }

        right++
        if(right < arr.length) {
            sum += arr[right]
        }
    }
    return maxLen
}

export function Call_longestSubArray(){
    const arr = [9,0,0,2,3,1,1,1,1,4,3,2]
    console.log(longestSubarrayWithSumK(arr, 9))
    console.log(longestSubArrayTwoPointer(arr, 9))
}



```
