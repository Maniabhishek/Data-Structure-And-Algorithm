- here the TC: O(Nlog(N)) when we take ordered map and in case of unordered O(N) and worst case will be O(N^2)

```ts
export function twoNumberSum(array: number[], targetSum: number) {
  // Write your code here.
  let seen: Record<number, boolean> = {}
  let result: number[] = []
  for( let num of array){
    let remaining: number = targetSum - num
    if(seen[remaining] === true){
      result.push(num)
      result.push(remaining)
    }else {
      seen[num] = true
      continue
    }
  }
  return result;
}
```
- tc for the below code O(Nlog(N) + O(N)) SC: O(1)
```ts 
function TwoNumSum(arr: number[], target: number){
    arr.sort((a,b)=> a-b)
    let left = 0;
    let right = arr.length-1

    while(left < right){
        if(arr[left] + arr[right] < target){
            left++
        }else if(arr[left] + arr[right] > target) {
            right--
        }else {
            return true
        }
    }
    return false
}

export function CallTwoNumberSum(){
    console.log(TwoNumSum([8,3,2,19,2,5,23], 28))
}

```
