let array1  =[1, 5, 2, 6, 3, 7, 4];

console.log(quickSort(array1));

function quickSort(array) {
  if(array.length < 2) {
    return array;
  }
  const pivot = [array[0]];
  const left = [];
  const right = [];
  
  for(let i = 1; i < array.length; i++) {
    if(array[i] < pivot) {
      left.push(array[i]);
    } else if(array[i] > pivot) {
      right.push(array[i]);
    } else {
      pivot.push(array[i]);
    }
  }
  return quickSort(left).concat(pivot, quickSort(right));
}
