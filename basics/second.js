// var message = ['J','a','v','a'];
// // var show = function(...message){
// //     console.log(...message);
// // }
// // show();

// // console.log(...message);

// var student = {username : 'arjun', age: 25};
// var address = {city: 'coimbatore', state: 'tamil nadu'};
// var studentDetails = {...student, ...address, mobile: 854787457};
// // console.log(studentDetails);

// //Betty bought some bitter butter. So betty made the bitter butter better
// // convert this into a array, and find the number of b's in the sentence
// // also count the total length of the sentence

// var countMessagee = function(...texts){
//     array.forEach((value)=>{
//         if(value.includes('b') || value.includes('B')){
//             count++;
//         }
//     });
//     console.log(count);
// }
// var code = 'Betty bought some bitter butter. So betty made the bitter butter better';
// countMessagee(...code);


// Immediately Invoked Function expression
// IIFE

(function (){
    console.log("hello");
})();

(function (username) {
    console.log(`Welcome..... \n  ${username}`);
})('Sandeep');