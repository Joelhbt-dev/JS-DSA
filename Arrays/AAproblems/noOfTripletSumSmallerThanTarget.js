// This is the solution to find no. of triplets whose sum is lesser than the given target.

let nums = [-2,0,1,3];

let sum = 2;

let count = 0;

for(let i=0;i<nums.length-2;i++){

    let j = i+1;
    let k = nums.length-1;

    while(j<k){

        let add = nums[i] + nums[j] + nums[k];

        if(add>=sum){

            k--;
        }

        else if(add<sum){

            count = count + (k-j);
            j++;
        }
    }
}

console.log(count);