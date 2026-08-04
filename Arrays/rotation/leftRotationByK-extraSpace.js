// let k = Number(prompt("Enter value for k"));

let k = 2;

let arr = [1,2,3,4,5];

let temp = [];

k = k % arr.length;

for(let i=0;i<arr.length;i++){

    temp[i] = arr[(i+k) % arr.length];
}

console.log(temp);



