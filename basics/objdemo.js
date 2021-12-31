// // var student ={
// //     username: "Arun",
// //     age: 21,
// //     hobbies:["gardening","music"],
// //     address: {
// //         city: "Hyderabad",
// //         state: "Telangana"
// //     }
// // }
// // // console.log(student);
// // // console.log(student.address);
// // // console.log(student.username);
// // // console.log(student.address.city);
// // // student.mobile = 984875487;
// // // console.log(student);

// // student.department = `CSE`;
// // // console.log(student);

// // // for(const stu in student){
// // //     const value = student[prop];
// // //     console.log(prop+ " : "+ value);
// // // }
// // for(var i in student){
// //     var student1 = student[i];
// //     if(typeof student1 == Array || student1 instanceof Object){
// //         console.log(student1[i]);
// //     }else{
// //         console.log(student1);
// //     }

// // }

// // for (const prop in student) {
// //     const value = student[prop];
// //     if (typeof value == "object") {
// //       for (const prop1 in value) {
// //         console.log(prop1 + " : " + value[prop1]);
// //       }
// //     } else if (Array.isArray(value)) {
// //       for (const prop1 of value) {
// //           console.log(prop1 + " : " + value[prop1]);
// //       }
// //     } else {
// //       console.log(prop + " : " + value);
// //     }
// //   }
// var students = [{
//     studentName: 'Arjun',
//     age: 25,
//     hobbies: ['music','reading'],
//     address:{
//         city: 'khammam',
//         state: 'Telangana'
//     }
// },{
//     studentName: 'Arun',
//     age: 26,
//     hobbies: ['PUBG','gardening'],
//     address:{
//         city: 'Hyderbad',
//         state: 'Telangana'
//     }
// },{
//     studentName: 'Sandeep',
//     age: 30,
//     hobbies: ['PUBG','Cricket'],
//     address:{
//         city: 'Coimbatore',
//         state: 'Tamil Nadu'
//     }
// }]

// // console.log(students);

// // for (const prop in students) {
// //     const value = students[prop];
// //     if (typeof value == "object") {
// //       for (const prop1 in value) {
// //         console.log(prop1 + " : " + value[prop1]);
// //       }
// //     } else if (Array.isArray(value)) {
// //     //   for (const prop1 of value) {
// //     //       console.log(prop1 + " : " + value[prop1]);
// //     //   }
// //     } else {
// //       console.log(prop + " : " + value);
// //     }
// //   }


// //   for(var i of students){
// //     var student1 = students[i];
// //     if(typeof student1 == Array || student1 instanceof Object){
// //         console.log(student1[i]);
// //     }else{
// //         console.log(student1);
// //     }

// // }
// students.forEach(student=>{
//     for(const key in students){
//         var stud = students[key];
//         if(Array.isArray(stud)){
//             for(const key in stud)
//             console.log("hobbies", stud[key]);
//         }
//         else if(typeof(stud) == "object"){
//             for(const key in stud)
//                 console.log(key, stud[key]);
//         }else{
//             console.log(key,students[key]);
//         }
//     }
// })
// var array = [10,80,90,120];
// var sum = 0;
// function calcSum(){
//     for(let index = 0; index <array.length;index++){
//         const element = array[index];
//         sum+element;
//     }
// }
// calcSum(10, 20, 90);
//  var calcSum = function(){
//      var sum = 0;
//     for(let index = 0; index <arguments.length; index++){
//                 const element = arguments[index];
//                 sum+=element;
//       }
//       console.log(sum);
//  }
// calcSum(10, 25,65);
// calcSum(25,547,54,65,54);
// calcSum(547,45);

var calsumm = function(...arrNumbers){
    var sum = 0;
    arrNumbers.forEach(val=> sum+=val);
    console.log(sum);
}
calsumm(10, 25,65);
calsumm(25,547,54,65,54);
calsumm(547,45);