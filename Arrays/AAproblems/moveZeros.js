// This is a program to move all zeroes to the right while maintaining the order of non-zero numbers.

let nums = [0,1,0,3,12];

let i = j = 0;

while(i<nums.length){

    if(nums[i]!=0){

        let temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;

        i++;
        j++;
    }

    else{
        i++;
    }
}

console.log(nums);