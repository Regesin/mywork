var names = ["ram","srimanth","nayeem","ajay"]
for(let i = 0; i < names.length; i++){
    const name = names[i];
    console.log(name);
}

// this is similar to for each in java
//using for in
console.log("================================")
for (const key in names) {
    console.log(names[key]);    
}

//using for of
console.log("================================")
for(const key of names){
    console.log(key);
}
console.log("================================")
// using foreach
names.forEach(element => {
    
});
// using foreach
names.forEach(function(value, index, names){
    console.log(value+' '+index);
    console.log(names[index]);
})
console.log("================================")
//using Lamda
names.forEach((value)=>{
    console.log(value);
})

console.log("================================")

var fruits = ['mango','kiwi','orange','pineapple','apple'];

fruits.forEach((value)=>{
    if(value.includes("o") | value.includes("p")){
        console.log(value);
    }
        
})