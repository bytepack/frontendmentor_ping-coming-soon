const errorText = document.querySelector(".error")
const form = document.querySelector(".form")
const email = document.querySelector(".email")

const msgForget = "Whoops! It looks like you forgot to add your email"
const msgWrong = "Please provide a valid email address"
const emailPattern = /.+@.+\..+/

form.addEventListener("submit", e=>{
    if (email.value.trim() === "") {
        e.preventDefault()
        errorText.textContent = msgForget
        errorText.style.visibility = "visible"
    }
    else if (!emailPattern.test(email.value)){
        e.preventDefault()
        errorText.textContent = msgWrong
        errorText.style.visibility = "visible"
    }

})