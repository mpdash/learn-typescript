let num1 = [1, 2, 3, 4, 5];
let num2 = [6, 7, 8, 9, 10];

let num3 = [...num1, ...num2];
console.log(num3);

let user1 = {
    username: "mahesh",
    age: 30
}

let user2 = {
    ...user1,
    city: "Bangalore"
}
console.log(user2);
