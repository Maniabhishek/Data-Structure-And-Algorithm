- You're given a sorted array 'a' of 'n' integers and an integer 'x'.
- Find the floor and ceiling of 'x' in 'a[0..n-1]'.
- Note:
  - Floor of 'x' is the largest element in the array which is smaller than or equal to 'x'.
  - Ceiling of 'x' is the smallest element in the array greater than or equal to 'x'.
Example:
Input: 
n=6, x=5, a=[3, 4, 7, 8, 8, 10]   

Output:
4

Explanation:
The floor and ceiling of 'x' = 5 are 4 and 7, respectively.


```ts

// floor and ceil in sorted array
// floor value - largest value in array <= given number
// ceil value - smallest value in array greater >= given number

// let's see floor value 
// take an example [10,20,30,40,50] givenNum = 25
// our task is to find the largest value <= given number
// let's take low = 0, high = 4
// mid = 2 arr[mid] is 30 <= 25 false 
// 25 , which side will it be from mid left ofcourse , so high = mid-1
// low = 0, high = mid -1 = 1
// mid = (0+1)/2 = 0
// arr[0] is 10 <= 25 update ans = 10\
// 25 is greater low = mid + 1 = 1
// low =1 , high = 1
// low is still < high 
// mid = (1+1)/2 = 1
// arr[mid] is 20 , 20 <= 25 and 20 > ans so update ans=20

function floorValueUsingLowerBound(arr: number[], givenNum: number){
    let low = 0;
    let high = arr.length - 1

    let ans = -Infinity
    while(low <= high){
        let mid = Math.floor((low+high)/2)
        if(arr[mid] <= givenNum){
            low = mid+1
            ans =  Math.max(ans, arr[mid])
        }else {
            high = mid-1
        }
    }
    return ans
}

function ceilValueUsingLowerBound(arr: number[], givenNum: number){
    let low = 0;
    let high = arr.length - 1

    let ans = Infinity
    while(low <= high){
        let mid = Math.floor((low+high)/2)
        if(arr[mid] >= givenNum){
            high = mid-1
            ans =  Math.min(ans, arr[mid])
        }else {
            low = mid+1
        }
    }
    return ans
}

export function callfloorValueUsingLowerBound(){
    const arr = [10,20,30,40,50]
    // console.log(floorValueUsingLowerBound(arr, 25))
    console.log(ceilValueUsingLowerBound(arr, 25))
}
```
