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