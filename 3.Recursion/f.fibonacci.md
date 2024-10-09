## fibonacci , eg., 0,1,1,2,3,5,8
> - we need to print fibonacci series , how is it obtained , we have 0 and 1 and we sum these two and get 1, then sum previous two and keeps going
> - so in our program we take these two values print a and then sum the previous two
```js
function Fibonacci(a,b,i,n){
  if(i > n) return
  console.log(a)
  Fibonacci(b, a+b, i+1, n)
}
Fibonacci(0,1,0,5)
```

> - lets improve this method , we get fibonacci number from previous two numbers ,f(n-1)+f(n-2) and if it is 0 or 1st fibonacci value then it is always going to be 0 or either 1 thus if n <= 1 return n
```js
function Fibonacci(n){
  if(n<=1) return n
  return Fibonacci(n-1) + Fibonacci(n-2)
}
```
