// create Element 
// remove element
// css change
// class List add
// attribute add

function tuhin (){
    // const myDiv = document.querySelector(".myDiv")
    // myDiv.style.backgroundColor = "green"
    myDiv.classList.add("tuhin")
    for(var i = 0 ; i < 1 ; i= i+1 ){
        var hello4 = document.createElement("h1")
        var text4 = document.createTextNode("Hello 4")
        hello4.appendChild(text4)
        myDiv.appendChild(hello4)
    }
    
}
// create element
var myDiv = document.querySelector(".myDiv")
// myDiv.style.backgroundColor = "red"

var hello3 = document.createElement("h1")
var text = document.createTextNode("Helllooo3")
hello3.appendChild(text)

myDiv.appendChild(hello3)


// ******* Remove Child
var hello2 = document.getElementsByTagName("h1")[1]
console.log(hello2);
myDiv.removeChild(hello2)


// ******** Child ADD bEFORE
var hello0 = document.createElement("h1")
var text0  = document.createTextNode("hello 0")
hello0.appendChild(text0)
console.log(hello0)

myDiv.insertBefore(hello0 , hello3)

// add class List

// myDiv.classList.add("tuhin")
