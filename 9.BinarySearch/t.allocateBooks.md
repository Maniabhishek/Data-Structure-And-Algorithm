- Given an array ‘arr’ of integer numbers, ‘arr[i]’ represents the number of pages in the ‘i-th’ book.
- There are ‘m’ number of students, and the task is to allocate all the books to the students.
- Allocate books in such a way that:
1. Each student gets at least one book.
2. Each book should be allocated to only one student.
3. Book allocation should be in a contiguous manner.

- You have to allocate the book to ‘m’ students such that the maximum number of pages assigned to a student is minimum.
- If the allocation of books is not possible, return -1.
Example:
Input: ‘n’ = 4 ‘m’ = 2 
‘arr’ = [12, 34, 67, 90]

Output: 113

```ts
function allocateBooks(bookWithPageCount: number[], studentCount: number){

    if(studentCount > bookWithPageCount.length) return -1

    let maxPage = bookWithPageCount[0]
    for(let i = 1; i < bookWithPageCount.length; i++){
        maxPage = Math.max(maxPage, bookWithPageCount[i])
    }

    let totalPage = 0
    for(let i = 0; i < bookWithPageCount.length; i++){
        totalPage += bookWithPageCount[i]
    }

    for(let pageCount = maxPage; pageCount <= totalPage; pageCount++){
        let numberOfStudent = allocateBooksHelper(bookWithPageCount, pageCount)
        if(numberOfStudent === studentCount){
            return pageCount
        }
    }
    return -1
}

function allocateBooksHelper(bookWithPageCount: number[], pageCount: number){
    let currentStudentCount = 1;
    let currentPageCount = 0;

    for(let i = 0; i < bookWithPageCount.length; i++){
        currentPageCount = currentPageCount + bookWithPageCount[i]
        if(currentPageCount > pageCount){
            currentStudentCount += 1
            currentPageCount = bookWithPageCount[i]
        }
    }
    return currentStudentCount
}

export function CallAllocateBooks(){
    let books = [12,34,67, 90]
    books = [25, 46, 28, 49, 24]

    let studentCount = 2
    studentCount = 4
    console.log(allocateBooks(books,studentCount))
}

// TC of above code will be O((Sum - Max)*log(n))
// since we have a range from max to sum of all pages
// so we can still improve the code using binary search
// so if studentCount we get more low = mid + 1 else high = mid - 1

function allocateBooksUsingBS(bookWithPageCount: number[], studentCount: number){
    if(studentCount > bookWithPageCount.length) return -1

    let maxPage = bookWithPageCount[0]
    for(let i = 1; i < bookWithPageCount.length; i++){
        maxPage = Math.max(maxPage, bookWithPageCount[i])
    }

    let totalPage = 0
    for(let i = 0; i < bookWithPageCount.length; i++){
        totalPage += bookWithPageCount[i]
    }

    let low = maxPage
    let high = totalPage

    while(low <= high){
        let mid = Math.floor((low + high)/2)
        let currentStudentCount = allocateBooksHelper(bookWithPageCount, mid)

        if(currentStudentCount > studentCount){
            low = mid + 1
        }else {
            high = mid - 1
        }
    }
    return low
}

export function CallallocateBooksUsingBS(){
    let books = [12,34,67, 90]
    // books = [25, 46, 28, 49, 24]

    let studentCount = 2
    // studentCount = 4
    console.log(allocateBooksUsingBS(books,studentCount))
}

```
