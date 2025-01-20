- You are given an array of integers 'arr' and an integer i.e. a threshold value 'limit'. Your task is to find the smallest positive integer divisor, such that upon dividing all the elements of the given array by it, the sum of the division's result is less than or equal to the given threshold value.

### Solution
- let's take an example [1,2,5,9], threshold = 6
- if we take the largest value 9 and divide each element with it 
- we will get 1/9 = 1, 2/9 = 1, 5/9 = 1, 9/9 = 1 = 4 which is less than 6 so 9 can be the answer but we need the smallest divisor
- so let's start with divisor 1 , then 2  ans so on the moment we get the sum < threshold will be the answer
- divisor with will obviously cross threshold
- let's check with 2 , 1/2 = 1, 2/2=1, 5/2= 3, 9/2=5 sum=10 cannot be the answer as it has crossed threshold
- let's check with 3 1/3 = 1, 2/3=1, 5/3=2, 9/3 = 3 sum = 7 > threshold 
- divisor = 4 1/4=1, 2/4 = 1, 5/4 = 2, 9/4 = 3 sum=7 > threhold
- divisor = 5 1/5=1, 2/5 = 1, 5/5=1, 9/5 = 2 sum = 5 <= threshold this is the answer , divisor = 5

```
function findSmallestDivisor(arr: number[], threshold: number){
    let ans = Infinity
    let max = arr[0]
    for(let i = 1; i < arr.length; i++){
        max = Math.max(max, arr[i])
    }
    for(let i = 1; i <= max; i++){
        if(getQuotientSumOfArray(arr, i) <= threshold){
            ans = i
            break
        }
    }
    return ans
}

function getQuotientSumOfArray(arr: number[], divisor: number){
    let ans = 0
    for(let i =0; i < arr.length; i++){
        ans += Math.ceil((arr[i]/divisor))
    }

    return ans
}

export function callfindSmallestDivisor(){
    let arr = [1,2,5,9]
    let threshold = 6
    console.log(findSmallestDivisor(arr, threshold))
}

// as we can see we are traversing from 1,2....up to max value so definetly we can use the binary search here to improve the TC
function findSmallestDivisorUsingBS(arr: number[], threshold: number){
    let low = 1;
    let high = arr[0]
    for(let i = 1; i < arr.length; i++){
        high = Math.max(high, arr[i])
    }

    let ans = -1
    while(low <= high){
        let mid = Math.floor((low+high)/2)

        if(getQuotientSumOfArray(arr, mid) <= threshold){
            ans = mid
            high = mid - 1
        }else {
            // when  getQuotientSumOfArray value is greater which means divisor is small value we need to increase then for increasing , obviously low = mid+1
            low = mid+1
        }
    }
    return ans 
}

export function callfindSmallestDivisor2(){
    let arr = [1,2,5,9]
    let threshold = 6
    console.log(findSmallestDivisor(arr, threshold))
}


```
