

var a = 10;
var a = 12;//no error

let b = 10;
// let b = 12; will show error we can't redeclare in let
const c = 10;
// c = 20; will show error can't update the value of constant


// Scoe vairables



// local variables
function add(){
    var x = 10;    //here x and b are local variables and above the variables are the global variables 
    let b = 20;
    console.log(x+b);
}
add();
