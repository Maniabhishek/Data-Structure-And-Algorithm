- You are given an array 'arr' consisting of 'n' integers which denote the position of a stall. You are also given an integer 'k' which denotes the number of aggressive cows.
- You are given the task of assigning stalls to 'k' cows such that the minimum distance between any two of them is the maximum possible.
- Print the maximum possible minimum distance.

<img width=400 height=400 src="https://github.com/user-attachments/assets/3dc15f48-d1cb-4019-85a6-cf4f4eb3cba0">
<img width=400 height=400 src="https://github.com/user-attachments/assets/3b5f850b-4ac1-4b67-a64f-954ed2a30d39">


```ts
function placeAggressiveCows(stalls: number[], numberOfCows: number){
    stalls.sort((a,b)=> a-b)
    let maxDistance = stalls[stalls.length - 1] - stalls[0]
    for(let i = 1; i < maxDistance; i++){
        if(!canWeplace(stalls, i, numberOfCows)){
            return i - 1
        }
    }
}

function canWeplace(stalls: number[], distance: number, numberOfCows: number){
    let cowsCount = 1
    let lastCowPlace = stalls[0]

    for(let i = 1; i < stalls.length; i++){
        if((stalls[i] - lastCowPlace) >= distance){
            lastCowPlace = stalls[i]
            cowsCount++
        }
    }

    return cowsCount >= numberOfCows
}

export function CallplaceAggressiveCows(){
    let stalls = [0,3,4,7,10,9]
    let numberOfAggresiveCows = 4
    console.log(placeAggressiveCows(stalls, numberOfAggresiveCows))
}


// in above logic we are having a range from 1 to maxDistance it can have which obviously will be max-min if we sort the array , and place two cows at ondex 0 and at last which will max distance, hence max-min
function placeAggressiveCowsUsingBS(stalls: number[], numberOfCows: number){
    let low = 1;
    stalls.sort((a,b)=> a-b)
    let high = stalls[stalls.length-1] - stalls[0]

    while(low <= high){
        let mid = Math.floor((low+high)/2)

        if(canWeplace(stalls, mid, numberOfCows)){
            low = mid + 1
        }else {
            high = mid - 1
        }
    }
    return high
}

export function CallplaceAggressiveCowsUsingBS(){
    let stalls = [0,3,4,7,10,9]
    let numberOfAggresiveCows = 4
    console.log(placeAggressiveCowsUsingBS(stalls, numberOfAggresiveCows))
}

```
