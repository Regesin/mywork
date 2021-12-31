var Employee = function(name, department){
    this.name = name;
    this.department = department;
    this.getDetails = function(){
        console.log(`Welcome ${name} from ${department}`);
    }
};

Employee.prototype.printDetails = function(){
    console.log(this.name);
    console.log(this.department);
};

var employee = new Employee('Arun', 'Accounts');
employee.printDetails();
console.log(employee);

var Manager = function(mname, department,salary){
    Employee.call(this,mname, department);
    this.salary = salary;
};
Manager.prototype = Object.create(Employee.prototype);
var manager = new Manager('jo', 'Anmie', 152000);
console.log(manager);
console.log(Manager.prototype);
manager.printDetails();