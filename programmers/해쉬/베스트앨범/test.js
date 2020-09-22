const log = (...any) => console.log(...any); 

let arr = [1, 2, 3];
let arr2 = [["일", 3], ["이", 2], ["삼", 1]];

log(arr.sort((a, b) => a - b)); // 오름차순 [1, 2, 3]
log(arr.sort((a, b) => b - a)); // 내림차순 [3, 2, 1]
log(arr2.sort((a, b) => a[1] - b[1])); // 2중배열 사용 [['삼', 1], ['이', 2], ['일', 3]]

log("End");
