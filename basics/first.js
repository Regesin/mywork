var username = "Arun Sai";
// var city = "Hyderabad";
// // console.log('welcome '+username+' from '+city);
// // // console.log('welcome', username,'from', city);
// // console.log(`Hello ! This is a demo`);
// // console.log(`Welcome ${username} from ${city}`);

// function greet(){
//     console.log("welcome");
// }
// greet();
// function greet(){
//     console.log("welcome"+username);
// }
// greet();
// var showMessage = function(){
//     console.log("weekend");
// }

// var showMessage = function(){
//     return `welcome ${username}`;
// }

// showMessage();
var showLam = () =>{
    console.log('weekend');
}
showLam();

var checkOne = username =>{
    return `welcome ${username}`;
}
console.log(checkOne('Arjun'));