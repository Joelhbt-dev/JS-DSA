// This is a maximum subarray problem where one has to find max sum out of continous elements.
// Here because of negative numbers maxSum is taken as -ve infinity and sum is 0 for summing.
// Negative numbers are reassigned to 0 in sum as they decrease.
// maxSum is reassigned to get the maximum sum out of sum,maxSum;

let arr = [-2,-3,4,-1,-2,1,5,-3];

let maxSum = - Infinity;

let sum = 0;

for(let i=0;i<arr.length;i++){

    sum += arr[i];

    maxSum = Math.max(maxSum,sum);

    if(sum<0){

        sum = 0;
    }
}

console.log(maxSum);