const { test } = require("mocha");

const Obj = {
    sum(testValues){
        let sum = 0;

        for(let i = 0; i < testValues.length; i++){
            sum += testValues[i];
        }

        sum.toString();

        return sum;
    },

    printSum(sum){
        let stringSum = sum.toString()
        return `The sum is ${stringSum}`;
    }

}




module.exports = {
    Obj,
  };

