const difference = (x, y) => x - y;
const multiply = (first, second, third) => first * second * third;

// single parameter
// const getAge = (person) => person.age;
const getAge = (person) => person.age;

const student = {
    name: 'ananta',
    age: 45
}

console.log(getAge(student))



// NO parameter
const getPI = () => Math.PI;
console.log(getPI())


// large arrow function. If you want to get anything returned from this function. then you have to use return keyword.

const doMath = (x, y, z) => {
    const sum = x + y + z;
    const mult = x * y * z;
    const result = sum + mult;
    return result;
} 
console.log(doMath(1, 2, 3))