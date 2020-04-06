let data = [{ Principal:2500,time:1.8},{ Principal:1000,time:5},{ Principal:3000,time:1},{Principal:2000,time:3}];
const interestData = [];
function interestCalculator(array){
   for (const iterator of array) {
       console.log(iterator);
       if (iterator.Principal >= 2500 && iterator.time === 2) {
           iterator.rate = 3;
       } else if(iterator.Principal>= 2500 &&iterator.time >= 3){
           iterator.rate = 4;
       } else if (iterator.Principal < 2500 || iterator.time < 1) {
           iterator.rate = 2;
       } else {
           iterator.rate = 1;
       }
       let interest = (iterator.Principal * iterator.rate * iterator.time)/100;
       iterator.interest = interest;
       console.log(iterator)
       interestData.push(iterator);
   }
   console.log(interestData);
   return interestData;
}
console.log(interestCalculator(data));