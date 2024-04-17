const promise1 = new Promise((resolve , reject) => {
    var promise1 = true
    if(promise1){
        resolve("Promise 1 work perfectly")
    }
    else{
        reject("Promise 1 can not work ")
    }
})
const promise2 = new Promise((resolve , reject) => {
    resolve("Promise 2 work perfectly")
})
Promise.all([promise1 , promise2])
.then((success) => {
console.log(success);
})
// .then((success) =>{
//     console.log(success);
// })
// .catch((err) =>{
//     console.log(err);
// })