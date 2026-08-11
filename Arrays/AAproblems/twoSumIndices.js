let arr = [2,5,7,11];

let target = 9;

let i=0;
let j = arr.length-1;

let a = [];

while(i<j){

    if(arr[i]+arr[j]===target){

        a = [i,j];
        break;
    }

    else if(arr[i]+arr[j]<target){

        i++;
    }

    else{

        j--;
    }
}

console.log(a);