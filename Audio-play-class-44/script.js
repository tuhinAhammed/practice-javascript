var btnLength = document.querySelectorAll(".btn").length

for(var i = 0 ; i < btnLength ; i++){
    var btn = document.querySelectorAll(".btn")[i].addEventListener("click" , function(){
        var text = this.innerHTML
        console.log(text);
        plays(text)
    })

}
function plays(text){

    switch (text) {
        case "a":
            console.log("a");
            var audio = new Audio ("sounds/a.mp3" )
            audio.play()
            setTimeout( function(){
                audio.pause();
            } , 4000)
            break;

        case "b":
            var audio = new Audio ("sounds/b.mp3")
            audio.play()
            setTimeout(() => {
                audio.pause()
            } , 3000)
            break;
    }
}