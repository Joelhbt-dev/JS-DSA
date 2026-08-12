let nums = [1,2,3,4];

let i = 0;
let j = 1;

while(i<nums.length-1){

    nums[j] = nums[i] + nums[j];
    i++;
    j++
}

console.log(nums);