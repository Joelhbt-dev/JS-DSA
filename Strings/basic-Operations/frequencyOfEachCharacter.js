// This code uses frequency mapping to find frequency of each character by storing values inside index taken as ASCII values.

let s = "Hello";

let arr = new Array(128).fill(0);

for(let i=0;i<s.length;i++){

    let indx = s.charCodeAt(i);

    arr[indx] = arr[indx] + 1;
}

for(let i=0;i<arr.length;i++){

    if(arr[i]>0){

        console.log(String.fromCharCode(i) + " appears " + arr[i] + " times");
    }
}