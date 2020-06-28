/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    console.log(n)
    let count = 0;
    while(n>0){
        if(n%2!==0){ 
            count++
        }
        n=n>>>1
    }

    return count
};

console.log(hammingWeight(11))