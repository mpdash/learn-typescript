// //define function type
// let subtract : (a:number, b:number) => number;
// //function implementation
// subtract = (a, b) => {
//     return a - b;
// }
// console.log(subtract(20, 10));


// // //function type with callback
// function processData(
//     callback: (value: number) => void
// ){
//     callback(200);
// }

// processData((num) => {
//     console.log(num);
// });

// // //function type with callback and return type
// function calculate(
//     a:number, 
//     b:number, 
//     operator:(x:number, y:number) => number
// ){
//     return operator(a, b);
// }
// let result1 = calculate(2, 9, (x, y) => x + y);
// console.log(result1);        
// let result2 = calculate(2, 9, (x, y) => x * y);
// console.log(result2);

// //with call signature
// type Multiple ={
//     (a: number, b: number): number;
// }

// let multiplynumber: Multiple = (a, b) => {
//     return a * b;
// }
// console.log(multiplynumber(30, 20));



//with interface
interface Multiple {
    (a: number, b: number): number;
}

let multiplynumber: Multiple = (a, b) => {
    return a * b;
}
console.log(multiplynumber(30, 20));
