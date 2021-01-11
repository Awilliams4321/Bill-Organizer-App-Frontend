class Bill {

    static allBills = []

    constructor(bill) {
        this.id = bill.id
        this.name = bill.name
        this.creditor = bill.creditor
        this.balance_owed = bill.balance_owed
        this.monthly_payment = bill.monthly_payment
        this.due_date = bill.due_date
        this.category_id = bill.category_id
        this.category = bill.attributes.category.name
        
        Bill.allBills.push(this)
        this.renderBills()
    }

    static billForm(e) {
        const billId = document.getElementById("bill-id").value
        const billName = document.getElementById("bill-name").value
        const creditor = document.getElementById("creditor").value
        const balanceOwed = document.getElementById("balance-owed").value
        const monthlyPayment = document.getElementById("monthly-payment").value
        const dueDate = document.getElementById("due-date").value
        const categoryId = document.getElementById("category-id").value
        // console.log(billName)
        // debugger
        
        Bill.postBill(billId, billName, creditor, balanceOwed, monthlyPayment, dueDate, categoryId)
    }

    static fetchBills() {
        fetch(billsUrl)
        .then(response => response.json())
        .then(bills => {
            bills.data.forEach(bill => {
                let newBill = new Bill(bill)
                // console.log(newBill)
                Category.renderCategories(newBill)
                // newBill.renderBills()
            })
        })
    }
    
    static postBill(billId, billName, creditor, balanceOwed, monthlyPayment, dueDate, categoryId) {
        event.preventDefault()
        const formData = {billId, billName, creditor, balanceOwed, monthlyPayment, dueDate, categoryId}
        console.log(formData)
        let configObj = {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                id: billId,
                name: billName,
                creditor: creditor,
                balance_owed: balanceOwed,
                monthly_payment: monthlyPayment,
                due_date: dueDate,
                category_id: categoryId
            })
        }

        fetch(billsUrl, configObj)
        .then(response => response.json())
        .then(bill => {
            let newBill = new Bill(bill.data)
            console.log("clicked")
            console.log(newBill)
            newBill.renderBills()
        })
    }

    renderBills() {

        // console.log(newBill)
        const p = document.createElement("p")
        p.dataset.id = this.category_id

        const pBill = document.createElement("p")
        pBill.innerText = `Bill Name: ${this.name} 
        Creditor: ${this.creditor}
        Remaining Balance: ${this.balance_owed} 
        Monthly Payment: ${this.monthly_payment}
        Due Date(each month): ${this.due_date}`


        p.appendChild(pBill)
        categoryList.appendChild(p)
    }

}