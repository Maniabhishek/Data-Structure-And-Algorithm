- we will be given two array with start time and end time of the meeting
- no meeting is supposed to be overlapped, 
- if meeting at, 1 to 3 then no other meeting can be held between these duration and next meeting can only start from 4
- our task is maximize the number of meeting
- if we do smaller meeting first , then we will be able to accomodate maximum meetings
- so if we sort the meeting based on end time 
- it will be easier to solve
```ts
type schedule = {
    start: number;
    end: number;
    id: number;
}

function nMeetings(start: number[], end: number[]){
    const meetings: schedule[] = new Array(start.length)
    for(let i = 0; i < start.length; i++){
        let meeting: schedule = {
            start: start[i],
            end: end[i],
            id: i+1
        }

        meetings[i] = meeting
    }

    meetings.sort((a,b) => a.end - b.end)

    let count = 1
    let prevMeetingEndTime = meetings[0].end
    const meetingsDone = [meetings[0].id]
    for(let i = 1; i < meetings.length; i++){
        if(meetings[i].start > prevMeetingEndTime){
            count += 1
            prevMeetingEndTime = meetings[i].end
            meetingsDone.push(meetings[i].id)
        }
    }
    console.log(meetingsDone)
    return count
}

export function CallnMeetings(){
    const start = [0,3,1,5,5,8]
    const end = [5,4,2,9,7,9]

    console.log(nMeetings(start, end))
}
```
