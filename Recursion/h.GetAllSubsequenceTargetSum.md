```js
export function GetAllSubsequnceTargetSum(arr: number[], target: number){
    const result: number[][] = []
    const seq: number[] = []
    getAllSubsequnceTargetSum(arr, 0, target, 0, result, seq)
    console.log(result)
}

function getAllSubsequnceTargetSum(arr: number[], idx: number, target: number, currentSum: number, result: number[][], seq: number[]){
    if(idx >= arr.length){
        if(currentSum === target) {
            result.push([...seq])
        }
        return
    }

    seq.push(arr[idx])
    currentSum += arr[idx]
    getAllSubsequnceTargetSum(arr, idx + 1, target, currentSum, result, seq)
    seq.pop()
    currentSum -= arr[idx]
    getAllSubsequnceTargetSum(arr, idx + 1, target, currentSum, result, seq)
}
```

or 

```js
function findAllSubsequenceTargetTosum(arr, idx, target, ds, res){
    if(idx === arr.length){
        if(target === 0) {
            res.push([...ds])
        }
        return
    }
    
    ds.push(arr[idx])
    target -= arr[idx]
    findAllSubsequenceTargetTosum(arr, idx + 1, target, ds, res)
    ds.pop(arr[idx])
    target += arr[idx]
    findAllSubsequenceTargetTosum(arr, idx + 1, target, ds, res)
}

```

> -  the above code gives us all the sub sequences that can occur ,here also we will use the pick and not pick trick, so the trick is alway keep the sum and in base condition if matches , then check if sum is equal to target then we can keep that sequences

```js
// code to print any one sequence whose sum is equivalent to target sum 
function getOneSubsequenceTargetSum(arr: number[], target: number, idx: number, currentSum: number, seq: number[]): boolean {
    if(idx >= arr.length){
        if(currentSum == target){
            return true
        }
        return false
    }

    seq.push(arr[idx])
    currentSum += arr[idx]
    if(getOneSubsequenceTargetSum(arr, target, idx + 1, currentSum, seq) === true){
        return true
    }

    seq.pop()
    currentSum -= arr[idx]
    if(getOneSubsequenceTargetSum(arr, target, idx + 1, currentSum, seq) === true){
        return true
    }

    return false
}
```
> - in case if we only want one subsequence then return true or false


```js
// code to print the count of subsequence
function getCountOfSubsequenceTargetSum(arr: number[], target: number, idx: number, currentSum: number): number {
    if(idx >= arr.length){
        if(currentSum === target) return 1
        else return 0
    }

    currentSum += arr[idx]
    let l =  getCountOfSubsequenceTargetSum(arr, target, idx + 1, currentSum)

    currentSum -= arr[idx]
    let r = getCountOfSubsequenceTargetSum(arr, target, idx + 1, currentSum)

    return l + r
}
```

> - whenever you are asked to find the count of subsequences , then always think of return 1 if base condition matches and 0 if not 
