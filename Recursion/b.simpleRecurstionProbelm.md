## Recursion Problem
### problem to print name N times using recursion
```js
function PrintName(i, N){
  if(i > N) return
  console.log(i)
  PrintName(i+1)
}

PrintName(1, 5)
```

### problem to print 1 to N using recursion
```js
function Print(i, N){
  if(i > N) return;
  console.log(i)
  Print(i+1, N)
}
Print(1, 5)
```

### Problem to print N to 1 using recursion
```js
function Print(i, N){
  if(i<1) return
  console.log(i)
  Print(i, N)
}
Print(5,5)
```

###Problem to print 1 to N using backtrack
- using bactrack , let's take it as we do not want to use i+1 which we were using in line 18 above , the function should backtrack
```js
function Print(i, N){
  if(i < 1) return
  Print(i-1, N)
  console.log(i)
}
Print(5, 5)
```

###Problem to print N to 1 using backtrack
```js
function Print(i, N){
  if(i > N) return
  Print(i+1, N)
  console.log(i)
}
Print(1, 5)
```
