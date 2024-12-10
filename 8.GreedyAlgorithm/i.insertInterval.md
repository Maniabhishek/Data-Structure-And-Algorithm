- intervals are provided in sorted manner, need to insert the new interval
- any interval that will be added can be assumed as there will be left and right interval to it 
- to the left, will be all the value where 2nd element is smaller than 1st elment of new interval
- once 2nd element beomes lesser or equal to 1st element of newInterval, we stop 
- and update new interval as long as 1st element is <= newIntervals 2nd element
- and in the last keep adding the rest of the interval


```ts
type interval = [number, number]

function insertInterval(intervals: interval[], newInterval: interval){
    const result: interval[] = []

    let i = 0
    while(i < intervals.length && intervals[i][1] < newInterval[0]){
        result.push(intervals[i])
        i++
    }

    while(i < intervals.length && intervals[i][0] <= newInterval[1]){
        newInterval[0] = Math.min(intervals[i][0], newInterval[0])
        newInterval[1] = Math.max(intervals[i][1], newInterval[1])
        i++
    }

    result.push(newInterval)

    while(i < intervals.length){
        result.push(intervals[i])
        i++
    }
    console.log(result)
}

export function CallInsertIntervals(){
    insertInterval([[1,2],[3,4],[6,7],[8,10],[12,16]], [5,8])
}

```
