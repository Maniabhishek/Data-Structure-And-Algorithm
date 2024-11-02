### Longest Increasing subsequence
- what does func(idx, prevIdx) or func(3, 0) signifies , it means find the LIS from index 3 where prev index is 0

```ts

function LongestIncSubseq(nums: number[], idx: number, prevIdx: number){
    if(idx === nums.length){
        return 0
    }

    const not_take = LongestIncSubseq(nums, idx+1, prevIdx)
    let take = 0
    if(prevIdx === -1 || nums[idx] > nums[prevIdx]){
        take = 1 + LongestIncSubseq(nums, idx + 1, idx)
    }

    return Math.max(take, not_take)
}

export function CallLongestIncSubseq(){
    const nums = [10, 9, 2, 5, 3, 7, 101, 18]
    console.log(LongestIncSubseq(nums, 0, -1))
}

function LongestIncSubseq_Memo(nums: number[], idx: number, prevIdx: number, dp: number[][]){
    if(idx === nums.length){
        return 0
    }

    if(prevIdx >= 0){
        if(dp[idx][prevIdx] !== -1) return dp[idx][prevIdx]
    }

    const not_take = LongestIncSubseq_Memo(nums, idx+1, prevIdx, dp)
    let take = 0
    if(prevIdx === -1 || nums[idx] > nums[prevIdx]){
        take = 1 + LongestIncSubseq_Memo(nums, idx+1, idx, dp)
    }

    return dp[idx][prevIdx] = Math.max(take, not_take)
}

export function CallLongestIncSubseq_Memo(){
    const nums = [10, 9, 2, 5, 3, 7, 101, 18]
    const dp: number[][] = new Array(nums.length).fill(null).map(()=> new Array(nums.length))
    console.log(LongestIncSubseq_Memo(nums, 0, -1, dp))
}

// TC is O(N*N) SC: O(N*N+1) + O(N)
// since in above code we ignored -1 index , what other option we have is to shift the coordinates by 1 ,, right now prevIndex goes from -1 ...to n-1, we can changes it to 0.....n
function LongestIncSubseq_Memo2(nums: number[], idx: number, prevIdx: number, dp: number[][]){
    if(idx === nums.length){
        return 0
    }


    if(dp[idx][prevIdx+1] !== -1) return dp[idx][prevIdx+1]


    const not_take = LongestIncSubseq_Memo2(nums, idx+1, prevIdx, dp)
    let take = 0
    if(prevIdx === -1 || nums[idx] > nums[prevIdx]){
        take = 1 + LongestIncSubseq_Memo2(nums, idx + 1, idx, dp)
    }

    return dp[idx][prevIdx+1] = Math.max(take, not_take)
}

export function CallLongestIncSubseq_Memo2(){
    const nums = [10, 9, 2, 5, 3, 7, 101, 18]
    const dp: number[][] = new Array(nums.length).fill(null).map(()=> new Array(nums.length+1).fill(-1))
    console.log(LongestIncSubseq_Memo2(nums, 0, -1, dp))
}

//tc: O(N^2) SC O(N)^2 with space optimization code we can bring SC: O(N)*2
function LongestIncSubseq_Tabulation(nums: number[]){
    const dp: number[][] = new Array(nums.length + 1).fill(null).map(()=> new Array(nums.length + 1).fill(0))

    for(let idx = nums.length - 1; idx>= 0; idx--){
        for(let prevIdx = idx-1; prevIdx >= -1; prevIdx--){
            const not_take = dp[idx+1][prevIdx + 1]
            let take = 0
            if(prevIdx === -1 || nums[idx] > nums[prevIdx]){
                take = 1 + dp[idx + 1][idx+1]
            }
            dp[idx][prevIdx+1] = Math.max(not_take, take)
        }
    }

    console.log(dp)
    return dp[0][0]
}

export function CallLongestIncSubseq_Tabulation(){
    const nums = [10, 9, 2, 5, 3, 7, 101, 18]
    console.log(LongestIncSubseq_Tabulation(nums))
}

```
