- lets say we have to find the count of element from an array , so we take a counter variable and run a loop if given element matches at any given indexes we will increment the counter so function can be f(n, arr)
- now above solution will give us the answer , but let's say we have so many number to be find out then we will running f(n, arr) that many times and f(n, arr) itself will run in O(n) times
- thus we can do something called hashing , lets say if statement says there is an array which contains element up to 12 and you need to find count of any elemnent in the array
- so what we can do is to create an array of size of max number in the given array lets say 12
- store count for each number this way you can do this in constant time complexity

```js
// let say array can have max of 12 
function f(n, arr){
  const hash = new Array(13).fill(0)
  for(let i=0; i<arr.length; i++){
    hash[arr[i]] += 1 
  }

  // this below array will give us result in constant time
  console.log(hash[n])
}
```
