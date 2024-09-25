```ts
// now this problem states that , we need to find out all the leaders , leaders are the element in the array where each element to its right are smaller
// the below code has time complexity of near about O(N^2)
// now to improve we need to find all the elements whose right elements are smaller , so if from back if we know the greatest value and compare with that to current then that will  be our leader
// lets see one example [10,22,12,3,4,6]
// lets start from the last index value is 6 let's take max as -Infinity 6 is greater that max then this is our first leader , then new max = 6, 
// next element is 4 is lesser than max move to next element
// 3 is lesser than 6 move next
// 12 is greater than 6 hence add it to leader's list , update new max as 12
// 22 is greater than 12 hence add it to leader's list , update new max as 22

function leaderInArray(arr: number[]){
    const newArr = []
    for(let i = 0; i < arr.length; i++) {
        let flag = true
        for(let j = i+1; j < arr.length; j++){
            if(arr[j] >= arr[i]){
                flag = false
                break
            }
        }
        if(flag){
            newArr.push(arr[i])
        }
    }
    console.log(newArr)
}

function leaderInArray2(arr: number[]){
    let max = -Infinity
    let newLeader = []
    for(let i = arr.length-1; i>=0; i--){
        if(arr[i] > max){
            newLeader.push(arr[i])
            max = arr[i]
        }
    }
    console.log(newLeader)
}

export function Call_leaderInArray(){
    leaderInArray2([10,22,12,3,0,6])
}

```
