// Imagine that you want to schedule a meeting of a certain duration with a
// co-worker. You have access to your calendar and your co-worker's calendar
// (both of which contain your respective meetings for the day, in the form of [startTime, endTime]
// ), as well as both of your daily bounds
//   (i.e., the earliest and latest times at which you're available for meetings
//   every day, in the form of [earliestTime, latestTime]


// Write a function that takes in your calendar, your daily bounds, your
// co-worker's calendar, your co-worker's daily bounds, and the duration of the
// meeting that you want to schedule, and that returns a list of all the time
// blocks (in the form of [earliestTime, latestTime]
// ) during which you
//  could schedule the meeting, ordered from earliest time block to latest.


// Also note that the given calendar times will be sorted by start time in
// ascending order, as you would expect them to appear in a calendar application
// like Google Calendar.

// Sample Input
//calendar1
// [['9:00', '10:30'], ['12:00', '13:00'], ['16:00', '18:00']]]
//dailyBounds1
// = ['9:00', '20:00']
//calendar2
// [['10:00', '11:30'], ['12:30', '14:30'], ['14:30', '15:00'], ['16:00', '17:00']]
// = ['10:00', '18:30']
// meeting duration 30

//sample output
//[['11:30', '12:00'], ['15:00', '16:00'], ['18:00', '18:30']]
/*
  lets update at what time the coworkers are not available 
  updated the calendar 
  for co worker 1 => 
  ['00:00','9:00'],['9:00', '10:30'], ['12:00', '13:00'], ['16:00', '18:00'] [20:00,23:59]
  for coworker 2
  ['0:00','10:00'],['10:00', '11:30'], ['12:30', '14:30'], ['14:30', '15:00'], ['16:00', '17:00'], ['18:30','23:59']

  now lets merge this calendar for both of the coworker where at least one of the member is unavailable
  [00:00,10:00],['00:00','9:00'],['09:00', '10:30'],['10:00', '11:30'],['12:00', '13:30'], ['12:30', '14:00'], ['14:30', '15:00']['16:00', '18:00']['16:00', '17:00']['18:30','23:59'][20:00,23:59]

  now lets flatten the merged calendar for unavailability
  how will we flatten it 
  first compare the first interval end value with start value of next inerval
we will compare([00:00,10:00],['00:00','9:00'])  10:00 with 00:00 10>= 00:00 ....yesss it is so select the max value of previous end and current end which is 10 so first iteration o/p will be
['00:00',10:00]

now only the remaining values are left to be compared with ['00:00','10:00']
['09:00', '10:30'],['10:00', '11:30'],['12:00', '13:30'], ['12:30', '14:00'], ['14:30', '15:00']['16:00', '18:00']['16:00', '17:00']['18:30','23:59'][20:00,23:59]

  now compare  ['00:00','10:00'] and ['09:00', '10:30']
  10:00 >= 09:00
  then 
  change the currentEnd value with Math.max('10:00','10:30')
  so the current flattened array with us is 
  [00:00,10:30]

  remaining value to be iterated 
  ['10:00', '11:30'],['12:00', '13:30'], ['12:30', '14:00'], ['14:30', '15:00']['16:00', '18:00']['16:00', '17:00']['18:30','23:59'][20:00,23:59]

  now compare  [00:00,10:30],['10:00', '11:30']
  10:30>=10:00 yes 
  then 
  Math.max(10:30,11:30)
  now flattened array is ['00:00','11:30']

  remaining value to be iterated 
  ['12:00', '13:30'], ['12:30', '14:00'], ['14:30', '15:00']['16:00', '18:00']['16:00', '17:00']['18:30','23:59'][20:00,23:59]

  now compare ['00:00','11:30'],['12:00', '13:30']
  11:30 >= 12:00
  No
  then push this new interval ['12:00', '13:30']
  and our flattened array is [['00:00','11:30'],['12:00', '13:30']]

  remaining value to be iterated
  ['12:30', '14:00'], ['14:30', '15:00']['16:00', '18:00']['16:00', '17:00']['18:30','23:59'][20:00,23:59]

  now we will compare ['12:00', '13:30'] ,['12:30', '14:00']
  13:30>=12:30 yess
  then flatten this previous one
  [12:00,14:00]
  flattened array is [['00:00','11:30'],[12:00,14:00]]
  
  remaining value to be iterated is 
  ['14:30', '15:00']['16:00', '18:00']['16:00', '17:00']['18:30','23:59'][20:00,23:59]

  to compare [12:00,14:00],['14:30', '15:00']
  14:00>=14:30
  false then push another interval
  
  [['00:00','11:30'],[12:00,14:00]],

  new flattened array 
  [['00:00','11:30'],[12:30,14:00],['14:30', '15:00']]


  remaining value to be iterated
  ['16:00', '18:00']['16:00', '17:00']['18:30','23:59'][20:00,23:59]

  values to be compared ['14:30', '15:00'],['16:00', '18:00']
  15>=16 no then new interval will be inserted

  now flattened array is 
  [['00:00','11:30'],[12:30,14:00],['14:30', '15:00'],['16:00', '18:00']]
  remaining value to be iterated 
  ['16:00', '17:00']['18:30','23:59'][20:00,23:59]

  then after comparing all of these we will get the following flattened array :
and so on..
time complecity T(c1+ c2)
*/

//solution
export function calendarMatching(
  calendar1: string[][],
  dailyBounds1: string[],
  calendar2: string[][],
  dailyBounds2: string[],
  meetingDuration: number,
) {
  // Write your code here.
  const updatedCalendar1 = updateCalendar(calendar1,dailyBounds1);
  const updatedCalendar2 = updateCalendar(calendar2,dailyBounds2);
  const mergedCalendar = mergeCalendar(updatedCalendar1,updatedCalendar2);
  const flattendCalendar:number[][] = flattenCalendar(mergedCalendar);
  
  return getMatchingMeetings(flattendCalendar,meetingDuration);
}

function updateCalendar(calendar:string[][],dailyBounds: string[]):number[][]{
  const updatedCalendarValue: string[][] = [['00:00',dailyBounds[0]],...calendar,[dailyBounds[1],'23:59']];
  const updatedCalendarValueToMin = updatedCalendarValue.map(interval=> interval.map(time=>timeToMin(time)));
  return updatedCalendarValueToMin;
}

function mergeCalendar(calendar1:number[][],calendar2:number[][]):number[][]{
  let i =0;
  let j =0;
  const mergedCalendar:number[][]=[];
  console.log(calendar1,calendar2)
  while(i < calendar1.length && j < calendar2.length){
    if(calendar1[i][0] < calendar2[j][0]){
      mergedCalendar.push(calendar1[i]);
      i++;
    }else{
      mergedCalendar.push(calendar2[j]);
      j++;
    }
  }
  while(i<calendar1.length){
    mergedCalendar.push(calendar1[i++]);
  }
  while(j<calendar2.length){
    mergedCalendar.push(calendar2[j++]);
  }
  return mergedCalendar;
}

function flattenCalendar(calendar:number[][]){
  const flattendCalendar:number[][] = [calendar[0]];
  for(let i=1; i<calendar.length; i++){
    let previousMeeting:number[] = flattendCalendar[flattendCalendar.length-1];
    let currentMeeting:number[] = calendar[i];
    if(previousMeeting[1] >= currentMeeting[0]){
      const newPreviousMeeting = [previousMeeting[0],Math.max(previousMeeting[1],currentMeeting[1])];
      flattendCalendar[flattendCalendar.length - 1] = newPreviousMeeting;
    }else{
      flattendCalendar.push(currentMeeting);
    }
  }
  return flattendCalendar;
}

function timeToMin(time: string){
  let [hr,min] = time.split(':');
  const totalMin = parseInt(hr)*60 + parseInt(min);
  return totalMin;
}

function getMatchingMeetings(calendar:number[][],duration:number){
  const matchedMeetings:number[][]=[];
  for(let i=0; i< calendar.length-1; i++){
    const currentMeeting = calendar[i];
    const nextMeeting = calendar[i+1];
    const start = currentMeeting[1];
    const end = nextMeeting[0];
    const availabilities = end-start;
    if(availabilities >= duration){
      matchedMeetings.push([start,end]);
    }
  }
  return matchedMeetings.map(meetings=> meetings.map(minutesToTime));
}

function minutesToTime(timeInMin:number){
  const hr = Math.floor(timeInMin/60);
  const min = timeInMin%60;
  const hrString = hr.toString();
  const minString = min<10 ? '0'+min.toString() : min.toString();
  return hrString+':'+minString;
}
