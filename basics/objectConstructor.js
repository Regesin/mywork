// // This is a class. First letter should be capital
// var Employee = function(name, city){
//     this.name = name;
//     this.city = city;
//     this.getDetails = function(){
//         console.log(`Welcome ${name} from ${city}`);
//     }
// }
// // create a object

// var employee = new Employee('Sri', 'Coimbatore');
// employee.getDetails();
// console.log(employee.name.toUpperCase());

// var employee1 = new Employee('Arjun', 'Kochi');
// employee1.getDetails();
// console.log(employee1.name.toUpperCase());

// // prototype based on language
// // add a new property to the prototype

// Employee.prototype.salary = 984872;
// Employee.prototype.printBonous = function(amount){
//     console.log("bonus "+ (this.salary* amount));
// }
// employee.salary= 800000;
// console.log(employee);
// employee.printBonous(15200);

// employee1.salary= 400000;
// console.log(employee1);
// employee1.printBonous(1000);

// var Product = function(productName, brand, price){
//     this.productName = productName;
//     this.brand = brand;
//     this.price = price;
//     this.getDetails = function(){
//         console.log(`productName ${productName} brand ${brand} price ${price}`);
//      }
// }

// Product.prototype.category = "electronics";
// Product.prototype.discount = 10;
// Product.prototype.printDiscount = function(discount){
//     console.log(price - ((price * discount))/100);
// }

// Product product  = new Product("Mobile phone","MI",10000);
// product.printDiscount();


// product.name = "Hair dryer";
// product.price = 1000;
// product.brand = "nayka";
// product.printDiscount();