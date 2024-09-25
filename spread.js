const max = Math.max(6, 45, 1, 50, 88);
const numers = [3, 5, 78, 41, 4, 96, 20];
const arryMax = Math.max(...numers);
console.log(max)
console.log(arryMax)



// use spread operator to copy
const num = [45, 5, 45, 54, 100]
const num2 = [...num, 21, 5];

num2.push(12)

console.log(num2)