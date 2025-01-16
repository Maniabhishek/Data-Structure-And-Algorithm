- task is to find the nearest sqrt of given number for example 28 sqrt will be 5

### Sloution
- let's take an example of 28
- brute force to find the solution is to check from 1 which could be the minimum and maximum will be the number itself 28 in this case
- let start iterating from 1 ->  1 * 1 = 1 <= 28 update ans = 1
- 2 , 2* 2 <= 28 update ans = 2
- ...goes to 5 , 5*5 = 25 < 28 update ans = 5
- and then 6*6 <= 28 false then break and ans we got it 5
- but using the above approach will not have better time complexity
- since we are iterating from 1....givennum which will be sorted

### using binary search
- so we can use binary search
- let's assume we have numbers 1,2,3,4...28
- let's take mid value = 1+28 = 29/2 = 14 will be mid
- now 14*14 is bigger than 28 so eliminate the right half and change the high to (mid-1) 13
- now low = 1, high = 13, mid = 7
- 7*7 >= 28 so we want smaller value which will exist on the left half
- low = 1, high = 6, mid = 3
- 3*3 < 28 so move low = mid + 1= 4
- low = 4, high = 6, mid = 5
- 5*5 <= 28 25 is smallet than 28 next bigger value can found in the right so low = mid+1 = 5
- low = 5 , high = 6, mid = 5 , 5*5 25 < 28
- again low = 6 high = 6 , mid = 6
- 6*6 = 36 > 28 so lesser value will be on left , so high = mid -1 = 6-1 = 5
- now while loop whill break and finally answer we will get is 5


```ts
function findSqrtNumber(sqrt: number){
    let low = 1;
    let high = sqrt

    let ans = 1
    while(low <= high){
        let mid = Math.floor((low+high)/2)
        let square = mid*mid
        if(square <= sqrt){
            ans = mid
            low = mid+1
        }else {
            high = mid-1
        }
    }
    return ans
}

export function CallFindSqrtNumber(){
    console.log(findSqrtNumber(36))
}
```
