- You are given a sorted array ‘arr’ of length ‘n’, which contains positive integer positions of ‘n’ gas stations on the X-axis. You are also given an integer ‘k’. You have to place 'k' new gas stations on the X-axis. You can place them anywhere on the non-negative side of the X-axis, even on non-integer positions.
Let 'dist' be the maximum value of the distance between adjacent gas stations after adding 'k' new gas stations. Find the minimum value of dist.


<img width=400 height=500 src="https://github.com/user-attachments/assets/381c3c9f-0e17-41e6-bd53-09ada8394a6c">

<img width=400 height=500 src="https://github.com/user-attachments/assets/c42376b5-d85e-46fe-b129-afbf309fec24">

```ts
function minMaxDisBtwGasStation(gasStation: number[], k: number){
    let howMany = new Array(gasStation.length - 1).fill(0)
    for(let i = 1; i <= k; i++ ){
        let maxDistance = -1
        let maxIdx = -1

        for(let j = 0; j < howMany.length; j++){
            let diff = gasStation[j+1] - gasStation[j]
            // exact difference after placing gas station in between
            let exactDiff = diff/(howMany[j]+1)

            if(exactDiff > maxDistance){
                maxDistance = exactDiff
                maxIdx = j
            }
        }
        howMany[maxIdx]++
    }

    let max = -1
    // find the max distance from each gas station
    for(let i = 0; i < howMany.length; i++){
        let distance = (gasStation[i+1] - gasStation[i])/(howMany[i] + 1)
        max = Math.max(max, distance)
    }
    return max
}

export function CallMinMaxDisBtwGasStation(){
    let gasStation = [1,13,17,23]
    let k = 5
    console.log(minMaxDisBtwGasStation(gasStation, k))
}

```
- above code has time complexity of O(K*N) O(N-1)
- so can we improve time complexity
- so we have to place k gas station so we can't really do much with iteration of k times
- but in next loop we are looking for the max distance all the time and we are placing in between 
- hence instead of finding max value every time we can just use priority queue
- now pq.push() takes log(n) time , in Priority queue max element alway reamin on top
- pq.push(1) pq.push(2), pq.push(3) ....pq.top() result 3 , pq.top() result 3 , pq.pop() , pq.top() result 2
- so we will store all the distance in pq and keep updating the values


<img width=500 height=500 src="https://github.com/user-attachments/assets/c00c35bb-39df-42f3-a885-3494d1c1b090">
<img width=500 height=500 src="https://github.com/user-attachments/assets/f0bd3731-f2d4-4bc7-85bf-8a843de8458c">
