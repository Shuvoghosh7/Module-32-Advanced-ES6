//fiend length of every element of friends array
const friends =['rifat','joy','sanum','sonjoy'];

const frendLength = friends.map(friend=>friend.length);
// console.log(frendLength);

// if we want to see product er mde name gulake niye ekta array te rakhte.

const products =[
    {name:'moblie',color:'red',price:'22000'},
    {name:'TV',color:'black',price:'30000'},
    {name:'Laptop',color:'white',price:'50000'},
    {name:'watch',color:'green',price:'2200'}
]
const productName =products.map(product=>product.name);
console.log(productName);
products.forEach(product => console.log(product))