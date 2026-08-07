let nums = [2,2,1,1,1,2,2];

let candidate = nums[0];

let count = 1;

for(let i=1;i<nums.lengthl;i++){

    if(count==0){

        candidate = nums[i];
        count = 1;
    }

    else if(candidate == nums[i]){

        count++;
    }

    else{

        count--;
    }
}

console.log(candidate);