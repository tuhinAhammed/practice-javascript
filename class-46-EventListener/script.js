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