"use strict"


let name = "Cavid";


function reverseName(name){

    let strReverse = name.split("");

   let reverseArray =  strReverse.reverse();

   let arrayToString = reverseArray.join("");

   return arrayToString;
}


// console.log(reverseName(name));


let year = 2024;

let age = 30;

function calculateAge(year, age){

    return year-age;
}

// console.log(calculateAge(year,age))

let person1 = {
    id: 1,
    name: "Nisa",
    fullName: "Nisa Narimanova",
    age:26, 
    salary: 2500
}

let person2 = {
    id: 2,
    name: "Rufana",
    fullName: "Rufana Ahmadova",
    age: 30, 
    salary: 2200
}

let person3 = {
    id: 3,
    name: "Arzu",
    fullName: "Arzu Kerimli",
    age: 25, 
    salary: 2300
}


const people = [person1, person2, person3];

function showPeopleNumber(people){
    
    let count = 0;

    for (const person of people) {
        
        count++
    }

    return count;
}

// console.log(showPeopleNumber(people));


function averageIncome(people){

    let sum = 0;
    let count = 0;

   for (const person of people) {
        count++
    sum+= person.salary;

   }
   return sum/count
}

// console.log(averageIncome(people));

let searchText = "Nisa Narimanova"

function searchFullName(people, searchText){

   for (const person of people) {
     
    if(person.fullName == searchText){
        
        return person.name +  " " + person.salary
    }
 
   }
}

console.log(searchFullName(people, searchText));