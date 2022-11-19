const form = document.querySelector("#form")
const firstName = document.querySelector("#firstName")
const lastName = document.querySelector("#lastName")
const email = document.querySelector("#email")
const password = document.querySelector("#password")


form.addEventListener("submit", (e)=>{
    e.preventDefault()

    alert(`Hi, ${firstName.value} ${lastName.value}. You have been successfully registered.`)
    form.reset()
})