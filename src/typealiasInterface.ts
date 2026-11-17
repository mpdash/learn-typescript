// type User = {
//     username: string,
//     age: number
// }
// let user1: User = {
//     username: "mah",
//     age: 30
// }
// let user2: User = {
//     username: "dev",
//     age: 10
// }
// console.log(user1);
// console.log(user2);

type AddFunction = (a: number, b: number) => number;
let add: AddFunction = (a, b) => {
    return a + b;
}
console.log(add(10, 20));


//interface
interface User {
    readonly id: number,
    username: string,
    age?: number
}
let u1: User = {
    id: 1,
    username: "Alice",
    age: 25
}
console.log(u1.username);
console.log(u1.age);

let u2: User = {
    id: 2,  
    username: "Bob",
}
console.log(u2.username);
console.log(u2.age);

// Function Interface
interface multiplication{
    (a: number, b: number): number;
}let multiply: multiplication = (a, b) => {
    return a * b;
}
console.log(multiply(5, 10));

