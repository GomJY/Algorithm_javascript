//[yellow_hat, headgear], [blue_sunglasses, eyewear], [green_turban, headgear]]	5


let clothes = [["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]];
let answer = 1;


let hash_clothes = {};

clothes.forEach(clothesArr => {
  let type = clothesArr[1];
  let name = clothesArr[0];
  hash_clothes.hasOwnProperty(type) ? ++hash_clothes[type] : hash_clothes[type] = 1;
});

Object.values(hash_clothes).forEach(value => answer = answer * (value + 1));

// return --answer;
console.log(--answer);