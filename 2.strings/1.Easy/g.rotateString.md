> Given two strings s and goal, return true if and only if s can become goal after some number of shifts on s. A shift on s consists of moving the leftmost character of s to the rightmost position. For example, if s = "abcde", then it will be "bcdea" after one shift.

```js
func canShiftToGoal(s, goal string) bool {
    if len(s) != len(goal) {
        return false
    }
    return strings.Contains(s + s, goal)
}
```
