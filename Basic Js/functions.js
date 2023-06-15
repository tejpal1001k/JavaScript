// we will discuss functions in js




// function declaration in js 

function add(){
    var a = 10;
    var b = 20;
    console.log(a+b);
}
add();

// return type function

function sub(){
    var a = 10;
    var b = 20;
    return a-b;
}
 var x = sub();
 console.log("this is return type "+x);


 //now discuss the passing the parameters in a function

 function mul(a,b){
    return a*b;
 }
 var x = mul(10,11);
 console.log("passing paramter in function "+x);



//  Now we will discuss function expression(we will assign a function to a variable )

var mul = function div(a,b){
    return a/b;
}
console.log(" Look this will not show output but shou whole function or function address"+mul);
console.log(mul()); // showin NaN because not passing any argument so it taking by default undifined as a input
console.log(mul(10,11));


// Now we will discuss annoynoums function

var hy = function (){
    console.log("hey I am a annoynoums function because of i dont have any name");
};
hy();



// Passing function as a argument in a function

