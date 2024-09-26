const actor = {
    name: 'Ananta',
    age: 30,
    phone: '01817482739',
    money: 12548512
}


// const phone = actor.phone;
// const name = actor.name;
// const age = actor.age;

// console.log(phone)
// console.log(name)
// console.log(age)

const {name, age: boyos, phone, money} = actor;
console.log(name)
console.log(boyos)
console.log(phone)
console.log(money)


const numbers = [45, 78, 51];
const [first, second] = numbers;
console.log(first)
console.log(second)

const [x, y] = [50, 1]
console.log(x)
console.log(y)


// 
function doubleThem(a, b){
    return [a*2, b*2];
}

const [prothom, dritrio] = doubleThem(6, 5);
console.log(prothom)
console.log(dritrio)