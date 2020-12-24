const billsUrl = "http://localhost:3000/bills"
const categoriesURL = "http://localhost:3000/categories"

const categoryList = document.getElementById("category-names")

const billForm = document.getElementById("bill-form")
const billName = document.getElementById("bill-name")
const creditor = document.getElementById("creditor")
const balanceOwed = document.getElementById("balance-owed")
const monthlyPayment = document.getElementById("monthly-payment")
const dueDate = document.getElementById("due-date")

Category.fetchCategories()

// fetchBills()



billForm.addEventListener("submit", submitBillForm)

function submitBillForm(e) {
    e.preventDefault()
    // console.log() 
}

// function fetchBills() {
//     fetch(billsUrl)
//     .then(response => response.json())
//     .then(bills => {
//         for(let bill of bills){
//             let newBill = new Bill(bill.data)
//         }
//         this.renderBills()
//     }
// }

function renderBills(bills) {
    const ul = getElementById("category-names")
    bills.forEach(bill => {
        const h3 = document.createElement("h3")
        h3.innerHTML = bill.name
        ul.appendChild(h3)
    })
}

