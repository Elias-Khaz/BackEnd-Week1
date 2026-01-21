// Lesson 1

const firstName = "Elias"
const birthYear = 2005
const likesCoding = true

// console.log(`Hi, my name is ${firstName}, I was born ${birthYear}, and it is ${likesCoding} that I like coding.`);

// Lesson 2

const sayHello = "Hello from Node.js"   //Task 1

// console.log(sayHello)


const welcomeUser = (name) => {   //Task 2
    console.log(`Welcome, ${name}!`);
} 

// welcomeUser("Batman");
// welcomeUser("Robin");


const square = (number) => number * number;   //Task 4
const result = square(5);

// console.log(result);


const profile = (name, age, likesCoding) => {   //Task 5
    return `Hi, I'm ${name}, I am ${age} years old, and it is ${likesCoding} that I like coding.`
};
const myProfile = profile("Elias", 20, true);

// console.log(myProfile)

const greetwithTime = (name, timeOfDay = "morning") => {   //Task 6
    return `Good ${timeOfDay}, ${name}!`;
};

const greetingOne = greetwithTime("Elias", "evening")
console.log(greetingOne)

const greetingTwo = greetwithTime("Elias")
console.log(greetingTwo)