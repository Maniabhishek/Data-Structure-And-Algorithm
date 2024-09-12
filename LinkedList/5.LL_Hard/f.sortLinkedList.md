- the naive way of sorting is to traverse all the way and store all the data in an array , and sort the array and convert aray to LL , now this will have O(N) + NO(log(N)) + O(N) time complexity and O(N) + O(N) space complxity
- so we need to optimize this , how can we do this, we can use the same logic as merge sort , so we keep dividing the list in half until we get one single node
- once we get one single node return that ndoe and merge the individual nodes


```ts
```
