let prices = [7,1,5,3,6,4];    // prices represents price on each i'th day

let maxProfit = 0;

let minPrice = prices[0];

for(let i=0;i<=prices.length-1;i++){

    if(prices[i]<minPrice){

        minPrice = prices[i];
    }

    else{
 
        let profit = prices[i] - minPrice;

        if(profit>maxProfit){

            maxProfit = profit
        }

    }
}

console.log("Maximum profit = "+ maxProfit);