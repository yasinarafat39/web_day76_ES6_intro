// function add(a = 0, b = 0){
//     return a + b;
// }


const add2 = function add(a = 0, b = 0){
    return a + b;
}
console.log(add2(4, 7));


// arrow function   

// const add3 = (a, b) => {return a + b};
const add3 = (a, b) => a + b;
console.log(add3(4, 7));


const add4 = (a = 0, b = 0, c = 0, d = 0) => a + b + c + d;
console.log(add4(1, 2, 3, 4))
console.log(add4())
