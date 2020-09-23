const log = (...any) => console.log(...any);
const array  =[1, 5, 2, 6, 3, 7, 4];
const commands = [[2, 5, 3], [4, 4, 1], [1, 7, 3]];
let answer = [];


for(let command of commands) {
  let i = command[0] - 1,
      j = command[1],
      k = command[2] - 1;
  let arr = quickSort(array.slice(i, j));
  answer.push(arr[k]);
}

console.log(answer);



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
