// var userName:string="mah"
// console.log(userName);

// var num1:number = 30
// var num2:number = 25
// var tot = num1 + num2
// console.log(tot);


// //undefined
// // let loginName:string;
// // console.log(loginName);

// function undefinedfunction(){
//     console.log("undefined function");
// }
// let result = undefinedfunction();
// console.log(result);

// //null
// let selectedUser:string | null = null;
// console.log(selectedUser);

// selectedUser = "mahesh"
// console.log(selectedUser);

// //any - always avoid using any type as it defeats the purpose of using typescript
// let data:any = "mah";
// data = 30;
// console.log(data);

// //unknown - mostly used to handle data from external sources like API calls, user input, etc. It is safer than any type as it requires type checking before performing operations on it.
// let input:unknown = "mah";
// if(typeof input === "string"){
//     console.log(input.toUpperCase());
// }

//never - used for functions that never return a value or always throw an error. It is also used for variables that can never have a value.
// function error(message:string):never{
//     throw new Error(message);
// }
// error("This is an error message");

// function infiniteLoop():never{
//     while(true){
//         console.log("infinite loop");
//     }
// }   
// infiniteLoop();

// //bigint
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(Number.MAX_SAFE_INTEGER+1);
// console.log(Number.MAX_SAFE_INTEGER+2);
// // var bignum:bigint = 2349828472848474n
// // console.log(bignum + 1n);
// var bignumber:bigint = BigInt(2349828472848474)
// console.log(bignumber + 1n);

//symbol
// let sym1 = Symbol();
// let sym2 = Symbol();
// console.log(sym1 === sym2); // false

let id1 = Symbol("id");
let id2 = Symbol("id");
let user={
    [id1]: 1,
    [id2]: 2
}
console.log(user[id1]); // 1
console.log(user[id2]); // 2    
