### best possible time complexity from previos solution was O(n^2)
- let's try to improve it further using binary search
- example : [10,9,2,5,3,7,101,18]
- create an array called subsequenceList, we start iterating from element first we see 10 no element in subsequenceList so simply push it, move to 9, compare it with last element from subsequenceList, we see 10 if current element 9 is greater than 10 simply push , if not then find element just greater than 9 which is 10 so replace it, so subsequenceList [9] , now move to 2, compare 2 with 9 smaller then replace 9 with 2 subsequenceList: [2], now move to 5 compare 5 with with 2 5 is bigger value then push subsequenceList: [2,5], move to 3 , 3>5 false so find just greater than 3 subsequenceList:[2,3] move to 7 , 7 > 3  true push 7 to subsequenceList: [2,3,7], move to 101, 101 greater than 7 hence push it to subsequenceList: [2,3,7,101] , move to 18, 18 not greater than 101 hence just greater than 18 in subsequenceList is 101 replace it with 18 subsequenceList: [2,3,7,18]

```ts

function LISUsingBinarySearch(arr: number[]){
    // create an array to store elements if greater than previous or to find the just greater elements
    let lis = []

    let prev = -Infinity
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > prev){
            // we push the element since arr[i] is greater than prev
            lis.push(arr[i])
            prev = arr[i]
        }else {
            // in case if it is not greater, then we need to find the element in lis which is just greater than arr[i]
            let idx = justGreaterThanElementUsingBinarySearch(lis, arr[i])
            lis[idx] = arr[i]
            if(lis.length - 1 === idx){
                prev = arr[i]
            }
        }
    }
    return lis.length
}

function justGreaterThanElementUsingBinarySearch(arr: number[], el: number){
    let low = 0;
    let high = arr.length - 1

    let mid

    while(high >= low){
        mid = Math.floor((low+high)/2)
        if(arr[mid] === el){
            return mid
        }else if(arr[mid] > el){
            high = mid-1
        }else {
            low = mid + 1
        }

    }
    return mid
}

export function call_LISUsingBinarySearch(){
    let arr = [10,9,2,5,3,7,101,18]
    console.log(LISUsingBinarySearch(arr))
}

```
