class Bill {

    static allBills = []
    
    constructor(bill) {
        this.id = bill.id
        this.name = bill.attributes.name
        this.creditor = bill.attributes.creditor
        this.balance_owed = bill.attributes.balance_owed
        this.monthly_payment = bill.attributes.monthly_payment
        this.due_date = bill.attributes.due_date
        this.category_id = bill.attributes.category_id
        this.category = bill.attributes.category.name
        
        Bill.allBills.push(this)
        this.renderBills()
    }

    static postBill(e) {
        e.preventDefault()
        const billName = document.getElementById("bill-name")
        const creditor = document.getElementById("creditor")
        const balanceOwed = document.getElementById("balance-owed")
        const monthlyPayment = document.getElementById("monthly-payment")
        const dueDate = document.getElementById("due-date")
        const categoryId = document.getElementById("category-id")

        fetch(billsUrl, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                name: billName.value,
                creditor: creditor.value,
                balance_owed: balanceOwed.value,
                monthly_payment: monthlyPayment.value,
                due_date: dueDate.value,
                category_id: parseInt(categoryId.value)
            })
        })
        .then(response => response.json())
        .then(bill => {
            let newBill = new Bill(bill.data)
        })
    }
    
    static fetchBills() {
        fetch(billsUrl)
        .then(response => response.json())
        .then(bills => {
            bills.data.forEach(bill => {
                let newBill = new Bill(bill)
            })
        })
    }

    static renderCategory(e) {
        const categoryId = this.value
        // console.log(categoryId)

        const billArray = Bill.allBills
        // debugger
        billArray.forEach(bill => {
            // debugger
            if(bill.category_id == categoryId) {
                
                const categoryP = document.createElement("p")
                categoryP.innerText = `
                Category: ${bill.category}
                Bill Name: ${bill.name} 
                Creditor: ${bill.creditor}
                Remaining Balance: ${bill.balance_owed} 
                Monthly Payment: $${bill.monthly_payment}
                Due Date(each month): ${bill.due_date}th
                `
                const ul = document.getElementById("category-names")
                ul.appendChild(categoryP)


            }
        })

        // debugger

        // const billCatVals = billArray.map(bill => bill.category_id)
        // console.log(billCatVals)
        
        // const categoryTag = document.createElement("p")
        // categoryTag.id = categoryId
        // categoryTag.innerText = ""

        // const newArray = billArray.filter(function (bill) {
        //     return bill.category_id == categoryId
        // })
        

        
    }
            // if bill.category_id == categoryId
            // debugger
            // ))

        // if(categoryId == )


        // const selectedCategory = document.getElementById("test").value
        // console.log

        // let billArray = Bill.allBills
        // let categoryNames = billArray.map(bill => bill.category_id)
        // console.log(categoryNames)

        // billArray.filter(category => debugger
        //     console.log(category))
    

   
    // renderBills() {

    //     const pCat = document.createElement("p")
    //     pCat.dataset.id = this.category
    //     pCat.id = "category-styling"
    //     pCat.innerText = this.category

    //     const billDiv = document.createElement("div")
    //     billDiv.id = this.id
        
    //     billDiv.innerText = `
    //     Bill Name: ${this.name} 
    //     Creditor: ${this.creditor}
    //     Remaining Balance: ${this.balance_owed} 
    //     Monthly Payment: $${this.monthly_payment}
    //     Due Date(each month): ${this.due_date}th
    //     `

    //     const deleteButton = document.createElement("button")
    //     deleteButton.innerText = "delete"
    //     deleteButton.addEventListener("click", this.deleteBill)

    //     billDiv.appendChild(deleteButton)

    //     pCat.append(billDiv)
    //     categoryList.appendChild(pCat)
    //     submitBillForm.reset()
    // }

    deleteBill() {
        const billId = this.parentElement.id

        fetch(`${billsUrl}/${billId}`, {
            method: "DELETE"
        })

        this.parentElement.parentElement.remove() 
    }

}