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
