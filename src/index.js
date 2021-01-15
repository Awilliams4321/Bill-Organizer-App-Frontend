const billsUrl = "http://localhost:3000/bills"
const categoriesURL = "http://localhost:3000/categories"

const categoryList = document.getElementById("category-names")
const submitBillForm = document.getElementById("bill-form")

const assessTest = document.getElementById("test")
assessTest.addEventListener("change", Bill.renderCategory)

submitBillForm.addEventListener("submit", Bill.postBill)

Bill.fetchBills()

