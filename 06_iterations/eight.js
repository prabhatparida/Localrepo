const myNums = [3,4,5,6,7,8,9,10];

// const myTotal = myNums.reduce(function (accumulator, currentvalue){
//     console.log(`accumulator: ${accumulator} and current value: ${currentvalue}`);
//     return accumulator + currentvalue
// }, 0 )

const myTotal = myNums.reduce((accumulator, currentvalue) => accumulator + currentvalue, 4)

console.log(myTotal);

const shoppingCart = [
    {
        itemName: "Java Course",
        price: 3999
    },
    {
        itemName: "Python Course",
        price: 1299
    },
    {
        itemName: "PHP Course",
        price: 4999
    },
    {
        itemName: "Js Course",
        price: 999
    },
    {
        itemName: "data Science Course",
        price: 3999
    },
]

const pricetoPay = shoppingCart.reduce((acc, item) => acc + item.price , 0);

console.log(pricetoPay);