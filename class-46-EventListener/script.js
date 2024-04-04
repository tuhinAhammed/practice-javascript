// Click Lister
var clickEvent = document.querySelector(".click")
var clickLength = clickEvent.length

clickEvent.addEventListener("click" , () => {
    clickEvent.classList.add("clickAnim")
})

// KeyPressListener
var keyPressEvent = document.querySelector(".keyPress")
var keyPressOutput = document.querySelector(".keyPressOutput")
var keyPressOutputLength = 1
keyPressEvent.addEventListener("keypress" , (event) => {

    var text = event.key
    keyPressOutput.innerHTML = "You Press This key " + text + "<br/>" + keyPressOutputLength ++
})

// *********** Change  - Listener ***********//

var changeName = document.querySelector("input[name=name]")
var nameOutput = document.querySelector(".nameOutput")
changeName.addEventListener("change" , (e) => {
    var text = e.target.value
    nameOutput.innerHTML= "Name Output : " + text 

})

var radioChange = document.querySelectorAll("input[name=gender]")
var genderOutput = document.querySelector(".genderOutput")
// console.log(radioChange);
Array.from(radioChange).map((change) => {
    change.addEventListener("change" , (e) => {
        console.log(change);
        genderOutput.innerHTML ="Gender Output : " + e.target.value
    })
})
var subject = document.querySelector(".subject")
var subjectOutput = document.querySelector(".subjectOutput")
    console.log(subject);
    subject.addEventListener("change" , (e) => {
        subjectOutput.innerHTML = (e.target.value)
    })

var changeTextarea = document.querySelector(".changeTextarea")
var textareaOutput = document.querySelector(".textareaOutput")
changeTextarea.addEventListener("change" , (e) => {
    textareaOutput.innerHTML = "TextArea Output Is : " + e.target.value
})

// *********** submit  - Listener ***********//

var form = document.querySelector("form")
var nameInput = form.querySelector("label .name")
var emailInput = form.querySelector("label .email")
var passwordInput = form.querySelector("label .password")
var submitInput = form.querySelector("label .submit")
var formOutput = document.querySelector(".formOutput")
form.addEventListener("submit" , (e) => {
    console.log(submitInput);
    e.preventDefault()
    console.log(form);
    var formData = {
        nameInput : nameInput.value ,
        emailInput : emailInput.value ,
        passwordInput : passwordInput.value
    }
    formOutput.innerHTML ="Name : " + formData.nameInput +"email : " +   formData.emailInput + "password : " + formData.passwordInput ;
    nameInput.value = "" ,
    emailInput.value = "" ,
    passwordInput.value = ""
})
submitInput.addEventListener("focusin" , (e) => {
    console.log(e.target)
    submitInput.classList.add("submitAnim")
    setTimeout(() => {
    submitInput.classList.remove("submitAnim")

    }, [1000])


})
// *********** Scroll  - Event ***********//
var output = document.querySelector(".output")
window.addEventListener("scroll" , (e) => {
    console.log("This Page Is Scroll" )
    output.innerHTML = "Event Output : " + "Scroll Event -- This Page Is Scroll";
})
window.addEventListener("resize" , (e) => {
    // console.log(window.outerWidth);
    output.innerHTML = "Event Output : " + "Resize Event -- This Page Is Scroll " + "W - : " + window.outerWidth + "H - : " + window.outerHeight;
})
var toggle = document.querySelector("details")
toggle.addEventListener("toggle" , (e) => {
    console.log(e.target.open);
    output.innerHTML = "Event Output : " + e.type  + e.target.open;
})

// *********** Mouse -- dblclick  - Event ***********//

var mouseEvent = document.querySelector(".mouseEvent")
var mouseOutput = document.querySelector(".mouseOutput")
console.log(mouseEvent);

// *********** mouseover  - Event ***********//

mouseEvent.addEventListener("mouseenter" , (e) => {
    mouseOutput.innerHTML = "Event Output : " + e.type
    mouseEvent.classList.add("mouseEventAnim")
})

// *********** mouseleave  - Event ***********//

mouseEvent.addEventListener("mouseleave" , (e) => {
    mouseOutput.innerHTML = "Event Output : " + e.type
    mouseEvent.classList.remove("mouseEventAnim")
})

// *********** mouseover  - Event ***********//

mouseEvent.addEventListener("mouseover" , (e) => {
    mouseOutput.innerHTML = "Event Output : " + e.type
    mouseEvent.classList.add("mouseEventAnim")
})

// *********** mousemove  - Event ***********//
// mouseEvent.addEventListener("mousemove" , (e) => {
//     mouseOutput.innerHTML = "Event Output : " + e.type
//     mouseEvent.classList.add("mouseEventAnim")
// })

// *********** mousedown  - Event ***********//
    mouseEvent.addEventListener("mousedown" , (e) => {
        mouseOutput.innerHTML = "Event Output : " + e.type ;
        mouseEvent.classList.add("mouseEventAnim")
        console.log(e.type);
    })


// *********** mouseup  - Event ***********//

mouseEvent.addEventListener("mouseup" , (e) => {
    mouseOutput.innerHTML = "Event Output : " + e.type
    mouseEvent.classList.remove("mouseEventAnim")
    console.log(e.type);
})

// *********** Focus  - Event ***********//

var focusEvent = document.querySelector(".focusEvent")
var focusOutput = document.querySelector(".focusOutput")
// *********** Focus  - Event ***********//
focusEvent.addEventListener("focus" , (e) => {
    focusEvent.classList.add("focusEventAnim")
    focusOutput.innerHTML ="Event Output : " + e.type
    console.log(e.type);
})

// *********** Focusin  - Event ***********//

focusEvent.addEventListener("focusin" , (e) => {
    focusEvent.classList.add("focusEventAnim")
    focusOutput.innerHTML ="Event Output : " + e.type
    console.log(e.type);
})

// *********** Focusout  - Event ***********//

focusEvent.addEventListener("focusout" , (e) => {
    focusEvent.classList.remove("focusEventAnim")
    focusOutput.innerHTML ="Event Output : " + e.type
    console.log(e.type);
})
// *********** blur  - Event ***********//
// focusEvent.addEventListener("blur" , (e) => {
//     focusEvent.style.background = "tomato"
//     focusOutput.innerHTML ="Event Output : " + e.type
//     console.log(e.type);
// })


// *********** clickBoard  - Event ***********//
// copy , cut , paste
var clickboardEvent = document.querySelector(".clickboardEvent")
var clickboardOutput = document.querySelector(".clickboardOutput")

// *********** copy  - Event ***********//
clickboardEvent.addEventListener("copy" , (e) => {
    clickboardEvent.classList.add("clickboardEventAnim")
    clickboardOutput.innerHTML = "you Are " + e.type + " text from here"
})
clickboardEvent.addEventListener("cut" , (e) => {
    clickboardEvent.classList.add("clickboardEventAnim")
    clickboardOutput.innerHTML = "you Are " + e.type + " text from here" 
})
clickboardEvent.addEventListener("paste" , (e) => {
    clickboardEvent.classList.add("clickboardEventAnim")
    clickboardOutput.innerHTML = "you Are " + e.type + " text from here"
})

// *********** Drag  - Event ***********//
// dragstart , dragend , drag , dragenter , dragleave , dragover , drop

var dragHere = document.querySelector(".dragHere")
var dragText = document.querySelector(".dragText")
console.log(dragText);

dragText.addEventListener("dragstart" , (e) =>{
e.dataTransfer.setData("Text" , e.target.classList)
// console.log("start");
}) 
dragHere.addEventListener("dragover" , (e) =>{
    // console.log(e.target);
    // console.log("ok");
    e.preventDefault()
    // dragHere.classList.add("dragHereAnim")

})
dragHere.addEventListener("drop" , (e) => {
        dragHere.classList.add("dragHereAnim")
        dragHere.textContent = ""
        var data = e.dataTransfer.getData("Text")
        dragHere.appendChild(document.querySelector(".dragText"))
        console.log("drop");
})

dragHere.addEventListener("dragenter" , (e) => {
    dragHere.classList.add("dragHereAnim")

})
dragHere.addEventListener("dragleave" , (e) => {
    dragHere.classList.remove("dragHereAnim")

})