// ==(Equal) here js is loosely typed language so it will convert string in to number
console.log("== operator");
var a = 10;
// var b = "10"; it will convert string in to number
var b = "a10"; // but not here
if(a == b){
    console.log(true);
}else{
    console.log(false);  
}

//        === (Strictly equal)

console.log("=== operator");
var a = 10;
// var b = "10"; 
var b = 10; 
if(a === b){
    console.log(true);
}else{
    console.log(false);  
}

//     != NOT Equal
console.log(" != operator");
var a = 10;
// var b = "10"; 
var b = 20; 
if(a != b){
    console.log(true);
}else{
    console.log(false);  
}



// greather or lessthen
console.log(" > or < operator");
var a = 10;
var b = 20; 
if(a > b){
    console.log(true);
}else{
    console.log(false);  
}

//rest are same like lessthen < or <= or >=