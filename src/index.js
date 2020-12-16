const billForm = document.getElementById("bill-form")
const userForm = document.getElementById("user-form")

billForm.addEventListener("submit", submitBillForm)
userForm.addEventListener("submit", submitUserForm)

function submitBillForm(e) {
    e.preventDefault()
    console.log("submitted")
}

function submitUserForm(e) {
    e.preventDefault()
    console.log("user created")
}