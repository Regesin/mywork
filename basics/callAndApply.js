// var User = function(username, department){
//     this.username = username;
//     this.department = department;
// }

// var Employee = function(username, department, salary){
//     this.username = username;
//     this.department = department;
//     this.salary = salary;
// }

// var user = new User("Arjun", "CSE");
// var employee = Employee("Arun", "Admin", 250000);

// getDetails = function(message){
//     console.log(message);
//     console.log(`welcome ${this.username}`);
//     console.log(`Department ${this.department}`);
//     console.log(`salary ${this.salary}`);
// }
// console.log("++++++++++++++++++++++++++++++++++++++++++++++")
// getDetails.call(user, 'Great day');
// getDetails.call(employee, 'Welcome Back');
// console.log("++++++++++++++++++++++++++++++++++++++++++++++")
// // using apply
// getDetails.apply(user, ['Great Day']);
// getDetails.apply(employee, [' Welcome Back']);


// showMessage = function(msg1, msg2){
//     console.log(msg1);
//     console.log(`${msg2} ${this.username}`);
// }
// showMessage.call(user, 'LEarning is fun', 'Hello');
// showMessage.call(employee, 'Working is fun', 'Bye');


// var Product = function(itemname, quantity, price){
//     this.itemname = itemname;
//     this.quantity = quantity;
//     this.price = price;
// }

// var usernames = ['Ram', 'Tom', 'Arjun', 'John']

// showNames = (message) => {
//     usernames.forEach((value) => console.log(`${message} ${value.toUpperCase()}`));
// }

// showNames.call(usernames, 'Have fun');
// showNames.apply(usernames, ['Happy Weekend']);
// printDetails = (description, amount) => {
//     console.log(Mobile details for ${description.brand} ${description.model});
//     console.log(Price: ${description.price - amount});
//     }


// printDetails.call(mobiles, 1000);


// var mobiles = [
//     {
//         model: 'A123', brand: 'Samsung', price: 25000
//     },
//     {
//         model: 'Note 10', brand: 'Mi', price: 10000
//     },
//     {
//         model: 'IPhone 13', brand: 'Apple', price: 850000
//     }
// ]

// var laptops = [
//     {
//         model: 'Y520', brand: 'Lenovo', price: 890000
//     },
//     {
//         model: 'Mi Note Book', brand: 'Mi', price: 690000
//     },
//     {
//         model: 'Mac Book pro', brand: 'Apple', price: 120000
//     }
// ]

// mobiles.forEach((mobile) => {
//     desc = "Mobile Details";
//   printDetails.call(mobile, 'Mobile Details', 1000);
// });

// function printDetails(description, amount){
//     console.log(`Model : ${this.model}`);
//     console.log(`Brand : ${this.brand}`);
//     amount = this.price - amount;
//     console.log(`Price : ${amount}`);
// }

// laptops.forEach((laptop)=>{
// printDetails.call(laptop, 'Laptop Details', 10000)
// });

var calSum = function(...nums){
    var sum = 0;
    nums.forEach(value=>{
        sum += value;
    })
    console.log(sum)
}
calSum.call(null, 90, 80, 70);
calSum.apply(null, [90, 80,70]);