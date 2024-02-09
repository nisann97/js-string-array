"use strict";

let word = "AZerbaycaN";

// console.log(word.length);

// for (let i = 0; i < word.length; i++) {

//     console.log(word[i]);
// }


// console.log(word.toLowerCase());

// console.log(word.toUpperCase());

// console.log(word.trim());

// console.log(word.charAt(1));


// let res = word.concat("  salam");

// console.log(res);

// console.log(word.slice(1, 4));

// console.log(word.substring(1, 4));

// let txt = "djnakjSFNAkjnsdfa";

// console.log(txt);

// console.log(txt.substring(0, 11));
// let result = txt.substring(0, 11) + "...";

// console.log(result);

// let res3 = word.replace("Z", "z");
// console.log(res3);

// let res = word.indexOf("a")
// console.log(res);
// 
// console.log(word.lastIndexOf("a"));

// console.log(word.replaceAll("a", "b"));


// let res = word.split("b");

// console.log(res);


// let ages = [22,44,50,16];
// let res = ages.toString();


// console.log(ages.at(0));

const fruits = ["banana", "orange", "apple"];

// console.log(fruits.join(" * "));

// fruits.push("test");
// fruits.shift()
// fruits.unshift("salam");

// delete fruits[0];

// console.log(fruits);

// let res = fruits.filter(m=>m.includes("orange"));

// fruits = fruits.filter(m=>!m.includes("orange"));
// console.log(fruits.includes("banana"))

let re = fruits.find(m=>m.startsWith("b"));
// console.log(re);

fruits.forEach(fruit => { 

    console.log(fruit)
});