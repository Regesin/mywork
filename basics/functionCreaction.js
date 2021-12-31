// function having function as parameter
var show = (){
    console.log('Welcome');
}

var showName = (name){
    return 'welcome' + name;
}


var checkName = (func, uname){
    var msg = func(uname);
    console.log(msg);
}

// function having function as parameter

var checkfun = (func){
    func();
}

checkfun(show);

checkName(showName, 'ARJUN');

// arrayn = [1,2,3,4,5]
// arrayn.forEach(function());

// var showName = (username) =>{
//     return username;
// }