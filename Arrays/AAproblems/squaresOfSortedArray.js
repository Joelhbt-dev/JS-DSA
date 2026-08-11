let nums = [-7,-3,0,4,5,7];

let i = 0;
let j = nums.length-1;

let arr = new Array(nums.length);

let k = nums.length-1;

while(i<=j){

    if(Math.abs(nums[i]) > Math.abs(nums[j])){

        arr[k--] = nums[i] * nums[i];
        i++;
        
    }

    else{

        arr[k--] = nums[j] * nums[j];
        j--;
    }
}

console.log(arr);