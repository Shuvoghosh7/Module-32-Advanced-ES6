/* const numbers =[2,4,8,16]
const newArray=[];
const dubleOld = num => num *2
for(const number of numbers){
    const result=dubleOld(number);
    newArray.push(result);
}
console.log(newArray); */

//1. loop through each element
//2. for each element call the provided function
//3. result for ecah element will be stored in an array.
const numbers =[2,4,8,36]
const dubleOld = num => num *2
// const output = numbers.map(dubleOld);
// we can use derict function hear
const output = numbers.map(num => num *2);
console.log(output);
