// class 77 - Class
class student {
    constructor(id , name){
        this.id = id ,
        this.name = name
        // return (id , name)
    }
}
 var s1 = new student(12 , "tuhin") 
 console.log(s1);

 // call Back Function
 const task1 = (callback) => {
    console.log("task1");
    callback()
 }
 const task2 = (callback) => {
    setTimeout(() => {
        console.log("task2");
        callback()
    },[3000])
 }
 const task3 = (callback) => {
    console.log("task3");
    callback()
 }
 const task4 = () => {
    console.log("task4");
 }
 task1(()=>{
    task2(()=>{
        task3(()=>{
            task4()
        })
    })
 })

//  task3()
//  task4()