- idea is to find maximum profit 
- we can do it by doing the max profit first 
- so we first sort the jobs array based on the profit
- once sorted , we find the max deadline 
- once we get the max deadline and create array of size maxdeadline + 1, to have the index of maxdeadline
- initialize the array with -1 
- now keep filling the jobs , while we have array left with -1
```ts
type job = {
    id: number;
    deadline: number;
    profit: number;
}

function jobSequencing(jobs: job[]){
    const sortedJobs = jobs.sort((a,b)=> b.profit - a.profit)

    let maxDeadline = -Infinity
    for(let i = 0; i < jobs.length; i++){
        maxDeadline = Math.max(maxDeadline, jobs[i].deadline)
    }

    const sequence = new Array(maxDeadline+1).fill(-1)
    let maxProfit = 0
    let jobCount = 0
    for(let i = 0; i < sortedJobs.length; i++){
        for(let j = sortedJobs[i].deadline; j >= 0; j--){
            if(sequence[j] === -1 ){
                sequence[j] = sortedJobs[i].id
                maxProfit += sortedJobs[i].profit
                jobCount += 1
                break
            }
        }
    }

    console.log(maxProfit, jobCount)
    return maxProfit
}

export function CalljobSequencing(){
    const jobs = [{id:1,deadline:4, profit: 20},{id: 2,deadline: 1,profit: 10},{id: 3,deadline:1,profit: 40},{id: 4,deadline:1, profit: 30}]
    jobSequencing(jobs)
}

```
