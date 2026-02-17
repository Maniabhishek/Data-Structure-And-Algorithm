> - given weight array, and value array , and bag with targetweight or maximum weight bag can take
> - so find the maximum value that one can get after filling the bag, each weight index corresponds to the value index

- express the problem in terms of index and find all the variables or state that will change
- find all the possible ways
- find max
- whenever we are starting from n-1 then always think of base condition for 0

  ```ts
  function KnapsackRecursion(idx: number , arr: number[], value: number[], weight: number){
    if(idx === 0){
        if(arr[idx] <= weight) return value[idx]
        else return 0
    }

    const not_take = KnapsackRecursion(idx-1, arr, value, weight)
    let take = -Infinity

    if(arr[idx] <= weight){
        take = value[idx] + KnapsackRecursion(idx-1, arr, value, weight - arr[idx])
    }
    return Math.max(take, not_take)
  }
  export function CallKnapsackRecursion(){
    const arr: number[] = [3, 2, 5]
    const val: number[] = [30, 40, 60]
    const res = KnapsackRecursion(arr.length - 1, arr, val, 6)
    console.log(res)
  }
  
  function KnapsackRecusrsionMemoization(idx: number , arr: number[], value: number[], weight: number, dp: number[][]){
    if(idx === 0){
        if(arr[0] <= weight) return value[idx]
        else return 0
    }

    if(dp[idx][weight] !== -1) return dp[idx][weight]
    const not_take = KnapsackRecusrsionMemoization(idx-1, arr, value, weight, dp)
    let take = -Infinity

    if(arr[idx] <= weight){
        take = value[idx] + KnapsackRecusrsionMemoization(idx-1, arr, value, weight - arr[idx], dp)
    }
    return dp[idx][weight] = Math.max(take, not_take)
  }
  export function CallKnapsackRecusrsionMemoization(){
    const arr: number[] = [3, 2, 5]
    const val: number[] = [30, 40, 60]

    const weight = 6
    const dp: number[][] = new Array(arr.length).fill(null).map(() => new Array(weight + 1).fill(-1))

    const res = KnapsackRecusrsionMemoization(arr.length - 1, arr, val, weight, dp)
    console.log(res)
  }
  function KnapsackRecursionTabulation(arr: number[], value: number[], weight: number){
    const dp: number[][] = new Array(arr.length).fill(null).map(() => new Array(weight + 1).fill(0))

    for(let w = 0; w <= weight; w++){
        if(arr[0] <= w) dp[0][w] = value[0]
    }

    for(let i = 1; i < arr.length; i++){
        for(let w = 0; w <= weight ; w++){
            const not_take = dp[i - 1][w]
            let take = -Infinity
            if(arr[i] <= w){
                take = value[i] + dp[i-1][w-arr[i]]
            }
            dp[i][w] = Math.max(not_take, take)
        }
    }

    return dp[arr.length -1][weight]
  }
  
  export function CallKnapsackRecursionTabulation(){
    const arr: number[] = [3, 2, 5]
    const val: number[] = [30, 40, 60]
    const weight = 6

    const res = KnapsackRecursionTabulation(arr, val, weight)
    console.log(res)
    }

  
    function KnapsackRecurstionTAB_SO(arr: number[], value: number[], weight: number){
      let prev: number[] = new Array(weight + 1).fill(0)

    for(let w = 0; w <= weight; w++){
        if(arr[0] <= w) prev[w] = value[0]
    }

    for(let i = 1; i < arr.length; i++){
        const curr: number[] = new Array(weight + 1).fill(0)
        for(let w = 0; w <= weight ; w++){
            const not_take = prev[w]
            let take = -Infinity
            if(arr[i] <= w){
                take = value[i] + prev[w-arr[i]]
            }
            curr[w] = Math.max(not_take, take)
        }
        prev = curr
    }

    return prev[weight]
    }

  
  export function CallKnapsackRecurstionTAB_SO(){
    const arr: number[] = [3, 2, 5]
    const val: number[] = [30, 40, 60]
    const weight = 6

    const res = KnapsackRecurstionTAB_SO(arr, val, weight)
    console.log(res)
    }

  ```
