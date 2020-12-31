class Bill {

    static allBills = []

    constructor(bill) {
        this.id = bill.attributes.id
        this.name = bill.attributes.name
        this.creditor = bill.attributes.creditor
        this.balance_owed = bill.attributes.balance_owed
        this.monthly_payment = bill.attributes.monthly_payment
        this.due_date = bill.attributes.due_date
        this.category_id = bill.attributes.category_id
        Bills.allBills.push(this)
    }

    static billForm(e) {
        const billName = document.getElementById("bill-name").value
        const creditor = document.getElementById("creditor").value
        const balanceOwed = document.getElementById("balance-owed").value
        const monthlyPayment = document.getElementById("monthly-payment").value
        const dueDate = document.getElementById("due-date").value
        const categoryId = document.getElementById("category-id").value
        // console.log(billName)
        // debugger


        
        Bill.postBill(billName, creditor, balanceOwed, monthlyPayment, dueDate, categoryId)
    }
    
    static postBill(billName, creditor, balanceOwed, monthlyPayment, dueDate, categoryId) {
        const formData = {billName, creditor, balanceOwed, monthlyPayment, dueDate, categoryId}
        let configObj = {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(formData)
        }

        fetch(billsUrl, configObj)
    }

}