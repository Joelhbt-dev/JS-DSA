let nums = [2,0,2,1,1,0];

let i = j = 0;

let k = nums.length-1;

while(i<=k){

    if(nums[i]===0){

        let temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;

        i++;
        j++;
    }

    else if(nums[i]===2){

        let temp = nums[i];
        nums[i] = nums[k];
        nums[k] = temp;

        k--;
    }

    else{

        i++
    }
}

console.log(nums);