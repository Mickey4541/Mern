//Filtering an array of objects to dispaly items based on a search query (e.g: filtering a product by name).
const products = [
    { name: "Laptop", price: 1000},
    { name: "Phone", price: 1000000},
    { name: "Tablet", price: 10000},
    { name: "Monitor", price: 100000},
];

let newArr = products.filter(function(product){
    return product.price === "1000";
})
console.log(newArr);
