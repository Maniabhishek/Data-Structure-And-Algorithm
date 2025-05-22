- two sorted array will be given , our task is to sort the all the elements store in the same array , but without using extra space
- simplest approach is using two pointer on both the side and take one extra array, and comparing both side , but this approach will use an extra memory space
- another inutuition is without using extra memory space is by using two pointers again but this time on the left array we will start from biggest element that is from the end 
- and for right array we will start from the smallest value that is from the 0th element 
- this is to ensure that smallest value remain on the left side and largest values remains on the right side
- TC: O(minimum of length of one of the array) + O(nlog(n)) + O(mlog(m)
- SC: O(1)
```ts
function merge2Sorted_Optimal(arr1: number[], arr2: number[]) {
    let left = arr1.length-1
    let right = 0

    while(left >=0 && right < arr2.length) {
        if(arr1[left] > arr2[right]){
            let temp = arr1[left]
            arr1[left] = arr2[right]
            arr2[right] = temp
            left--
            right++
        }else {
            break
        }
    }

    arr1.sort((a,b)=> a-b)
    arr2.sort((a,b)=> a-b)

    console.log(arr1, arr2)
}
```
- below solution is using shell sort which uses the technique of gap
- we will take length of both the arrays and find the gap by dividing by 2 until gap is 1
- place first pointer on 0 on left array ,and 2nd pointer will be at x gap distance
- then keep swapping left and right if left is greater than right element
```js
function swapIfGreater(arr1, arr2, ind1, ind2) {
  if (arr1[ind1] > arr2[ind2]) {
    [arr1[ind1], arr2[ind2]] = [arr2[ind2], arr1[ind1]];
  }
}

function merge(arr1, arr2, n, m) {
  const len = n + m;
  let gap = Math.ceil(len / 2);

  while (gap > 0) {
    let left = 0;
    let right = left + gap;

    while (right < len) {
      if (left < n && right >= n) {
        swapIfGreater(arr1, arr2, left, right - n);
      } else if (left >= n) {
        swapIfGreater(arr2, arr2, left - n, right - n);
      } else {
        swapIfGreater(arr1, arr1, left, right);
      }
      left++, right++;
    }

    if (gap == 1) break;

    gap = Math.ceil(gap / 2);
  }
}

const arr1 = [1, 4, 8, 10];
const arr2 = [2, 3, 9];
const n = 4, m = 3;

merge(arr1, arr2, n, m);

console.log("The merged arrays are:");
console.log(`arr1[] = ${arr1.join(" ")}`);
console.log(`arr2[] = ${arr2.join(" ")}`);



```
