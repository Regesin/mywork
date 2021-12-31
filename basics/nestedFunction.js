// var calcAvg = function(num1, num2, num3) {
//     var sum = function(){
//         return num1 + num2 + num3;
//     }
//     var avg = sum() / 3;
//     return avg;
// }

// var av = calcAvg(10, 20, 30);
// console.log(av);

// var calcAvg = function(num1, num2, num3) {
//     var avg = function() {
//         return num1 + num2 + num3;
//     }()/3;
//     return avg;
// }

// var av = calcAvg(10, 20, 30);
// console.log(av);

// var calcAvg = function(num1, num2, num3) {
//     return function() {
//         return num1 + num2 + num3;
//     };
// }

// var av = calcAvg(10, 20, 30)();
// console.log(av/3);


// create a outer function printName() which takes a username
// return an inner function which PRINTS welcome username


// var printName = function(username) {
//     return function() {
//         console.log('welcome ' +username.toUpperCase());
//     }
// }
// printName('pooh')();



// var empDetails = function(name, city, salary ){
//     var message = "Great Day";
//     console.log(city)
//     return function(salary) {
//         console.log(`${message} ${name}`);
//         console.log(salary * 200)
// }
    
// }
// empDetails(
//     function(name){
//         return 'Arun';
//     },'hyderabad',100000)();

// var empDetails = function(name, city, salary)  {
//     var message = "Great day";
//     return function(amount)  {
//         console.log(`${message} ${name}`);
//         console.log(`${salary * amount}`);
//         }
//     }


// empDetails("Arjun", "CBE", 200000)(10);

