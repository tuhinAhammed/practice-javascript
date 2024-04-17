var demo = [4 , 5 , 6 , 6]
var newDemo = demo.filter((demo1) => {
        return demo1 > 5
})
console.log(demo);
console.log(newDemo);
for(var test in demo){
        console.log(test);
}

// class 75 Find Method

var evenNumber =[
        {
                name : "tuhin",
                age : 15
        },
        {
                name : "seno",
                age : 12
        },
        {
                name : "demo",
                age : 23
        },
        {
                name : "sixo",
                age : 17
        }
]
const evenTest = (value , index , array) => {
        if (value.age > 21){
                return value
        }
        
}
var evenDemo = evenNumber.find(evenTest)
// var evenDemoIndex = evenNumber.findArray(evenTest)
console.log(evenDemo.name);
console.log(evenDemoIndex)