const coding = ["py", "Js", "C++", "java"]

const myArr= [1,2,3,4,5,6,7,8,9,10]


// const values = myArr.forEach( (item) => {      //for each does not return any values
//     // console.log(item);
//     return item
// })
// console.log(values);

const myNums= [1,2,3,4,5,6,7,8,9,10]

const newNums = myNums.filter( (nums) => {
    return nums > 5
} )
console.log(newNums);


const books = [
  {
    title: "The Silent Patient",
    genre: "Thriller",
    publishYear: 2019,
    currentEdition: 2022
  },
  {
    title: "Atomic Habits",
    genre: "Self-help",
    publishYear: 2018,
    currentEdition: 2023
  },
  {
    title: "The Hobbit",
    genre: "Fantasy",
    publishYear: 1937,
    currentEdition: 2020
  },
  {
    title: "1984",
    genre: "Dystopian",
    publishYear: 1949,
    currentEdition: 2021
  },
  {
    title: "The Alchemist",
    genre: "Fiction",
    publishYear: 1988,
    currentEdition: 2014
  },
  {
    title: "Sapiens",
    genre: "History",
    publishYear: 2011,
    currentEdition: 2018
  },
  {
    title: "Rich Dad Poor Dad",
    genre: "Self-help",
    publishYear: 1997,
    currentEdition: 2017
  },
  {
    title: "Harry Potter",
    genre: "Fantasy",
    publishYear: 1997,
    currentEdition: 2015
  },
  {
    title: "The Da Vinci Code",
    genre: "Thriller",
    publishYear: 2003,
    currentEdition: 2016
  },
  {
    title: "Brave New World",
    genre: "Dystopian",
    publishYear: 1932,
    currentEdition: 2006
  },
  {
    title: "Think and Grow Rich",
    genre: "Self-help",
    publishYear: 1937,
    currentEdition: 2005
  },
  {
    title: "Game of Thrones",
    genre: "Fantasy",
    publishYear: 1996,
    currentEdition: 2011
  }
];

let userBooks = books.filter((bk) => bk.genre === 'Fantasy')
// console.log(userBooks);

userBooks =  books.filter((bk) => bk.publishYear >= 2000)
// console.log(userBooks);

userBooks = books.filter((bk) => bk.publishYear >=2000 && bk.genre === 'Self-help')
console.log(userBooks);
