let arr1 = [2,5,6];

let arr2 = [1,3,4,8];

let i=0, j=0, k=0;

let mergedArray = new Array(arr1.length + arr2.length);

while(i<arr1.length && j<arr2.length){

    if(arr1[i]<arr2[j]){

        mergedArray[k] = arr1[i];

        k++;
        i++
    }

    else{

        mergedArray[k] = arr2[j];
        
        k++;
        j++;
    }
}

while(j<arr2.length){

    mergedArray[k] = arr2[j];

    k++;
    j++;
}

while(i<arr1.length){

    mergedArray[k] = arr1[i];

    k++;
    j++;
}

console.log(mergedArray);