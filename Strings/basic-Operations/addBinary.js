let a = "1010";

let b = "1011";

let i = a.length-1;
let j = b.length-1;

let result = [];

let carry = 0;

while(i>=0 || j>=0 || carry){

    let bitA = i>=0 ? parseInt(a[i]) : 0;
    let bitB = j>=0 ? parseInt(b[j]) : 0;

    let sum = bitA + bitB + carry;

    result.push(sum%2);

    carry = Math.floor(sum/2);

    i--;
    j--;
}

console.log(result.reverse().join(""));