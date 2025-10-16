// ARRAY METHODS 
const cars = ["Saab", "Volvo", "BMW"];
cars[3]="BENZ";//adding elements
console.log(cars);
console.log(cars[3]);//accesing element
let car=cars.toString(); // array to string conversion
console.log(typeof(car));
console.log(typeof(cars));

let len=cars.length; // finding the length of array
console.log(len);
let sort=cars.sort(); // sorting elments in array
console.log(sort);

console.log(cars[0]) // accesing the first element of array
console.log(cars[len-1]) // accesing the last elemet of array


let text=" ";
for ( let i=0 ;i < cars.length ;i++){ // accesing the elements using for loop
    text+=cars[i] + ",";
}
console.log(text);

let elements = " ";
cars.forEach(myfunction);
elements += " ";
 function myfunction(value){
  elements +=value + ",";
 }
 console.log(elements);

 cars.push("AUDI"); //adding elemts to array using push method 
 console.log(cars);

 cars.pop(); // removing the last elements of array using pop method
 console.log(cars);

 console.log(Array.isArray(cars)); // to check weather the given array is rray or not

  const myObj = {
  name: "John",
  age: 30,
  cars: [
    {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
    {name:"BMW", models:["320", "X3", "X5"]},
    {name:"Fiat", models:["500", "Panda"]}
  ]
}
let y=""
let x=" ";
for ( let i in myObj.cars){
    y+=cars[i].name + ":";
    for (let j  in myObj.cars[i].models){
        x+=myObj.cars[i].models[j] + ",";    }
    }
    console.log(y);
    console.log(x);

  const fruits=["banana","orange","apple","mango"];
 let pos=fruits.at(2); // to get the value of a particulat position
console.log(pos);

let join=fruits.join("*"); // joining all elements of the array into a string
console.log(join);
let shift=fruits.shift(); // shift method retuen the value that was shifted out
console.log(shift);
fruits.unshift("kiwi"); // unshift method adds a new element at the beginning
console.log(fruits);
delete fruits[0]; // delete method removes the element but it leaves empty hole in the array
console.log(fruits);
const group=cars.concat(fruits); //concat is used to merge two array;
console.log(group);

fruits.copyWithin(2,0); //copywithin method copies the elements to the specific position
console.log(fruits);

const myArr = [[1,2],[3,4],[5,6]];
const newArr = myArr.flat(); // The flat() method creates a new array with sub-array elements concatenated to a specified depth.
console.log(newArr);

const myAr = [1, 2, 3, 4, 5, 6];
const newAr = myAr.flatMap(x => [x, x * 10]);
console.log(newAr); // the flatMap() method creates a new array with each element being the result of the callback function
 fruits.splice(2,0,"lemon","kiwi"); // splice method adds or removes new items to an array
 console.log(fruits);
 fruits.splice(0,1); //removing elements using splice method
 console.log(fruits);
 const months = ["Jan", "Feb", "Mar", "Apr"];
const spliced = months.toSpliced(0, 1);
console.log(spliced); // toSpliced method does not change the original array
const months1=months.toSpliced(2,0,"dec");
console.log(months1);
const citrus = fruits.slice(2); // slice method slices out a piece of an array into a new array
console.log(citrus);
fruits.toString()
let change = console.log(fruits);
console.log(typeof(change));

 let numbers=[1,2,3,4,5,6,20];
 numbers.forEach(myfunction);
 function myfunction(value,i){
    console.log( i + ":" + value);
 }

// ARRAY SEARCH 
 let index=numbers.indexOf(3);
 console.log(index); // indexof method returns the first index of the element
const goods = ["Apple", "Orange", "Apple", "Mango"];
let position = goods.lastIndexOf("Apple") + 1;// lastIndexOf method returns the last index of the element
console.log(position); 
console.log(goods.includes("Mango")); // includes method returns true if the array contains a certain element
let first=numbers.find(myfun);//The find() method returns the value of the first array element that passes a test function.
function myfun(value){
    return value> 18;
}
console.log(first);

let second=numbers.findIndex(find);//The findIndex() method returns the index of the first array element that passes a test function.
console.log(second);
function find(value){
    return value>18;
}

const temp=[27,28,30,40,42,35];
let high=temp.findLast(x => x>40);
console.log(high);
let posi = temp.findLastIndex(x => x > 40);
console.log(posi);

// ARRAY SORT
const fruit = ["Banana", "Orange", "Apple", "Mango"];
fruit.sort();
console.log(fruit);
fruit.reverse();
console.log(fruit);
const month = ["Jan", "Feb", "Mar", "Apr"];
const sorted = month.toSorted();
console.log(sorted);
const reversed = month.toReversed();
console.log(reversed);

const points = [40, 100, 1, 5, 25, 10];
function myarraymin(arr){
    return Math.min.apply(null,arr); // returns the smallest of the numbers
}
console.log(myarraymin(points));

function myarraymax(arr){
    return Math.max.apply(null,arr); // returns the largest of the numbers
}
console.log(myarraymax(points));

const numbers1 = [45, 4, 9, 16, 25];
const numbers2= numbers1.map(myfun);
function myfun(value, index,array){
    return value*2;
}
console.log(numbers2);
const myArray = [1, 2, 3, 4, 5, 6];
const newArray = myArray.flatMap((x) => x * 2);
console.log(newArray);

const number = [45, 4, 9, 16, 25];
const over18 = number.filter(myFunction); //The filter() method creates a new array with array elements that pass a test.

function myFunction(value, index, array) {
  return value > 18;
}
console.log(over18);
let sum = number.reduce(myFunction); //The reduce() method runs a function on each array element to produce a single value.

function myFunction(total, value, index, array) {
  return total + value;
}
console.log(sum);
let allOver18 = number.every(myFunction);
let someOver18 = numbers.some(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
console.log(allOver18); //The every() method checks if all array values pass a test.
console.log(someOver18);
let tex = "ABCDEFG";
const my = Array.from(tex); //The Array.from() method returns an Array object from:
console.log(my);

const keys=fruits.keys(); //The keys() method returns an Array Iterator object with the keys of an array.
let te=""
for(let i of keys){
    te+=i+",";
}
console.log(te)


console.log("Using for...of:");
for (let fruit of fruits) {
  console.log(fruit); // values
}

console.log("Using for...in:");
for (let index in fruits) {
  console.log(index); // indexes
}


const f = fruits.entries();
console.log(f);
for(let x of f){
    console.log(x);
}

const myMonths = months.with(2, "March"); //Array with() method as a safe way to update elements in an array without altering the original array.
console.log(myMonths);
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];//The spread operator (...) can be used to join arrays:
console.log(arr3);
const arr4 = [...arr1]; // creates a shallow copy

console.log(arr4); 
const word = "Hello";
const letters = [...word]; // spread operator to turn a string into an array

console.log(letters); 
function sum(x, y, z) {
  return x + y + z;
}

const nums = [1, 2, 3];
console.log(sum(...nums)); // spread operator to pass array elements as function arguments

const [firs, secon, ...rest] = [10, 20, 30, 40, 50]; //...rest gathers all the remaining values into a new array.

console.log(firs);  // 10
console.log(secon); // 20
console.log(rest);   // [30, 40, 50]

const person = {
  name: "Alice",
  age: 25,
  city: "Paris",
  country: "France"
};

const { name, ...others } = person;

console.log(name);   // "Alice"
console.log(others); // { age: 25, city: "Paris", country: "France" }



//  javascript sets 
const letter = new Set(["a","b","c"]);
console.log(letter);
console.log(letter.size); // size property returns the number of elements in a set
letter.add("d"); //adds new element  to the set
console.log(letter);

let list=" ";
for(let x of letter){
  list+=x + ",";
}
console.log(list);

answer=letter.has("d"); //return true or false if the elemnet is present in the set 
console.log(answer);

const myIterator = letter.values();
console.log(myIterator);
let list2="";
for( x of myIterator){
  list2+= x + ",";
}
console.log(list2);
letter.delete("d"); // removes a specific element from the set
console.log(letter);

//  javascript maps

let  bikes=new Map(); // A Map object holds key-value pairs where the keys can be any datatype.
bikes.set(1,"honda");
bikes.set(2,"yamaha");
bikes.set(3,"suzuki");
console.log(bikes);

let bring =bikes.get(2); // to get the value of a particular key 
console.log(bring);

const vegies = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);
console.log(vegies.get("apples"));
console.log(vegies.size);
vegies.clear(); // removes all the elements from the map
console.log(vegies);
console.log(vegies.has("apples")); // returns true or false if the key is present in the map


// data types in javascript 
let a="hello"; //string
let b=123.50; //number
let c=BigInt(12345678901234567899); //bigint
let d=true; //boolean
let e={name:"john",age:20}; //object
let g=Symbol("id"); //sumbol
let h; //undefined
let i=null; //null
console.log(typeof(a));
console.log(typeof(b));
console.log(typeof(c));
console.log(typeof(d));
console.log(typeof(e));
console.log(typeof(g));
console.log(typeof(h));
console.log(typeof(i));
console.log(b);
console.log(b.toString());
let v=Number("1234"); // converts string to number
console.log(v);
let w=parseInt("1234.56");// converts string to integer
console.log(w);


