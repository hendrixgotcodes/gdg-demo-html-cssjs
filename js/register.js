const form = document.querySelector("#form")
const firstName = document.querySelector("#firstName")
const lastName = document.querySelector("#lastName")
const email = document.querySelector("#email")
const password = document.querySelector("#password")

function validateForm(){
    return firstName.value && lastName.value && email.value && password.value
}

form.addEventListener("submit", (e)=>{
    e.preventDefault()

    if(validateForm() === false){
        alert("Form validation failed")
        return;
    }

    alert(`Hi, ${firstName.value} ${lastName.value}. You have been successfully registered.`)
    form.reset()
})