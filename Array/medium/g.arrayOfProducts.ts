function arrayOfProducts(array: number[]) {
  // Write your code here.
  let leftProduct = 1;
  let leftProd = new Array(array.length).fill(1)
  for(let i = 0; i < array.length; i++){
    leftProd[i] = leftProduct
    leftProduct *= array[i]
  }

  let rightProduct = 1;
  let rightProd = new Array(array.length).fill(1)
  for(let i = array.length-1; i > -1; i--){
    rightProd[i] = rightProduct
    rightProduct *= array[i]
  }

  for (let index = 0; index < array.length; index++) {
    array[index] = leftProd[index] * rightProd[index]
  }
  return array;
}
