var Vechicle = function(model, brand){

    this.model = model;
    this.brand = brand;
    this.show = function(){
        console.log(`Model ${this.model} brand ${this.brand}`)
    }
};

Vechicle.prototype.printDetails = function(){
    console.log(this.model);
    console.log(this.brand);
}
Vechicle.prototype.getMileage = function(mileage){
    console.log(this.mileage);
}
