let arr = [10,23,45,62,13];

let max = arr[0];

for(let i=1;i<arr.length;i++){

    if(max<arr[i]){

        max = arr[i];
    }
}

console.log("Max. element = " + max);