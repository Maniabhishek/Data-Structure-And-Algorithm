```ts
function FindJustGreater(nums: number[], num: number){
    let left = 0
    let right = nums.length-1

    while(left <= right){
        let mid = Math.floor((left+right)/2)
        if(nums[mid]! < num) {
            left = mid + 1
        }else {
            right = mid - 1
        }
        console.log(left)
    }
    return left
}

export function CallJustGreaterNum(){
    const arr = [2,3,4,9]
    console.log(FindJustGreater(arr, 9))
}
```
