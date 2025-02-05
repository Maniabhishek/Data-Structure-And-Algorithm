
function medianOfRowWiseSorted(arr: number[][]){
    let n = arr.length
    let m = arr[0].length
    let min = arr[0][0]
    for(let i = 0; i< arr.length; i++){
        min = Math.min(min, arr[i][0])
    }

    let left = Math.floor((n*m)/2)

    let max = arr[0][m-1]
    for(let i = 0; i < n; i++){
        max = Math.max(arr[i][m-1], max)
    }

    let low = min
    let high = max

    while(low <= high){
        let mid = Math.floor((low+high)/2)

        let lessOrEqualCount = findHowManySmallerOrEqual(arr, mid)

        if(lessOrEqualCount <= left){
            low = mid + 1
        }else {
            high = mid - 1 
        }
    }
    return low
}

function upperBound(arr: number[], search: number){
    let low = 0; 
    let high = arr.length - 1
    let ans = arr.length
    while(low <= high){
        let mid = Math.floor((low+high)/2)
        if(arr[mid] > search){
            // may be an answer 
            // look for more smaller index on left
            high = mid - 1
            ans = mid
        }else {
            low = mid + 1
        }
    }
    return ans
}

function findHowManySmallerOrEqual(arr: number[][], target: number){
    let count = 0
    for(let i = 0; i < arr.length; i++){
        count += upperBound(arr[i], target)
    }
    return count
}

export function CallmedianOfRowWiseSorted(){
    let mat = [[1,5,7,9,11],[2,3,4,5,10],[9,10,12,14,16]]
    console.log(medianOfRowWiseSorted(mat))
}   

