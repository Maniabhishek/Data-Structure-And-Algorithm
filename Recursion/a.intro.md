## Recursion 
- A function that calls itelf is called recursion

```ts
let i = 0 
function f(){
 console.log(i)
 i++
 f()
}
```

- now if we call this function f() it will keep calling itself now that above function doesn't have base condition so it will stop once stack overflow occurrs , as each function calls will keep going into the stack and eventually when memory is completely filled it will throw error
- in order to make the funciton run properly without error add base condition

```ts
let i = 0
function f(){
  if(i === 4) return;
  console.log(i)
  i++
  f()
}
```

- every function which is in stack and not yet completed , will be kept in the stack space
