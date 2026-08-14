// This code is meant to find out the closest sum possible of its elements to the given target

let nums = [-1,2,1,-4];

target = 1;

nums.sort((a,b)=>a-b);

let maxDiff = Infinity;

let resSum = 0;

for(let i=0;i<nums.length-2;i++){

    let j = i+1;
    let k = nums.length-1;

    while(j<k){

        let sum = nums[i] + nums[j] + nums[k];

        let diff = Math.abs(target - sum);

        if(maxDiff>diff){

            maxDiff = diff;
            resSum  = sum;
        }

        if(sum===target){

            return sum;
        }

        else if(sum<target){

            j++;
        }

        else{

            k--;
        }
    }
}

console.log(resSum);