const errorText = document.querySelector(".error")
const form = document.querySelector(".form")
const email = document.querySelector(".email")

const emailPattern = /.+@.+\..+/

form.addEventListener("submit", e => {
    if (email.value.trim() === "") {
        e.preventDefault()
        const msg = "Whoops! It looks like you forgot to add your email"
        showError(msg)
    } else if (!emailPattern.test(email.value)) {
        e.preventDefault()
        const msg = "Please provide a valid email address"
        showError(msg)
    }

})

email.addEventListener("input", e=>{
    if (email.value.trim() !== "" && emailPattern.test(email.value)) {
        removeError()
    }
})

function showError(msg) {
    errorText.textContent = msg
    errorText.style.visibility = "visible"
    email.classList.add("email--error")
}

function removeError(){
    errorText.style.visibility = "hidden"
    email.classList.remove("email--error")
}