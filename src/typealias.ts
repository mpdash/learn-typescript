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
