//P: Array named prices; each element in the array represents the price of the stock on a certain day(index === day)
//R: Maximinum profit that we can achieve from the transaction, or if there is no profit--- return 0. 
//E: prices = [2,4,6,3,8]; sell on day 5, 8 - 2 = 6; return 6
//P: If the array is empty or there is only one element, return 0. 
//P: Loop within a loop. 

    
var maxProfit = function(prices) {

    let arrayResults = []

    if(prices.length === 0 || prices.length === 1) {
        return 0
    }


    for(let index = 0; index < prices.length; index++) {
     let moveUp = 1


        for(i = index; i < prices.length; i++) {
    
            if(prices[index] - prices[index + moveUp] < 0) {
            arrayResults.push(prices[index] - prices[index + moveUp])
             console.log(prices[index] - prices[index + moveUp])
         }
            
        moveUp++
     }

    }
    
    if(arrayResults.length === 0) {
        return 0
        
    } else {
        return arrayResults.sort((a,b) => (a-b))[0] * -1 }
    
};
