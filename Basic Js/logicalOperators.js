//         &&  logical AND
// if both are true then it will return true


console.log("   &&  logical AND if both are true then it will return true");
var a = true;
var b = true; 
// var b = false; 
if(a && b){
    console.log(true);
}else{
    console.log(false);  
}


// ***** || logical OR  ****

console.log("   ||  logical OR if any of them is true then it will return true");
var a = true;
// var b = true; 
var b = false; 
if(a || b){
    console.log(true);
}else{
    console.log(false);  
}

// ******   ! denote by logical NOT
console.log("   !  Logical NOT it will reverse the value");
// var a = true;
var a = false;
if(!a){
    console.log(true);
}
else{
    console.log(false);
}
