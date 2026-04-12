const myNums = [1,2,3]

const myTotal = myNums.reduce( (acc , curr) => acc + curr ,0) 
// console.log(myTotal);

const shopingCart = [
    {
        item: "Course 1",
        price: 999
    },
    {
        item: "Course 2",
        price: 666
    },
    {
        item: "Course 3",
        price: 777
    },
    {
        item: "Course 4",
        price: 111
    }
]

const totalCartValue = shopingCart.reduce( (acc , item) => acc + item.price ,0)
console.log(totalCartValue);x
