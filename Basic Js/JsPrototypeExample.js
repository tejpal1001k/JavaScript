function Student(id, name, club){
    this.id = id ;
    this.name = name ;
    this.club = club ;
  
}
Student.prototype.printDetails = function(){
        console.log(this.id, this.name, this.club);
}

var s1 = new Student(1,'Raj', "Cricket");
var s2 = new Student(2,"Rohan", "Dance");
var s3 = new Student(3,"Rita", "BasketBall");
var s4 = new Student(4,"Reema", "Music");


var arr = [s1,s2,s3,s4];
for(let i = 0; i<arr.length;i++){
    arr[i].printDetails();
    
}
