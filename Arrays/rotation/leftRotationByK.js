// let k = Number(prompt("Enter value of k"));

let k = 8;

let arr = [1,2,3,4,5];

k = k % arr.length;

for(let i=1;i<=k;i++){

    let copy = arr[0];

    for(let j=0;j<arr.length-1;j++){

        arr[j] = arr[j+1];
    }

    arr[arr.length-1] = copy;


}

console.log(arr);

