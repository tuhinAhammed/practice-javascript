// Object Create
// constructor Create
// adding Function inside constructor


function student(name , age , cgpa , id){
    this.name = name ;
    this.age = age ;
    this.cgpa = cgpa;
    this.id = id
    this.display = function(){
        console.log(this.name);
        // console.log(this.age);
        // console.log(this.cgpa);
        // console.log(this.id);
    }
}
var student1 = new student("tuhin" , 20 , 2.69 , [ 23 , 433])
var student2 = new student("mahim" , 430 , 4.69 , [ 23 , 433])
var student3 = new student("mahim" , 430 , 4.69 , [ 23 , 433])
var student4 = new student("mahim" , 430 , 4.69 , [ 23 , 433])

student1.display()
student2.display()
student3.display()
student4.display()
