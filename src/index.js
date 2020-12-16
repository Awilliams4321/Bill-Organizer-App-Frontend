const billForm = document.getElementById("bill-form")

billForm.addEventListener("submit", submitBillForm)

function submitBillForm(e) {
    e.preventDefault()
    console.log("submitted")
}