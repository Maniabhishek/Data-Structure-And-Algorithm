## we have an array [1,2,3,4,5] and output we want is [5,4,3,2,1]
> we can simply put two pointer one both sides at elemnt 1 and at element 5 and then swap , 2 and 4 then swap until left pointer becomes greater than or equal to right pointer
```js
function Reverse(arr, l, r){
  if(l>=r){
    return
  }
  swap(arr, l, r)
  Reverse(arr, l+1, r-1)
}
const arr = [1,2,3,4,5]
Reverse(arr, 0, 4)
console.log(arr)
function swap(arr, l , r){
  let tmp = arr[l]
  arr[l] = arr[r]
  arr[r] = tmp
}
```

> lets try to solve the above problem with only one pointer, as we have 1st index and its corresponding index will be n-i-1, similary for 2nd index as well it will be n-i-1 -> 5-1-1->3
```js
function Reverse(arr, i){
  if(i>=n/2) return
  swap(arr, i, arr.length - 1 - i)
  Reverse(arr, i + 1)
}
```
