// var greet = function(){
//     return {
//         username: 'Arun',
//         city: 'Hyb',
//         show:()=>'Hello',
//         print:()=> console.log('Welcome')
//     }
// };

// var obj = greet();
// console.log(obj);
// console.log(obj.show());
// obj.print();
// console.log(obj.city);


// module DP
// module dp -IIFE
// (function () {
//   // declare private variables
//   // return an object that points to private variables
// })()

// The module returns an object

// var greetObj = (function(){
//     var _username = 'Sri';
//     _show = function(){
//         _print();
//         return `Hello ${_username}`;
//     };
//     var _print = function(){
//         console.log("Welcome");
//     };
//     return{
//         uname: _username,
//         printName: _show
//     }
// })();

// console.log(greetObj.uname);
// console.log(greetObj.printName());

var interestModule = (function (amount){
    var _rate = 5;
    var _years = 10;
    var _setInterest= function(){
        _interest = ( amount * _years * _rate) / 100;
    };
    var _getInterest = function(){
        _setInterest();
        return _interest;
    };
    return {
        message: 'Interest Calculation',
        calcInterest: _getInterest
    }
})(9000);

console.log(interestModule.message);
console.log(interestModule.calcInterest());

