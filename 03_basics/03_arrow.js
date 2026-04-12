const user = {
    username: "Hitesh",
    price: 999,

    welcomeMessage: function (){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
    }
}

// user.welcomeMessage()
// console.log(`=======================current context==================================`);

// user.username = "Sam"
// user.welcomeMessage()
// console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
    
// }
// chai()

const chai = () => {
    let username = "hitesh"
    console.log(this.username);
}
// chai()

// const addTow = (num1, num2) =>{            //when we use curly braces use return
//     return num1 + num2
// }
// const addTow = (num1, num2) => num1 + num2
const addTow = (num1, num2) => ({username: "hitesh"})   //when we use paranthesis do not  use return


console.log(addTow(3 , 4));


