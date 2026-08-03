let arr = [10,20,34,32,56,43];
//               i

let Max = Math.max(arr[0], arr[1]);

let sMax = Math.min(arr[0],arr[1]);

for(let i=2;i<arr.length;i++){

    if(arr[i]>Max){

        sMax = Max;
        Max = arr[i];
    }

    else if(arr[i]>sMax && Max!= arr[i]){

        sMax = arr[i]
    }
}

console.log("Second max = "+ sMax);