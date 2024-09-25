function add(num1 = 0, num2 = 0){
    const result = num1 + num2;
    console.log(num1, num2, result)
    return result;
}

// const sum = add(8, 9);
// const sum = add(8); 8 undefined NaN
const sum = add(); // 0 0 0


function fullName(first = "", second = ""){
    const full = first + ' ' + second;
    return full;
}

fullName()

