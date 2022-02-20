const numbers =[10,90,20,30,40,70,80]

const bigNumber = numbers.filter(number => number > 20);
// console.log(bigNumber);
const products =[
    {name:'moblie',color:'red',price:'22000'},
    {name:'TV',color:'black',price:'30000'},
    {name:'Laptop',color:'white',price:'50000'},
    {name:'watch',color:'green',price:'2200'}
]
const price = products.filter(product => product.price < 50000);
console.log(price);
const colors = products.filter(product => product.color == 'black')
console.log(colors);
const colorss = products.find(product => product.color == 'green')
console.log(colorss);
