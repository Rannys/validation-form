var btn = document.querySelector(".Sendbutton")
var btnreset = document.querySelector(".resetbutton")
let check = document.querySelector(".enterpassword");
let email = document.querySelector(".EnterEmailadress");
let regexEmail = /([a-z\d\.-]{3,})@([a-z]+)\.([a-z]{2,6})/
let regexpass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
let name = document.querySelector(".Entername");
let adress = document.querySelector(".Enteradress")

function checkpass() {

    if (!check.value == null || check.value == "", email.value == null || email.value == "") {
        alert("Please Fill All Required Field");
        return false;
    }
    else if (!regexEmail.test(email.value)) {
        alert('the email not valid');
        return false
    } else if (!regexpass.test(check.value)) {
        alert('Password must have uppercase , a special charac and a minimum of 8charc')
        return false
    }
    else {
        return true
    }
}
function reset() {
    check.value = ""
    email.value = ""
    name.value = ""
    adress.value = ""
}
btn.addEventListener("click", checkpass)
btnreset.addEventListener("click", reset)
