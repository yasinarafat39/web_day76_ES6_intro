// var: no reason to use var
// let: allow it to reassing 
// const: do not allow it to reassing


const money = 25;
// money = 50;
const reach = money + 25;
console.log(reach);


let count = 0;
count = 0 + 10;
console.log(count)

// array
const numbers = [23, 4, 23, 20];
// numbers = [4, 7, 2, 1];
numbers[1] = 40;
console.log(numbers)

// Object
const student = {
    name: "Yasin Arafat",
    age: 22,
    class: "BBS-2nd year"
};
// student = {name: "kokil konthi"}
student.name = "Arafat Yasin"
console.log(student)



// loop
let sum = 0;
for(let i = 0; i < 10; i++){
    const num  = i;
    sum = sum + num;
}
console.log(sum)
