// var value = confirm("Are you sure for delete")
// var confirmOutput = document.querySelector(".confirmOutput")
// console.log(value);
// if(value){
//     confirmOutput.innerHTML = "Value Is : " + value

// }
// else{
//     confirmOutput.innerHTML = "Value Is : " + value

// }


try{
    demo()
    function timeZone() {
        var time = document.querySelector(".time")
        var date = new Date()
        var hour = date.getHours()
        var munite = date.getMinutes()
        var second = date.getSeconds()
    
        munite = formatTime(munite)
        second = formatTime(second)
        var allTime = hour + ":" + munite + ":" + second
        time.innerHTML = allTime 
    }
}
catch(err){
    confirm("error found")
    console.error(err.message);
    console.error(err.name);

}
finally{
    console.log("ok");
}
    setInterval(timeZone , 1000)
    function formatTime(value){
        if(value < 10){
            value = "0" + value 
        }
        // console.log(value);
        return value
    }
    
    function promptWork () {
        var demo = prompt("Give Your Name")
        var text = document.createElement("p")
        console.log(demo);
        if(demo == null || demo == ""){
            var promptDiv = document.querySelector(".prompt")
            var text = document.createElement("p")
            promptDiv.appendChild(text)
            text.textContent = "Not Founded"
        }
        else{
            console.log("ok");
                var promptDiv = document.querySelector(".prompt")
                var text = document.createElement("p")
                promptDiv.appendChild(text)
                text.textContent = demo
        }
    }



// promptWork()
// setInterval(promptWork , [2000]);