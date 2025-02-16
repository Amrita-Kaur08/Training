// Array Functions
// Array at()
const languages = ["Python", "JavaScript", "Html", "CSS"];
let result = languages.at(2);
console.log(result)

//Array filter()
let ages = [19, 42, 15, 50];
let result_age = ages.filter(checkage);
function checkage(result_age) {
  return result_age >= 18;
}

//Array includes() 
const array = [5, 7, 2];
console.log(array.includes(2));

const languages1 = ["python", "css", "php"];
console.log(languages1.includes("css"));

//Array concat()
let array1 = ["H", "e", "l"];
let array2 = ["l", "o", "!"];
let results = array1.concat(array2);

//Array slice
const vehicles = ["car", "bike", "cycle", "scooty"];
console.log(vehicles.slice(3));
console.log(vehicles.slice(1, 3));


// Array Reverse
const list = ["Apple", "Banana", "Grapes", "Mango"];
console.log(list.reverse());

//Array sort()
const list1 = ["Apple", "Banana", "Mango", "Grapes"];
console.log(list1.sort());

//Array fill()
let list2 = ["Apple", "Banana", "Grapes", "Mango"];
console.log(list2.fill("Orange"));

//Array push()
const vehicles1 = ["car", "bike", "scooty"];
const check = vehicles1.push("cycle");
console.log(check);

//Array pop()
const vehicles2 = ["car", "bike", "scooty"];
const check1 = vehicles2.pop();
console.log(check1);

//Array shift
const languages2 = ["python", "php", "html"];
const see = languages2.shift();
console.log(see);

//Array unshift
const list3 = ["car", "bike", "scooty"];
const un_shift = list3.unshift("cycle","truck");
console.log(un_shift);
