
var length = document.querySelectorAll(".add").length
var text = document.querySelector(".text")

function afterClick (){
    var demo = this.innerHTML
    text.innerHTML = demo + " is Cliked"
}
for(var i = 0 ; i < 3 ; i++){
    var add = document.querySelectorAll(".add")[i].addEventListener("click" , afterClick)
}


// event Property
// 1 - click
// 2 - dblclick
// 3 - mousedown
// 4 - mouseup
// 5- contextmenu
// 6 -mouseout
// 7 - mousewheel
// 8 - mouseover

// touch event
// 1-touchstart