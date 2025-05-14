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

- can we do the same thing with the strings if we have to find the count of the character, can we store hashing in array , yes
- total number alphabets lets say we only have small case then 26 , create array of size of 26. at 0 we can think of a  and 25 is z
- and we can compute using ascii anychar - 97

> - we saw we were hashing using arrays , now what about if it size grows too large then how are we going to solve this , this can be solved using map
> - and storing or fetching anything from map takes log(n) TC
> - we do have something called unordered map in c++ stl and java collection
> - where it can take O(1) TC for average and best case, so for the most of the case it will be O(1)
> - but for worst case it will be O(N)
> - so we should use unorderedmap most of the time if it take O(N) then switch to ordered map
> - how does hashing works 1) division method 2) folding method 3) mid square method
>> - division method basically works by getting modulo lets say we have an array 0,1,2,2,3,4,4,19 and we want store the count , then get the modulo of each for 0%10 is 0 then store 0 at key 0 similarly 1%10 is 1 store 1 at 1, and goes on same for 19 19%10 it will be stored at 9
>> - but there can be situation of collision lets we have 39 as well , then 39 will also sit at 9th index where 19 was , now this is a problem but this will be solved using linked list
>> - and will be stored in sorted order and this can be done in various way using binary search and many other ways
>> - hence in such worst cases it can be O(N)


### Ordered Map
- Implementation: Typically a Red-Black Tree (self-balancing BST).
- Order: Maintains sorted order by key.
> Time Complexities:
> Operation	and Time Complexity
> - Insert	O(log n)
> - Delete	O(log n)
> - Search	O(log n)
> - Begin/End (min/max)	O(log n)


### Unordered Map
- Implementation: Hash Table
- Order: No order (keys appear in arbitrary order).

### When to Use What?
#### Use unordered_map when:
- You don’t need order.
- You want fast average-time performance (e.g., frequency counts, lookup tables).
#### Use map when:
- You need sorted order, range queries, or upper_bound/lower_bound.
- Deterministic iteration order matters.

