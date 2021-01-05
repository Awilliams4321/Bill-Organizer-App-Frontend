const billsUrl = "http://localhost:3000/bills"
const categoriesURL = "http://localhost:3000/categories"

const categoryList = document.getElementById("category-names")
const submitBillForm = document.getElementById("bill-form")


Category.fetchCategories()
submitBillForm.addEventListener("submit", Bill.billForm)



// function renderBills(bills) {
//     const ul = getElementById("category-names")
//     bills.forEach(bill => {
//         const h3 = document.createElement("h3")
//         h3.innerHTML = bill.name
//         ul.appendChild(h3)
//     })
// }
