- you are given a string , and we need to find out if a given string can be valid parentheseis
- (()) let's take count 
- 1st opening then increase the count count=1
- 2nd openinng again then increase the count= 2
- 3rd is closing then decrese the count count = 1
- 4th is closing then decrease the count = 0
- if count is 0 this means that given string is a valid parenthesis
- there is catch in this case ())(
- if we apply the same logic as above ( -> count = 1,  ) -> count = 0, ) count = -1, ( -> count += 1, will be 0
- but the above string is not a valid parenthesis
- hence at any point index the count becomes -ve which means it cannot be a valid parenthesis and return false
- given string can also have * which means it can either be (or ) or empty string
- now we need to tell whether given string will be valid or not
- so how can we do it we can do it by trying all possible ways

<img src="https://github.com/user-attachments/assets/3f015c12-e801-4152-8029-970f33049412" width=400 >

```ts
function validParenthesis(str: string, idx: number, count: number){
    if(count < 0) return false

    if(idx >= str.length){
        return count === 0
    }

    if(str[idx] === '('){
        return validParenthesis(str, idx+1, count+1)
    }
    if(str[idx] === ')'){
        return validParenthesis(str, idx+1, count-1)
    }

    // let's take all the possible ways, let consider * as opening , then closing, then empty
    return validParenthesis(str, idx+1, count+1) || validParenthesis(str, idx+1, count-1) || validParenthesis(str, idx+1, count)
}

export function CallvalidParenthesis(){
    console.log(validParenthesis("((*)", 0, 0))
}

```
- but the above code has time complexity of O(3^N) as at every * can have 3 different ways , thus 3^N , we can also say it to be exponential
-  but we can further improve using dp, take an array dp[][], store the recurring result
- can we further improve it , yes using min and max approach
<img src="https://github.com/user-attachments/assets/86e59b65-9cd3-4886-af05-3bd1b5721d73" width=400>

```ts
 
function validParenthesis2(str: string){
    let min = 0;
    let max = 0;
    for(let i = 0; i < str.length; i++){
        if(str[i] === '('){
            min += 1
            max += 1
        }else if(str[i] === ')'){
            min -= 1
            max -= 1
        }else {
            max = max+1
            min = min-1 
        }
        if(min < 0) min = 0
        if(max < 0) return false
    }


    return min === 0
}

export function callvalidParenthesis2(){
    console.log(validParenthesis2("((*)"))
}

```
